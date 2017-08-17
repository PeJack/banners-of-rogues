import {AStar} from './systems/astar';

export class Helpers {
    constructor(game) {
        this.game = game;

        this.colors = [[0, 0, 0], [193, 0, 173], [0, 175, 171], [0, 182, 0], [16, 16, 16], [252, 255, 50], [255, 49, 77], [186, 79, 0], [191, 0, 0], [0, 255, 255], [93, 0, 255], [30, 0, 175], [0, 0, 0], [85, 85, 85], [170, 170, 170], [255, 255, 255], [255, 216, 133], [255, 207, 143], [255, 208, 134], [255, 207, 129], [255, 208, 115], [255, 191, 108], [255, 192, 83], [252, 174, 75], [252, 175, 51], [247, 148, 10], [232, 117, 0], [217, 90, 0], [201, 60, 0], [183, 40, 0], [171, 12, 0], [153, 0, 0], [0, 200, 225], [55, 164, 205], [75, 139, 185], [87, 112, 168], [75, 139, 185], [55, 164, 205], [30, 182, 225], [255, 255, 255], [255, 255, 255], [0, 189, 0], [127, 0, 0], [127, 0, 0], [109, 0, 0], [100, 0, 0], [109, 0, 0], [19, 0, 0], [17, 12, 12], [10, 17, 12], [17, 11, 20], [11, 16, 20], [20, 20, 24], [33, 28, 28], [21, 33, 28], [32, 32, 28], [23, 28, 32], [27, 32, 36], [36, 36, 40], [50, 39, 40], [37, 49, 44], [53, 48, 44], [40, 39, 48], [41, 52, 52], [51, 57, 52], [71, 55, 56], [24, 71, 38], [47, 66, 38], [35, 66, 56], [51, 70, 55], [45, 83, 59], [68, 69, 59], [106, 80, 53], [56, 55, 69], [52, 69, 68], [49, 63, 111], [67, 73, 68], [88, 71, 72], [67, 87, 71], [83, 91, 71], [104, 89, 84], [79, 104, 74], [59, 104, 84], [84, 103, 84], [100, 103, 74], [121, 102, 74], [99, 107, 88], [120, 106, 88], [95, 120, 87], [116, 119, 91], [77, 120, 96], [78, 119, 117], [99, 124, 100], [122, 117, 117], [147, 86, 78], [143, 113, 86], [141, 121, 108], [99, 137, 90], [111, 137, 99], [110, 153, 115], [131, 140, 103], [152, 139, 102], [148, 152, 101], [131, 139, 116], [147, 156, 114], [175, 150, 114], [137, 170, 114], [169, 174, 117], [85, 117, 168], [143, 114, 172], [70, 134, 146], [114, 143, 137], [4, 4, 8], [20, 19, 28], [34, 44, 53], [50, 73, 76], [61, 89, 98], [77, 110, 118], [91, 130, 138], [106, 150, 158], [61, 31, 18], [98, 40, 24], [134, 39, 31], [170, 28, 28], [194, 27, 9], [221, 0, 0], [249, 0, 0], [255, 0, 0], [141, 141, 65], [159, 166, 86], [179, 191, 115], [198, 215, 144], [181, 167, 130], [149, 129, 116], [121, 100, 101], [0, 116, 114], [0, 95, 102], [0, 77, 94], [0, 59, 81], [0, 51, 73], [24, 72, 34], [24, 90, 41], [35, 106, 53], [42, 127, 64], [116, 99, 42], [150, 123, 57], [190, 147, 71], [229, 171, 92], [255, 154, 31], [255, 215, 40], [112, 75, 53], [137, 92, 69], [175, 120, 85], [33, 29, 53], [64, 64, 64], [165, 146, 123], [184, 206, 0], [170, 185, 0], [202, 219, 0], [0, 162, 45], [0, 107, 18], [205, 255, 255], [144, 208, 211], [213, 199, 172], [220, 211, 193], [195, 254, 0], [127, 238, 0], [109, 213, 0], [202, 202, 202], [72, 72, 72], [179, 177, 233], [159, 128, 0], [143, 112, 0], [119, 87, 0], [79, 33, 21], [145, 0, 0], [253, 218, 110], [229, 194, 95], [204, 173, 84], [184, 152, 71], [142, 115, 48], [102, 77, 30], [59, 45, 17], [17, 12, 3], [198, 178, 88], [173, 157, 77], [146, 141, 69], [126, 120, 58], [110, 104, 51], [89, 88, 40], [72, 70, 33], [57, 53, 26], [218, 218, 218], [190, 190, 190], [161, 161, 161], [133, 133, 133], [109, 109, 109], [80, 80, 80], [52, 52, 52], [24, 24, 24], [222, 221, 230], [195, 192, 211], [166, 162, 191], [134, 130, 158], [102, 98, 126], [73, 70, 94], [45, 42, 61], [20, 19, 28], [255, 199, 111], [182, 111, 70], [136, 173, 200], [95, 87, 139], [95, 62, 102], [149, 72, 97], [124, 47, 72], [150, 144, 79], [126, 120, 53], [255, 138, 146], [255, 118, 126], [0, 112, 152], [0, 83, 123], [0, 158, 146], [0, 129, 118], [0, 101, 89], [118, 134, 176], [90, 146, 201], [137, 137, 133], [149, 150, 132], [169, 149, 140], [173, 177, 139], [139, 132, 184], [154, 131, 184], [155, 145, 188], [170, 146, 171], [169, 148, 188], [201, 184, 137], [170, 147, 196], [180, 171, 204], [208, 178, 203], [234, 216, 231], [29, 25, 6], [37, 33, 10], [41, 37, 14], [47, 50, 17], [55, 58, 25], [63, 66, 29], [71, 74, 37], [79, 82, 45], [88, 91, 53], [91, 100, 61], [99, 108, 69], [107, 116, 83], [115, 124, 91], [123, 131, 103], [131, 139, 116], [255, 255, 255]];
        this.palettes = {
            yellow: [176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191],
            red: [127, 126, 125, 124, 122, 46, 120, 47, 125, 124, 123, 122, 42, 121, 120, 120],
        };

    }

