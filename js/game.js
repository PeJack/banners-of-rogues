// Системы
import {Loader} from './systems/loader';
import {Input} from './systems/input';
import {Fog} from './systems/fog';
import {Map} from './systems/map';

// Модуль одиночной игры
import {SinglePlayer} from './singleplayer';

// Юнитов и их аттрибуты
import {Infantry} from './units/infantry';
import {Weapons} from './units/items/weapons';

// Хелпер
import {Helpers} from './helpers';

export class Game {
    constructor() {
        this.backgroundCanvas = document.getElementById("backgroundCanvas");
        this.backgroundContext = this.backgroundCanvas.getContext('2d');

        this.foregroundCanvas = document.getElementById("foregroundCanvas");
        this.foregroundContext = this.foregroundCanvas.getContext('2d');

        this.inputCanvas = document.getElementById("inputCanvas");
        this.inputCanvasContext = this.inputCanvas.getContext("2d");

        this.screenWidth = 640;
        this.screenHeight = 535;
        this.aspectRatio = 640 / 535;
        this.scaleFactor = 1;
        this.canvasWidth = 640;
        this.canvasHeight = 535;
        this.gridSize    = 24;
        this.animationTimeout = 100;
        this.animationInterval = undefined;
        this.gameSpeed = 1;
        this.scrollSpeed = 1;
        this.speedAdjustmentFactor = 6;
        this.gameTick = 0;
        this.fullScreen = true;

        this.viewport = {
            x: 0,
            y: 0,
            top: 35,
            left: 0,
            height: 481,
            adjustX: 0,
            adjustY: 0
        };

        this.lastDrawTime = 0;
        this.players = [];
        this.items = [];
        this.attackableItems = [];
        this.effects = [];
        this.kills = {};
        this.deaths = {};
        this.player = undefined;
        this.team = undefined;
        this.cash = [];
        this.counter = 0;
        this.selectionArrays = ["selectedItems", "selectedUnits", "selectedAttackers", "selectedInfantry"];
        this.itemArrays = ["attackableItems", "infantry", "items", "permissions", "attackedPlayers", "discoveredPlayers"];
        this.commands = [];
       
        this.permissions = [];
        this.selectedUnits = []; 
        this.infantry = [];
        this.walls = [];

        window.helpers = new Helpers(this);

        this.itemClass = {
            infantry: new Infantry(this)
        };

        this.init();
    }

    init() {
        $(window).resize(this.resize.bind(this));        
        this.resize();

        this.loader       = new Loader(this);
        this.input        = new Input(this);
        this.fog          = new Fog(this);        
        this.map          = new Map(this);

        this.singleplayer = new SinglePlayer(this);        

        this.weapons      = new Weapons(this);

        this.input.load();     
        this.map.load("test", this.singleplayer.startLevel);
    }

    resize() {
        let windowWidth = $(window).width();
        let windowHeight = $(window).height();

        let maxPossibleWidth = windowWidth - 10;
        let maxPossibleHeight = windowHeight - 10;

        let newWidth, newHeight;

        if (windowWidth >= 1100) {
            if (maxPossibleWidth / maxPossibleHeight > this.aspectRatio) {
                newWidth = Math.floor(maxPossibleHeight * this.aspectRatio);
                newHeight = maxPossibleHeight
            } else {
                newHeight = Math.floor(maxPossibleWidth / this.aspectRatio);
                newWidth = maxPossibleWidth
            }

            this.scaleFactor = 640 / newWidth;

            $(".gamecontainer").width(newWidth).height(newHeight);
            $(".gamelayer").width(newWidth).height(newHeight);
            $(".mainpanel").width(newWidth);
        }
    }

