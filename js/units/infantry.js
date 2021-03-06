export class Infantry {
    constructor(game) {
        this.game = game;
        this.type = 'infantry';

        this.list = {
            minigunner: {
                name: "minigunner",
                label: "Minigunner",
                speed: 8,
                primaryWeapon: "machinegun",
                cost: 100,
                sight: 1,
                hitPoints: 50,
                spriteSheet: undefined,
                directions: 8,
                dependency: ["barracks"],
                constructedIn: ["barracks"],
                owner: "both",
                spriteImages: [
                    {
                        name: "stand",
                        count: 8
                    },                    
                    {
                        name: "run",
                        count: 6,
                        direction: true
                    },
                    {
                        name: "guard",
                        count: 30
                    },
                    {
                        name: "crawl",
                        count: 6,
                        direction: true
                    },                     
                    {
                        name: "die-1",
                        count: 15
                    },   
                    {
                        name: "die-2",
                        count: 15
                    },                      
                    {
                        name: "fire",
                        count: 6,
                        direction: true
                    },
                    {
                        name: "fire-2",
                        count: 6,
                        direction: true
                    }
                ]
            }
        } 

        this.defaults = {
            action: "stand",
            z: 0,
            orders: {
                type: "stand"
            },
            direction: 4,
            armor: 0, 
            animationIndex: 0,
            fireIndex: 0,
            selected: false,
            lastMovementX: 0,
            lastMovementY: 0,
            nearCount: 0,
            crushable: true,
            pixelOffsetX: -30,
            pixelOffsetY: -20,
            selectOffsetX: -16,
            selectOffsetY: -10,
            pixelHeight: 39,
            pixelWidth: 61,
            softCollisionRadius: 4,
            hardCollisionRadius: 2,
            path: undefined,
            turnTo: function(toDirection) {
                let turnDirection = helpers.angleDiff(this.direction, toDirection, this.directions);

                if (turnDirection) {
                    let turnAmount = turnDirection / Math.abs(turnDirection);
                    this.direction = helpers.wrapDirection(this.direction + turnAmount, this.directions);
                }
            },
            checkCollision: helpers.checkCollision,
            moveTo: helpers.moveTo,
            canAttackEnemy: helpers.canAttackEnemy,
            findEnemyInRange: helpers.findEnemyInRange,
            hasReached: function() {
                if (Math.pow(this.orders.to.x - this.x, 2) + Math.pow(this.orders.to.y - this.y, 2) < 9) {
                    if (this.colliding) {
                        this.nearCount++
                    }
                } else {
                    this.nearCount = 0
                }

                if (Math.pow(this.orders.to.x - this.x, 2) + Math.pow(this.orders.to.y - this.y, 2) < .25 || Math.pow(this.orders.to.x - this.x, 2) + Math.pow(this.orders.to.y - this.y, 2) < 1 && this.nearCount > 10 || Math.pow(this.orders.to.x - this.x, 2) + Math.pow(this.orders.to.y - this.y, 2) < 4 && this.nearCount > 20 || Math.pow(this.orders.to.x - this.x, 2) + Math.pow(this.orders.to.y - this.y, 2) < 9 && this.nearCount > 30) {
                    this.nearCount = 0;
                    return true
                }
                
                return false
            },
            processOrders: function() {
                this.lifeCode = helpers.getLifeCode(this);

                if (this.lifeCode == "dead" && this.orders.type != "die") {
                    this.unselectable = true;

                    if (this.selected) {
                        this.game.selectItem(this, true)
                    }

                    this.orders = {
                        type: "die"
                    };

                    this.action = "die-1";
                    this.animationIndex = 0;
                }

                this.lastMovementX = 0;
                this.lastMovementY = 0;
                this.firing = false;

                if (this.weapon && this.weapon.cooldown > 0) {
                    this.weapon.cooldown--
                }

                if (this.attacked) {
                    this.attacked = false;
                    this.attackedCycles = 2
                }

                var newDirection;
                var nearestEnemy;

                switch (this.orders.type) {
                case "stand":
                    this.action = "stand"
                    this.moving = false;

                    if (this.weapon) {
                        var enemy = this.findEnemyInRange();
                        if (enemy) {
                            this.orders = {
                                type: "attack",
                                to: enemy,
                                lastOrder: {
                                    type: this.orders.type
                                }
                            }
                        }
                    }
                    break;
                case "move":
                    this.moving = true;

                    if (this.hasReached()) {
                        if (this.orders.lastOrder) {
                            this.orders = this.orders.lastOrder
                        } else {
                            this.orders = {
                                type: "stand"
                            }
                        }
                    } else {
                        this.action = "run"

                        if (!this.moveTo(this.orders.to)) {
                            this.orders = {
                                type: "stand"
                            }
                        }
                    }
                    break;
                case "attack":
                    if (!this.orders.to || this.orders.to.player == this.player || !this.canAttackEnemy(this.orders.to)) {
                        if (this.orders.lastOrder) {
                            this.orders = this.orders.lastOrder
                        } else {
                            this.orders = {
                                type: "guard"
                            }
                        }
                        return
                    }

                    if (Math.pow(this.orders.to.cgX - this.x, 2) + Math.pow(this.orders.to.cgY - this.y, 2) < Math.pow(this.weapon.range - 1 + this.orders.to.hardCollisionRadius / this.game.gridSize, 2)) {
                        this.moving = false;

                        if (this.action == "run") {
                            this.animationIndex = 0;
                            this.action = "stand"
                        }

                        newDirection = helpers.findAngle(this.orders.to, this, this.directions);

                        if (newDirection != this.direction) {
                            this.action = "guard"
                            this.turnTo(newDirection)
                        } else {
                            if (this.weapon.cooldown <= 0) {
                                if (this.action != "fire") {
                                    this.animationIndex = 0
                                }

                                this.action = "fire";
                                if (this.fireIndex == this.animationIndex) {
                                    this.weapon.fire(this, this.direction, this.orders.to)
                                }
                            }
                        }
                    } else {
                        this.moving = true;
                        this.action = "run"
                        
                        if (!this.moveTo(this.orders.to)) {
                            if (this.orders.lastOrder) {
                                this.orders = this.orders.lastOrder
                            } else {
                                this.orders = {
                                    type: "guard"
                                }
                            }
                        }
                    }
                    break;
                case "guard":
                case "hunt":
                    if (this.weapon) {
                        nearestEnemy = this.findEnemyInRange();
                        
                        if (nearestEnemy) {
                            this.orders = {
                                type: "attack",
                                lastOrder: this.orders,
                                to: nearestEnemy
                            };
                            return
                        } else {
                            this.action = "guard"
                            this.moving = false
                        }
                    }
                    
                    break;
                case "die":
                    break;
                }
            },
            drawSelection: function() {
                var x = this.selectOffsetX - this.pixelOffsetX;
                var y = this.selectOffsetY - this.pixelOffsetY;

                this.context.drawImage(this.selectImage, x, y);
                
                var selectBarHeight = 4;
                var selectBarWidth = 12;

                this.context.beginPath();
                this.context.rect(x + 9, y - selectBarHeight, selectBarWidth * this.life / this.hitPoints, selectBarHeight);
                
                if (this.lifeCode == "healthy") {
                    this.context.fillStyle = "lightgreen";
                } else if (this.lifeCode == "damaged") {
                    this.context.fillStyle = "yellow";
                } else {
                    this.context.fillStyle = "red";
                }

                this.context.fill();
                this.context.beginPath();
                this.context.strokeStyle = "black";
                this.context.rect(x + 9, y - selectBarHeight, selectBarWidth, selectBarHeight);
                this.context.stroke()
            },            
            preRender: function() {
                var x = 0;
                var y = 0;
                this.context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);

                this.context.drawImage(this.spriteCanvas, this.imageOffset * this.pixelWidth, 0, this.pixelWidth, this.pixelHeight, x, y, this.pixelWidth, this.pixelHeight);
                
                if (this.selected) {
                    this.drawSelection()
                }
            },           
            draw: function() {
                if (this.action == "hide") {
                    return
                }

                var interpolatedX = this.x + this.game.movementInterpolationFactor * this.lastMovementX;
                var interpolatedY = this.y + this.game.movementInterpolationFactor * this.lastMovementY;

                var x = Math.round(interpolatedX * this.game.gridSize) - this.game.viewport.x + this.game.viewport.left;
                var y = Math.round(interpolatedY * this.game.gridSize) - this.game.viewport.y + this.game.viewport.top;

                this.game.foregroundContext.drawImage(this.canvas, x + this.pixelOffsetX, y + this.pixelOffsetY)
            },
            animate: function() {
                this.cgX = this.x;
                this.cgY = this.y;

                switch (this.action) {
                case "run":
                case "fire":
                    this.imageList = this.spriteArray[this.action + "-" + this.direction];

                    this.imageOffset = this.imageList.offset + this.animationIndex;
                    this.animationIndex++;

                    if (this.animationIndex >= this.imageList.count) {
                        this.animationIndex = 0;

                        if (this.action == "fire") {
                            this.action = "guard";
                        }
                    }

                    break;

                case "stand": 
                case "guard":               
                    this.imageList = this.spriteArray[this.action];
                    this.imageOffset = this.imageList.offset + this.direction;
                    
                    break;
                case "die-1":
                case "die-2":
                    this.imageList = this.spriteArray[this.action];
                    this.imageOffset = this.imageList.offset + this.animationIndex;
                    this.animationIndex++;
                    
                    if (this.animationIndex >= this.imageList.count) {
                        this.game.remove(this);
                    }

                    break;
                default:
                    alert("no action called : " + this.action);
                    break
                }
            },            
            game: this.game
        }   
    }

    add(details) {
        let item = {};
        let name = details.name;

        $.extend(item, this.defaults);
        $.extend(item, this.list[name]);
        
        item.life = item.hitPoints;

        $.extend(item, details);

        if (item.primaryWeapon) {
            item.weapon = this.game.weapons.add({
                name: item.primaryWeapon
            })
        }

        item.canvas = document.createElement("canvas");
        item.canvas.width = item.pixelWidth;
        item.canvas.height = item.pixelHeight;
        item.context = item.canvas.getContext("2d");

        return item
    }

    load(name) {
        let item = this.list[name];
        console.log("Загрузка", name, "...");

        item.type = this.type;
        item.spriteCanvas = document.createElement("canvas");
        item.spriteSheet = this.game.loader.loadImage("images/" + this.type + "/" + name + "-sprite-sheet.png", function(image) {
            helpers.createSpriteSheetCanvas(image, item.spriteCanvas, "grayscale")
        });

        item.selectImage = this.game.loader.loadImage("images/sidebar/select-big.png");
        item.spriteArray = [];
        item.spriteCount = 0;

        for (let i = 0; i < item.spriteImages.length; i++) {
            let constructImageCount = item.spriteImages[i].count;
            let totalImageCount = item.spriteImages[i].totalCount || item.spriteImages[i].count;
            let constructImageName = item.spriteImages[i].name;

            if (item.spriteImages[i].direction) {
                for (let j = 0; j < item.directions; j++) {
                    item.spriteArray[constructImageName + "-" + j] = {
                        name: constructImageName + "-" + j,
                        count: constructImageCount,
                        offset: item.spriteCount
                    };

                    item.spriteCount += totalImageCount
                }
            } else {
                item.spriteArray[constructImageName] = {
                    name: constructImageName,
                    count: constructImageCount,
                    offset: item.spriteCount
                };

                item.spriteCount += constructImageCount
            }
        }
    } 
}