    checkCollision() {
        let collisionObjects = [];
        let movement = 1 * this.speed / this.game.gridSize / this.game.speedAdjustmentFactor;
        let angleRadians = this.direction / this.directions * 2 * Math.PI;
        let newX = this.x - helpers.roundFloating(movement * Math.sin(angleRadians));
        let newY = this.y - helpers.roundFloating(movement * Math.cos(angleRadians));

        for (let i = this.game.obstructionGrid.length - 1; i >= 0; i--) {

            if (Math.abs(i + .5 - newY) < 3) {
                for (let j = this.game.obstructionGrid[i].length - 1; j >= 0; j--) {

                    if (this.game.obstructionGrid[i][j] && Math.abs(j - newX + .5) < 3) {

                        if (Math.pow(j + .5 - newX, 2) + Math.pow(i + .5 - newY, 2) < Math.pow(this.hardCollisionRadius / this.game.gridSize + .5, 2)) {
                            collisionObjects.push({
                                collisionType: "ultra-hard",
                                withItem: {
                                    type: "wall",
                                    x: j + .5,
                                    y: i + .5
                                }
                            })
                        } else if (Math.pow(j + .5 - newX, 2) + Math.pow(i + .5 - newY, 2) < Math.pow(this.softCollisionRadius / this.game.gridSize + .5, 2)) {
                            collisionObjects.push({
                                collisionType: "hard",
                                withItem: {
                                    type: "wall",
                                    x: j + .5,
                                    y: i + .5
                                }
                            })
                        } else if (Math.pow(j + .5 - newX, 2) + Math.pow(i + .5 - newY, 2) < Math.pow(this.softCollisionRadius / this.game.gridSize + .7, 2)) {
                            collisionObjects.push({
                                collisionType: "soft",
                                withItem: {
                                    type: "wall",
                                    x: j + .5,
                                    y: i + .5
                                }
                            })
                        }
                    }
                }
            }
        }

        for (let i = this.game.items.length - 1; i >= 0; i--) {
            let item = this.game.items[i];
            let itemX, itemY;
            let crushableEnemy = false;

            if (item != this && item.type == "infantry" && Math.abs(item.x - newX) < 4 && Math.abs(item.y - newY) < 4) {
                let crushableEnemy = this.crusher && this.player !== item.player && item.crushable;
                
                itemX = item.x;
                itemY = item.y

                if (Math.pow(itemX - newX, 2) + Math.pow(itemY - newY, 2) < Math.pow((this.hardCollisionRadius + item.hardCollisionRadius) / this.game.gridSize, 2)) {
                    if (crushableEnemy) {
                        item.life = 0;
                        item.infantryDeath = "die-squish"
                    } else {
                        collisionObjects.push({
                            collisionType: "hard",
                            withItem: item
                        })
                    }
                } else if (Math.pow(itemX - newX, 2) + Math.pow(itemY - newY, 2) < Math.pow((this.softCollisionRadius + item.hardCollisionRadius) / this.game.gridSize, 2)) {
                    if (crushableEnemy) {
                        item.life = 0;
                        item.infantryDeath = "die-squish"
                    } else {
                        collisionObjects.push({
                            collisionType: "soft-hard",
                            withItem: item
                        })
                    }
                } else if (Math.pow(itemX - newX, 2) + Math.pow(itemY - newY, 2) < Math.pow((this.softCollisionRadius + item.softCollisionRadius) / this.game.gridSize, 2)) {
                    if (crushableEnemy) {} else {
                        collisionObjects.push({
                            collisionType: "soft",
                            withItem: item
                        })
                    }
                }
            }
        }
        
        return collisionObjects
    }
    
