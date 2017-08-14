// Input - система управления игрока
export class Input {
    constructor(game) {
        let self = this;

        this.game = game;

        this.canvas = this.game.inputCanvas;
        this.context = this.game.inputCanvasContext;

        this.cursors = [];
        this.cursorsCount = 0;
        this.buttonPressed = false;
        this.dragSelect = false;
        this.insideCanvas = true;
        this.cursorLoop = 0;
        this.cursor = null;
        this.tooltip = null;
        this.panDirection = "";
        this.panningThreshold = 24;
        this.panningVelocity = 12;

        this.canvas.addEventListener('mousemove', (e) => self.mouseMoveListener(e), false);

        this.canvas.addEventListener('mousedown', (e) => self.mouseDownListener(e), false);

        this.canvas.addEventListener('mouseup', (e) => self.mouseUpListener(e), false);

        this.canvas.addEventListener('mouseout', function(e) {
            self.insideCanvas = false;
            self.draw()
        }, false);

        this.canvas.addEventListener('mouseover', function(e) {
            self.insideCanvas = true;
            self.buttonPressed = false;
        }, false)

        this.canvas.addEventListener('click', (e) => self.mouseClickListener(e), false);        

        this.canvas.addEventListener('contextmenu', function(e) {
            self.click(e, true);
            return false
        }, false);

        this.canvas.addEventListener('keydown', function(e) {
            self.game.keyPressed(e);
        }, false);

        this.canvas.addEventListener('keyup', function(e) {
            self.game.keyReleased(e);
        }, false)
    }

    load() {
        this.spriteImage = this.game.loader.loadImage("images/mouse.png");
        this.blankCursor = this.game.loader.loadImage("images/blank.gif");
        this.defaultCursor = this.game.loader.loadImage("images/default-cursor.gif");

        this.loadCursor("default");

        this.cursor = this.cursors["default"];
    }

    loadCursor(name, x, y, imageCount, cursorSpeed) {
        if (!x && !y) {
            x = 0;
            y = 0
        };
        
        if (!cursorSpeed) {
            cursorSpeed = 1
        };
       
        if (!imageCount) {
            imageCount = 1
        };
        
        this.cursors[name] = {
            x: x,
            y: y,
            name: name,
            count: imageCount,
            spriteOffset: this.cursorsCount,
            cursorSpeed: cursorSpeed
        };

        this.cursorCount += imageCount;
    }

    click(e, rightClick) {
        if (!this.game.running) {
            return
        }
        
        this.game.click(e, rightClick)
    }

    mouseMoveListener(e) {
        let $inputCanvas = $(".inputcanvas");
        let offset = $inputCanvas.offset();

        this.x = Math.round((e.pageX - offset.left) * this.game.scaleFactor);
        this.y = Math.round((e.pageY - offset.top) * this.game.scaleFactor);

        this.gameX = this.x - this.game.viewport.adjustX;
        this.gameY = this.y - this.game.viewport.adjustY;

        this.gridX = Math.floor(this.gameX / this.game.gridSize);
        this.gridY = Math.floor(this.gameY / this.game.gridSize);

        if (this.buttonPressed) {
            if (this.game.running) {
                this.dragSelect = true
            }
        } else {
            this.dragSelect = false
        }
        
        this.draw()        
    }

    mouseClickListener(e) {
        this.click(e, false);
        this.dragSelect = false;

        return false
    }

    mouseDownListener(e) {
        if (e.which == 1) {
            this.buttonPressed = true;
            this.dragX = this.gameX;
            this.dragY = this.gameY;

            e.preventDefault()
        }

        return false
    }

    mouseUpListener(e) {
        if (e.which == 1) {
            if (this.dragSelect && !this.game.showMessage) {
                if (!e.shiftKey) {
                    this.game.clearSelection()
                }

                let x1 = Math.min(this.gameX, this.dragX);
                let y1 = Math.min(this.gameY, this.dragY);
                let x2 = Math.max(this.gameX, this.dragX);
                let y2 = Math.max(this.gameY, this.dragY);

                let lastUnit;
                for (let i = this.game.items.length - 1; i >= 0; i--) {
                    let unit = this.game.items[i];
                    
                    if (!unit.unselectable && unit.player == this.game.player && x1 <= unit.x * this.game.gridSize && x2 >= unit.x * this.game.gridSize && y1 <= (unit.y - unit.z) * this.game.gridSize && y2 >= (unit.y - unit.z) * this.game.gridSize) {
                        this.game.selectItem(unit, e.shiftKey, true);
                        lastUnit = unit
                    }
                }
            }

            this.buttonPressed = false
        }
        return false
    }

    underMouse() {
        if (this.y < this.game.viewport.top || this.y > this.game.viewport.top + this.game.viewport.height || this.game.fog.isPointOverFog(this.gameX, this.gameY)) {
            return false
        }
        
        let selection = false;
        for (let i = this.game.items.length - 1; i >= 0; i--) {
            let item = this.game.items[i];
            
            if (Math.pow(item.x - this.gameX / this.game.gridSize, 2) + Math.pow(item.y - item.z - this.gameY / this.game.gridSize, 2) < Math.pow((item.softCollisionRadius + 4) / this.game.gridSize, 2)) {
                if (item.player == game.player) {
                    return item
                }
            }
        }

        return selection;
    }

