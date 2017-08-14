export class Fog {
    constructor(game) {
        this.game = game;

        this.fogGrid = [];
        this.canvas = document.createElement("canvas");
    }

    init() {
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.game.map.currentMapContent.width * this.game.gridSize;
        this.canvas.height = this.game.map.currentMapContent.height * this.game.gridSize;
        this.context.fillStyle = "rgba(0,0,0,1)";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        let fogGrid = [];

        for (let i = 0; i < this.game.map.currentMapContent.height; i++) {
            fogGrid[i] = [];
            
            for (let j = 0; j < this.game.map.currentMapContent.width; j++) {
                fogGrid[i][j] = 1
            }
        }
        
        for (let l = this.game.players.length - 1; l >= 0; l--) {
            this.fogGrid[this.game.players[l]] = $.extend(true, [], fogGrid)
        }
    }

    isPointOverFog(x, y) {
        if (y < 0 || y / this.game.gridSize >= this.game.map.currentMapContent.height || x < 0 || x / this.game.gridSize >= this.game.map.currentMapContent.width) {
            return true
        }

        return this.fogGrid[this.game.player][Math.floor(y / this.game.gridSize)][Math.floor(x / this.game.gridSize)] == 1
    }

    animate() {
        this.context.globalCompositeOperation = "destination-out";
        
        for (let i = this.game.items.length - 1; i >= 0; i--) {
            let item = this.game.items[i];

            for (let l = this.game.players.length - 1; l >= 0; l--) {
                let player = this.game.players[l];

                if (item.player == player || item.firing) {
                    let x = Math.floor(item.cgX);
                    let y = Math.floor(item.cgY);
                    let x0, y0, x1, y1;

                    if (item.player === player) {
                        x0 = x - item.sight < 0 ? 0 : x - item.sight;
                        y0 = y - item.sight < 0 ? 0 : y - item.sight;
                        x1 = x + item.sight > this.game.map.currentMapContent.width - 1 ? this.game.map.currentMapContent.width - 1 : x + item.sight;
                        y1 = y + item.sight > this.game.map.currentMapContent.height - 1 ? this.game.map.currentMapContent.height - 1 : y + item.sight
                    } else {
                        x0 = x - 1 < 0 ? 0 : x - 1;
                        y0 = y - 1 < 0 ? 0 : y - 1;
                        x1 = x + 1 > this.game.map.currentMapContent.width - 1 ? this.game.map.currentMapContent.width - 1 : x + 1;
                        y1 = y + 1 > this.game.map.currentMapContent.height - 1 ? this.game.map.currentMapContent.height - 1 : y + 1
                    }
                    
                    for (let j = x0; j <= x1; j++) {
                        for (let k = y0; k <= y1; k++) {
                            if (j > x0 && j < x1 || k > y0 && k < y1) {
                                if (this.game.player == player && this.fogGrid[player][k][j]) {
                                    this.context.fillStyle = "rgba(100,0,0,0.9)";
                                    
                                    this.context.beginPath();
                                    this.context.arc(j * this.game.gridSize + 12, k * this.game.gridSize + 12, 16, 0, 2 * Math.PI, false);
                                    this.context.fill();
                                    this.context.fillStyle = "rgba(100,0,0,0.7)";

                                    this.context.beginPath();
                                    this.context.arc(j * this.game.gridSize + 12, k * this.game.gridSize + 12, 18, 0, 2 * Math.PI, false);
                                    this.context.fill();
                                    this.context.fillStyle = "rgba(100,0,0,0.5)";
                                    
                                    this.context.beginPath();
                                    this.context.arc(j * this.game.gridSize + 12, k * this.game.gridSize + 12, 24, 0, 2 * Math.PI, false);
                                    this.context.fill()
                                }

                                this.fogGrid[player][k][j] = 0
                            }
                        }
                    }
                }
            }
        }

        this.context.globalCompositeOperation = "source-over"
    }

    draw() {
        this.game.foregroundContext.drawImage(this.canvas, this.game.viewport.x, this.game.viewport.y, this.game.viewport.width, this.game.viewport.height, this.game.viewport.left, this.game.viewport.top, this.game.viewport.width, this.game.viewport.height)
    }
}