    createGrids() {
        if (!this.terrainGrid) {
            this.buildingLandscapeChanged = true;

            let terrainGrid = Array(this.map.currentMapTerrain.length);
            
            for (let i = 0; i < this.map.currentMapTerrain.length; i++) {
                terrainGrid[i] = Array(this.map.currentMapTerrain[i].length);

                for (let j = 0; j < this.map.currentMapTerrain[i].length; j++) {
                    if (this.map.currentMapTerrain[i][j]) {
                        terrainGrid[i][j] = 1
                    } else {
                        terrainGrid[i][j] = 0
                    }
                }
            }

            this.terrainGrid = terrainGrid;
        }

        if (this.buildingLandscapeChanged) {
            this.obstructionGrid = $.extend(true, [], this.terrainGrid);

            for (let i = this.walls.length - 1; i >= 0; i--) {
                let item = this.walls[i];
                
                for (let j = item.gridShape.length - 1; j >= 0; j--) {
                    for (let k = item.gridShape[j].length - 1; k >= 0; k--) {
                        if (item.gridShape[j][k] == 1) {
                            this.obstructionGrid[Math.floor(item.y) + j][Math.floor(item.x) + k] = item.name
                        }
                    }
                }
            }
        }

        if (!this.foggedObstructionGrid) {
            this.foggedObstructionGrid = {}
        }

        for (let l = this.players.length - 1; l >= 0; l--) {
            let player = this.players[l];
            let fogGrid = this.fog.fogGrid[player];

            if (!this.foggedObstructionGrid[player]) {
                this.foggedObstructionGrid[player] = $.extend(true, [], this.obstructionGrid)
            }

            for (let j = this.foggedObstructionGrid[player].length - 1; j >= 0; j--) {
                for (let k = this.foggedObstructionGrid[player][j].length - 1; k >= 0; k--) {
                    this.foggedObstructionGrid[player][j][k] = fogGrid[j][k] == 1 ? 0 : this.obstructionGrid[j][k] === 0 ? 0 : 1
                }
            }
        }
    }

    animationLoop() {
        this.input.setCursor();
        this.createGrids();

        for (let i = this.items.length - 1; i >= 0; i--) {
            let item = this.items[i];

            if (item.processOrders) {
                item.processOrders()
            }

            item.animate();

            if (item.preRender) {
                item.preRender()
            }
        }

        this.fog.animate();

        this.sortedItemsArray = $.extend([], this.items);
        this.sortedItemsArray.sort(function(a, b) {
            let by = b.cgY ? b.cgY : b.y;
            let ay = a.cgY ? a.cgY : a.y;

            return (b.z - a.z) * 1.25 + (by - ay) + (by == ay ? a.x - b.x : 0)
        });
        
        this.lastAnimationTime = (new Date).getTime()
    }

    drawingLoop() {
        this.foregroundContext.clearRect(0, 0, this.screenWidth, this.screenHeight);
        this.lastDrawTime = (new Date).getTime();

       if (this.lastAnimationTime) {
            this.movementInterpolationFactor = (this.lastDrawTime - this.lastAnimationTime) / this.animationTimeout - 1;
            if (this.movementInterpolationFactor > 0) {
                this.movementInterpolationFactor = 0
            }
        } else {
            this.movementInterpolationFactor = -1
        }

        this.foregroundContext.save();
        this.foregroundContext.beginPath();

        this.viewport.width = this.screenWidth;

        this.foregroundContext.rect(this.viewport.left, this.viewport.top, this.viewport.width - this.viewport.left, this.viewport.height);
        this.foregroundContext.clip();

        this.input.handlePanning();
        this.map.draw();

        for (let i = this.sortedItemsArray.length - 1; i >= 0; i--) {
            this.sortedItemsArray[i].draw()
        }

        this.fog.draw();
        this.foregroundContext.restore();
        this.input.draw();

        if (this.running) {
            this.drawingInterval = requestAnimationFrame(this.drawingLoop.bind(this))
        }
    } 
    
    highlightGrid(i, j, width, height, optionalImage) {
        let gridSize = this.gridSize;

        if (optionalImage && $(optionalImage).is("img")) {
            this.foregroundContext.drawImage(optionalImage, i * gridSize + this.viewport.adjustX, j * gridSize + this.viewport.adjustY, width * gridSize, height * gridSize)
        } else {
            if (optionalImage) {
                this.foregroundContext.fillStyle = optionalImage
            } else {
                this.foregroundContext.fillStyle = "rgba(225,225,225,0.5)"
            }

            this.foregroundContext.fillRect(i * gridSize + this.viewport.adjustX, j * gridSize + this.viewport.adjustY, width * gridSize, height * gridSize)
        }
    }