    setCursor() {
        this.cursor = this.cursors["default"];
        this.tooltip = null;
        this.objectUnderMouse = undefined;

        if (!this.game.running) {
            return
        }

        this.cursor = this.cursors["default"]

        this.cursorLoop++;
        if (this.cursorLoop >= this.cursor.cursorSpeed * this.cursor.count) {
            this.cursorLoop = 0
        }

        this.draw()
    }

    handlePanning() {
        let panDirection = "";
        
        this.game.viewport.deltaX = 0;
        this.game.viewport.deltaY = 0;

        if (this.insideCanvas || this.game.upKeyPressed || this.game.downKeyPressed || this.game.leftKeyPressed || this.game.rightKeyPressed) {
            
            if (this.game.upKeyPressed || this.y <= this.game.viewport.top + this.panningThreshold && this.y >= this.game.viewport.top) {
                this.game.viewport.deltaY = -this.panningVelocity * this.game.scrollSpeed;
                panDirection += "_top";
            } else if (this.game.downKeyPressed || this.y >= this.game.viewport.top + this.game.viewport.height - this.panningThreshold && this.y <= this.game.viewport.top + this.game.viewport.height) {
                this.game.viewport.deltaY = this.panningVelocity * this.game.scrollSpeed;
                panDirection += "_bottom";
            } else {
                this.game.viewport.deltaY = 0;
                panDirection += "";
            }
            if (this.game.leftKeyPressed || this.x < this.panningThreshold && this.y >= this.game.viewport.top && this.y <= this.game.viewport.top + this.game.viewport.height) {
                this.game.viewport.deltaX = -this.panningVelocity * this.game.scrollSpeed;
                panDirection += "_left";
            } else if (this.game.rightKeyPressed || this.x > this.game.screenWidth - this.panningThreshold && this.y >= this.game.viewport.top && this.y <= this.game.viewport.top + this.game.viewport.height) {
                this.game.viewport.deltaX = this.panningVelocity * this.game.scrollSpeed;
                panDirection += "_right";
            } else {
                this.game.viewport.deltaX = 0;
                panDirection += "";
            }
        }

        if (this.game.viewport.x + this.game.viewport.deltaX < 0 || this.game.viewport.x + this.game.viewport.deltaX + this.game.screenWidth > this.game.map.currentMapImage.width) {
            this.game.viewport.deltaX = 0;
        }

        if (this.game.viewport.x + this.game.screenWidth > this.game.map.currentMapImage.width) {
            this.game.viewport.x = this.game.map.currentMapImage.width - this.game.screenWidth;
            this.game.viewport.deltaX = 0;
        }

        if (this.game.viewport.y + this.game.viewport.deltaY < 0 || this.game.viewport.y + this.game.viewport.deltaY + this.game.viewport.height > this.game.map.currentMapImage.height) {
            this.game.viewport.deltaY = 0;
        }

        if (panDirection !== "") {
            if (this.game.viewport.deltaX === 0 && this.game.viewport.deltaY === 0) {
                panDirection = "no_pan" + panDirection;
            } else {
                panDirection = "pan" + panDirection;
            }
        }

        this.panDirection = panDirection;

        this.game.viewport.x += this.game.viewport.deltaX;
        this.game.viewport.y += this.game.viewport.deltaY;
        
        if (this.game.viewport.deltaX || this.game.viewport.deltaY) {
            this.game.refreshBackground = true;
        }

        this.game.viewport.adjustX = this.game.viewport.left - this.game.viewport.x;
        this.game.viewport.adjustY = this.game.viewport.top - this.game.viewport.y;
    }    

    draw() {
        this.context.clearRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);

        if (this.insideCanvas) {
            let imageNumber = this.cursor.spriteOffset + Math.floor(this.cursorLoop / this.cursor.cursorSpeed);
            
            this.context.drawImage(this.spriteImage, 30 * imageNumber, 0, 30, 24, this.x - this.cursor.x, this.y - this.cursor.y, 30, 24);
            
            if (this.dragSelect) {
                let x = Math.min(this.gameX, this.dragX);
                let y = Math.min(this.gameY, this.dragY);
                let width = Math.abs(this.gameX - this.dragX);
                let height = Math.abs(this.gameY - this.dragY);
                
                this.context.strokeStyle = "white";
                this.context.strokeRect(x + this.game.viewport.adjustX, y + this.game.viewport.adjustY, width, height)
            }
            
            if (this.tooltip) {
                let tooltipHeight = 14 * this.tooltip.length + 3;
                let tooltipWidth = this.tooltip[0].length * 6;
                
                let x = Math.round(this.x);
                let y = Math.round(this.y + 16);

                this.context.fillStyle = "black";
                this.context.fillRect(x, y, tooltipWidth, tooltipHeight);
                this.context.strokeStyle = "darkgreen";
                this.context.strokeRect(x, y, tooltipWidth, tooltipHeight);
                this.context.fillStyle = "darkgreen";
                this.context.font = "12px Command";

                for (let i = 0; i < this.tooltip.length; i++) {
                    this.context.fillText(this.tooltip[i], x + 4, y + 14 + i * 14)
                }
            }
        }
    }
}