    roundFloating(number) {
        return Math.round(number * 1e4) / 1e4
    }

    findClosestEmptySpot(point, opt) {
        let options = opt || {};
        let x = point.x;
        let y = point.y;

        for (let radius = options.minimumRadius || 1; radius < 10; radius++) {
            for (let i = -radius; i <= radius; i++) {
                for (let j = radius; j >= -radius; j--) {
                    if (Math.abs(i) > radius - 1 && Math.abs(j) > radius - 1 && helpers.isEmptySpot({
                        x: x + i,
                        y: y + j
                    })) {
                        return {
                            x: x + i,
                            y: y + j
                        }
                    }
                }
            }
        }
    }

    isEmptySpot(point) {
        if (!(point.x >= 0 && point.x <= this.game.obstructionGrid[0].length - 1 && point.y >= 0 && point.y <= this.game.obstructionGrid.length - 1 && !this.game.obstructionGrid[Math.floor(point.y)][Math.floor(point.x)])) {
            return false
        }

        for (let i = this.game.infantry.length - 1; i >= 0; i--) {
            let item = this.game.infantry[i];
            if (item != point && Math.abs(point.x - item.x) < 1 && Math.abs(point.y - item.y) < 1) {
                return false
            }
        }

        return true
    }
    
    moveTo(goal) {
        this.lastMovementX = 0;
        this.lastMovementY = 0;
        
        let destination = {
            x: goal.x,
            y: goal.y,
            type: goal.type
        };
        
        let start = [Math.floor(this.x), Math.floor(this.y)];
        let end = [Math.floor(destination.x), Math.floor(destination.y)];
        let newDirection;

        if (this.start && this.start.x === start.x && this.start.y === start.y && this.destination && this.destination.x === destination.x && this.destination.y === destination.y && this.path && !this.game.buildingLandscapeChanged) {} else {
            let grid;

            if (this.player === this.game.player) {
                grid = $.extend(true, [], this.game.foggedObstructionGrid[this.player])
            } else {
                grid = $.extend(true, [], this.game.obstructionGrid)
            }

            if (start[1] < 0 || start[1] >= grid.length || start[0] < 0 || start[0] > grid[0].length) {
                this.path = [];
                newDirection = helpers.findAngle(destination, this, this.directions)
            } else {
                this.path = AStar.AStar(grid, start, end, "Euclidean");
                this.start = start;
                this.end = end;

                if (this.path.length > 1) {
                    newDirection = helpers.findAngle(this.path[1], this.path[0], this.directions)
                } else if (start == end && !grid[start[1]][start[0]]) {
                    newDirection = helpers.findAngle(destination, this, this.directions)
                } else {
                    return false
                }
            }
        }

        let collisionObjects = this.checkCollision();
        let movement, angleRadians;
    
        if (collisionObjects.length > 0) {
            this.colliding = true;

            if (this.path.length > 0) {
                collisionObjects.push({
                    collisionType: "attraction",
                    withItem: {
                        x: this.path[1].x + .5,
                        y: this.path[1].y + .5
                    }
                })
            }

            let forceVector = {
                x: 0,
                y: 0
            };

            let hardCollision = false;
            let softHardCollision = false;

            for (let i = collisionObjects.length - 1; i >= 0; i--) {
                let collObject = collisionObjects[i];
                let objectAngleRadians = helpers.findAngle(collObject.withItem, this, this.directions) * 2 * Math.PI / this.directions;
                let forceMagnitude = 0;

                switch (collObject.collisionType) {
                case "ultra-hard":
                    forceMagnitude = 8;
                    hardCollision = true;
                    break;
                case "hard":
                    forceMagnitude = 3;
                    hardCollision = true;
                    break;
                case "soft-hard":
                    forceMagnitude = 2;
                    break;
                case "soft":
                    forceMagnitude = 1;
                    break;
                case "attraction":
                    forceMagnitude = -.25;
                    break
                }

                forceVector.x += helpers.roundFloating(forceMagnitude * Math.sin(objectAngleRadians));
                forceVector.y += helpers.roundFloating(forceMagnitude * Math.cos(objectAngleRadians))
            }

            newDirection = helpers.findAngle(forceVector, {
                x: 0,
                y: 0
            }, this.directions);

            if (!hardCollision) {
                movement = this.speed / this.game.gridSize / this.game.speedAdjustmentFactor;
                angleRadians = this.direction / this.directions * 2 * Math.PI;

                this.lastMovementX = -helpers.roundFloating(movement * Math.sin(angleRadians));
                this.lastMovementY = -helpers.roundFloating(movement * Math.cos(angleRadians));

                let newX = this.x + this.lastMovementX;
                let newY = this.y + this.lastMovementY;

                this.x = newX;
                this.y = newY;
                this.turnTo(newDirection)
            } else {
                this.turnTo(newDirection)
            }
        } else {
            this.colliding = false;

            if (Math.abs(helpers.angleDiff(newDirection, this.direction)) < this.directions / 4) {
                movement = this.speed / this.game.gridSize / this.game.speedAdjustmentFactor;

                if (this.prone) {
                    movement = movement / 2
                }

                angleRadians = this.direction / this.directions * 2 * Math.PI;

                this.lastMovementX = -helpers.roundFloating(movement * Math.sin(angleRadians));
                this.lastMovementY = -helpers.roundFloating(movement * Math.cos(angleRadians));

                this.x = this.x + this.lastMovementX;
                this.y = this.y + this.lastMovementY
            }

            if (this.direction != newDirection) {
                this.turnTo(newDirection)
            }
        }
        return true
    }