    remove(item) {
        if (item.selected) {
            item.selected = false;
            
            for (let j = this.selectionArrays.length - 1; j >= 0; j--) {
                let type = this.selectionArrays[j];
                
                for (let i = this[type].length - 1; i >= 0; i--) {
                    if (this[type][i].uid == item.uid) {
                        this[type].splice(i, 1);
                        break
                    }
                }
            }
        }

        for (let i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].uid == item.uid) {
                this.items.splice(i, 1);
                break
            }
        }

        for (let i = this.attackableItems.length - 1; i >= 0; i--) {
            if (this.attackableItems[i].uid == item.uid) {
                this.attackableItems.splice(i, 1);
                break
            }
        }

        for (let j = this.controlGroups.length - 1; j >= 0; j--) {
            let group = this.controlGroups[j];
            
            if (group) {
                for (let i = group.length - 1; i >= 0; i--) {
                    if (group[i].uid == item.uid) {
                        group.splice(i, 1);
                        break
                    }
                }
            }
        }

        for (let i = this[item.type].length - 1; i >= 0; i--) {
            if (this[item.type][i].uid == item.uid) {
                this[item.type].splice(i, 1);
                break
            }
        }
    }

    add(item) {
        let object;
        this.counter++;

        if (item.uid == undefined) {
            item.uid = this.counter
        }

        switch (item.type) {
        case "infantry":
        case "walls":
            object = this.itemClass[item.type].add(item);
            
            this[item.type].push(object);
            this.items.push(object);
            this.attackableItems.push(object);

            break;
        case "trees":
            // not implemented
            break;
        default:
            console.log("Не загружен " + item.type + " : " + item.name);
            break
        }
        return object
    }

    resetTypes() {
        this.counter = 1;
        this.showEnding = false;
        this.terrainGrid = undefined;
        this.foggedObstructionGrid = undefined;
        this.refreshBackground = true;

        for (let i = this.itemArrays.length - 1; i >= 0; i--) {
            this[this.itemArrays[i]] = []
        }
        
        for (let j = this.selectionArrays.length - 1; j >= 0; j--) {
            this[this.selectionArrays[j]] = []
        }
    }

    selectItem(item, shiftPressed, multipleSelection) {
        if (shiftPressed && item.selected) {
            item.selected = false;
            
            for (let j = this.selectionArrays.length - 1; j >= 0; j--) {
                this[this.selectionArrays[j]].remove(item)
            }
            return
        }

        item.selected = true;
        this.selectedItems.push(item);

        if (item.player == this.player) {
            this.selectedUnits.push(item);

            if (item.primaryWeapon) {
                this.selectedAttackers.push(item)
            }

            if (item.type == "infantry") {
                this.selectedInfantry.push(item)
            }
        }
    }

    clearSelection() {
        for (let i = this.selectedItems.length - 1; i >= 0; i--) {
            this.selectedItems[i].selected = false;
            this.selectedItems.splice(i, 1)
        }

        for (let j = this.selectionArrays.length - 1; j >= 0; j--) {
            this[this.selectionArrays[j]].length = 0
        }
    }

    click(ev, rightClick) {
        let clickedObject = this.input.objectUnderMouse;

        if (rightClick) {
            this.clearSelection();

            return
        } else if (!rightClick && !this.input.dragSelect) {
            let commandUids = [];

            if (clickedObject && this.selectedAttackers.length > 0 && this.input.objectUnderMouse.player != this.player && !this.input.objectUnderMouse.unattackable) {
                for (let i = this.selectedAttackers.length - 1; i >= 0; i--) {
                    commandUids.push(this.selectedAttackers[i].uid)
                }

                this.sendCommand(commandUids, {
                    type: "attack",
                    uidto: clickedObject.uid
                })
            } else if (clickedObject && !clickedObject.unselectable) {
                if (!ev.shiftKey) {
                    this.clearSelection()
                }

                if (!clickedObject.unselectable) {
                    this.selectItem(clickedObject, ev.shiftKey)
                }
            } else if (this.selectedUnits.length > 0) {
                for (let i = this.selectedUnits.length - 1; i >= 0; i--) {
                    commandUids.push(this.selectedUnits[i].uid)
                }
                
                this.sendCommand(commandUids, {
                    type: "move",
                    to: {
                        x: Math.round(16 * this.input.gameX / this.gridSize) / 16,
                        y: Math.round(16 * this.input.gameY / this.gridSize) / 16
                    }
                })
            }
        }
    }

    sendCommand(commandUids, command) {
        this.singleplayer.sendCommand(commandUids, command)
    }

    getItemByUid(uid) {
        for (let i = this.items.length - 1; i >= 0; i--) {
            let item = this.items[i];
            if (item.uid === uid) {
                return item
            }
        }
    }

    receiveCommand(commandUids, command) {
        for (let i = commandUids.length - 1; i >= 0; i--) {
            let item = this.getItemByUid(commandUids[i]);

            if (item) {
                let orders = $.extend(true, {}, command);
                orders.to = orders.uidto ? this.getItemByUid(orders.uidto) : orders.to;

                item.orders = orders;
                item.animationIndex = 0
            }
        }
    }

    reset() {
        this.foregroundContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.backgroundContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.input.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    }
}