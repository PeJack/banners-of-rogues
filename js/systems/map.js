export class Map {
    constructor(game) {
        this.game = game;

        this.current = undefined; 
        this.currentMapTerrain = {};
        this.currentMapContent = undefined;
    }

    load(name, onloadEventHandler) {
        let self = this;

        $.ajax({
            url: "js/maps/" + name + ".js",
            dataType: "json",
            success: function(content) {
                self.loadMapContent(name, content, onloadEventHandler)
            },
            error: function(content, status) {
                alert("Ошибка загрузки карты: " + content);
            }
        })
    }

    loadMapContent(name, content, onloadEventHandler) {
        this.game.backgroundContext.fillStyle = "black";
        this.game.backgroundContext.fillRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);

        this.game.foregroundContext.fillStyle = "black";
        this.game.foregroundContext.fillRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);

        this.game.inputCanvasContext.clearRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);

        this.currentMapContent = content;
        this.currentMapImage = this.game.loader.loadImage("images/maps/" + name + ".jpg");

        this.game.resetTypes();

        this.currentMapTerrain = [];
        for (let i = 0; i < content.height; i++) {
            this.currentMapTerrain[i] = Array(content.width)
        }

        let terrainTypes = Object.keys(content.terrain).sort();
        for (var tt = terrainTypes.length - 1; tt >= 0; tt--) {
            var terrainType = terrainTypes[tt];
            var terrainArray = content.terrain[terrainType];
            
            for (var i = terrainArray.length - 1; i >= 0; i--) {
                this.currentMapTerrain[terrainArray[i][1]][terrainArray[i][0]] = terrainType
            }
        }

        var requirementsTypes = Object.keys(content.requirements).sort();
        for (var rt = requirementsTypes.length - 1; rt >= 0; rt--) {
            var type = requirementsTypes[rt];
            var requirementArray = content.requirements[type];
            for (var i = 0; i < requirementArray.length; i++) {
                var name = requirementArray[i];

                if (this.game.itemClass[type]) {
                    this.game.itemClass[type].load(name)
                } else {
                    console.log("Не загружен тип :", type)
                }
            }
        }

        this.game.singleplayer.initializeLevel(content);
        this.game.viewport.x = content.x * this.game.gridSize;
        this.game.viewport.y = content.y * this.game.gridSize;

        this.game.fog.init();
        if (this.game.loader.loaded) {
            onloadEventHandler() 
        } else {
            this.game.loader.onload = onloadEventHandler.bind(this.game.singleplayer);
        }
    }

    draw() {
        if (this.game.refreshBackground) {
            this.game.backgroundContext.drawImage(this.currentMapImage, this.game.viewport.x, this.game.viewport.y, this.game.viewport.width - 1, this.game.viewport.height, this.game.viewport.left, this.game.viewport.top, this.game.viewport.width, this.game.viewport.height - 1);
            this.game.refreshBackground = false
        }
    }
}