    findEnemyInRange() {
        if (!this.primaryWeapon) {
            return
        }

        let sightBonus = 0;

        if (this.type == "infantry") {
            sightBonus = 1
        }

        if (this.orders && this.orders.type == "guard") {
            sightBonus = 2
        }

        if (this.orders && this.orders.type == "hunt") {
            sightBonus = 50
        }

        let range = this.weapon ? this.weapon.range : this.sight;
        let rangeSquared = Math.pow(range + sightBonus, 2);
        let lastDistance;
        let lastItem = undefined;

        let allies = this.game.map.currentMapContent.allies ? this.game.map.currentMapContent.allies[this.player] : "None";

        for (let i = 0; i < this.game.attackableItems.length; i++) {
            let item = this.game.attackableItems[i];
            if (item.player != this.player && item.player != "Neutral" && item.player != allies && item.player !== undefined && item.type != "trees" && item.type != "walls" && this.canAttackEnemy(item)) {
                let distance = Math.pow((item.cgX || item.x) - this.x, 2) + Math.pow((item.cgY || item.y) - this.y, 2);

                if (distance <= rangeSquared && (!lastItem || lastDistance > distance)) {
                    lastDistance = distance;
                    lastItem = item
                }
            }
        }
        return lastItem
    } 

    canAttackEnemy(item) {
        if (item == this) {
            return false
        }

        if (item.cloaked) {
            if (this.type == "infantry") {
                let distance = Math.pow((item.cgX || item.x) - this.cgX, 2) + Math.pow((item.cgY || item.y) - this.cgY, 2);
                if (distance > 2.5) {
                    return false
                }
            } else {
                return false
            }
        }
        
        return true
    }

    findAngle(object, unit, directions) {
        let dy = (object.cgY || object.y) - (unit.cgY || unit.y);
        let dx = (object.cgX || object.x) - (unit.cgX || unit.x);

        let angle = this.wrapDirection(directions / 2 + Math.round(Math.atan2(dx, dy) * directions / (2 * Math.PI)), directions);

        return angle
    }

    wrapDirection(direction, directions) {
        if (direction < 0) {
            direction += directions
        }

        if (direction >= directions) {
            direction -= directions
        }

        return direction
    }

    addAngle(angle, increment, base) {
        angle = angle + increment;

        if (angle > base - 1) {
            angle -= base
        }

        if (angle < 0) {
            angle += base
        }

        return angle
    }

    angleDiff(angle1, angle2, directions) {
        if (angle1 >= directions / 2) {
            angle1 = angle1 - directions
        }

        if (angle2 >= directions / 2) {
            angle2 = angle2 - directions
        }

        let diff = angle2 - angle1;

        if (diff < -directions / 2) {
            diff += directions
        }

        if (diff > directions / 2) {
            diff -= directions
        }
        
        return diff
    }

    createSpriteSheetCanvas(image, canvas, type) {
        let colorCount = 2;

        canvas.width = image.width;
        canvas.height = image.height * colorCount;
        let context = canvas.getContext("2d");

        for (let i = 0; i < colorCount; i++) {
            context.drawImage(image, 0, image.height * i)
        }

        return canvas
    }

    getLifeCode(object) {
        let lifePercent = helpers.roundFloating(object.life / object.hitPoints);
        let lifeCode;

        if (lifePercent > .5) {
            lifeCode = "healthy"
        } else if (lifePercent > .25) {
            lifeCode = "damaged"
        } else if (lifePercent > .05) {
            lifeCode = "ultra-damaged"
        } else {
            lifeCode = "dead"
        }

        return lifeCode
    }
}