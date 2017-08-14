var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Helpers = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _astar = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helpers = exports.Helpers = function () {
    function Helpers(game) {
        _classCallCheck(this, Helpers);

        this.game = game;

        this.colors = [[0, 0, 0], [193, 0, 173], [0, 175, 171], [0, 182, 0], [16, 16, 16], [252, 255, 50], [255, 49, 77], [186, 79, 0], [191, 0, 0], [0, 255, 255], [93, 0, 255], [30, 0, 175], [0, 0, 0], [85, 85, 85], [170, 170, 170], [255, 255, 255], [255, 216, 133], [255, 207, 143], [255, 208, 134], [255, 207, 129], [255, 208, 115], [255, 191, 108], [255, 192, 83], [252, 174, 75], [252, 175, 51], [247, 148, 10], [232, 117, 0], [217, 90, 0], [201, 60, 0], [183, 40, 0], [171, 12, 0], [153, 0, 0], [0, 200, 225], [55, 164, 205], [75, 139, 185], [87, 112, 168], [75, 139, 185], [55, 164, 205], [30, 182, 225], [255, 255, 255], [255, 255, 255], [0, 189, 0], [127, 0, 0], [127, 0, 0], [109, 0, 0], [100, 0, 0], [109, 0, 0], [19, 0, 0], [17, 12, 12], [10, 17, 12], [17, 11, 20], [11, 16, 20], [20, 20, 24], [33, 28, 28], [21, 33, 28], [32, 32, 28], [23, 28, 32], [27, 32, 36], [36, 36, 40], [50, 39, 40], [37, 49, 44], [53, 48, 44], [40, 39, 48], [41, 52, 52], [51, 57, 52], [71, 55, 56], [24, 71, 38], [47, 66, 38], [35, 66, 56], [51, 70, 55], [45, 83, 59], [68, 69, 59], [106, 80, 53], [56, 55, 69], [52, 69, 68], [49, 63, 111], [67, 73, 68], [88, 71, 72], [67, 87, 71], [83, 91, 71], [104, 89, 84], [79, 104, 74], [59, 104, 84], [84, 103, 84], [100, 103, 74], [121, 102, 74], [99, 107, 88], [120, 106, 88], [95, 120, 87], [116, 119, 91], [77, 120, 96], [78, 119, 117], [99, 124, 100], [122, 117, 117], [147, 86, 78], [143, 113, 86], [141, 121, 108], [99, 137, 90], [111, 137, 99], [110, 153, 115], [131, 140, 103], [152, 139, 102], [148, 152, 101], [131, 139, 116], [147, 156, 114], [175, 150, 114], [137, 170, 114], [169, 174, 117], [85, 117, 168], [143, 114, 172], [70, 134, 146], [114, 143, 137], [4, 4, 8], [20, 19, 28], [34, 44, 53], [50, 73, 76], [61, 89, 98], [77, 110, 118], [91, 130, 138], [106, 150, 158], [61, 31, 18], [98, 40, 24], [134, 39, 31], [170, 28, 28], [194, 27, 9], [221, 0, 0], [249, 0, 0], [255, 0, 0], [141, 141, 65], [159, 166, 86], [179, 191, 115], [198, 215, 144], [181, 167, 130], [149, 129, 116], [121, 100, 101], [0, 116, 114], [0, 95, 102], [0, 77, 94], [0, 59, 81], [0, 51, 73], [24, 72, 34], [24, 90, 41], [35, 106, 53], [42, 127, 64], [116, 99, 42], [150, 123, 57], [190, 147, 71], [229, 171, 92], [255, 154, 31], [255, 215, 40], [112, 75, 53], [137, 92, 69], [175, 120, 85], [33, 29, 53], [64, 64, 64], [165, 146, 123], [184, 206, 0], [170, 185, 0], [202, 219, 0], [0, 162, 45], [0, 107, 18], [205, 255, 255], [144, 208, 211], [213, 199, 172], [220, 211, 193], [195, 254, 0], [127, 238, 0], [109, 213, 0], [202, 202, 202], [72, 72, 72], [179, 177, 233], [159, 128, 0], [143, 112, 0], [119, 87, 0], [79, 33, 21], [145, 0, 0], [253, 218, 110], [229, 194, 95], [204, 173, 84], [184, 152, 71], [142, 115, 48], [102, 77, 30], [59, 45, 17], [17, 12, 3], [198, 178, 88], [173, 157, 77], [146, 141, 69], [126, 120, 58], [110, 104, 51], [89, 88, 40], [72, 70, 33], [57, 53, 26], [218, 218, 218], [190, 190, 190], [161, 161, 161], [133, 133, 133], [109, 109, 109], [80, 80, 80], [52, 52, 52], [24, 24, 24], [222, 221, 230], [195, 192, 211], [166, 162, 191], [134, 130, 158], [102, 98, 126], [73, 70, 94], [45, 42, 61], [20, 19, 28], [255, 199, 111], [182, 111, 70], [136, 173, 200], [95, 87, 139], [95, 62, 102], [149, 72, 97], [124, 47, 72], [150, 144, 79], [126, 120, 53], [255, 138, 146], [255, 118, 126], [0, 112, 152], [0, 83, 123], [0, 158, 146], [0, 129, 118], [0, 101, 89], [118, 134, 176], [90, 146, 201], [137, 137, 133], [149, 150, 132], [169, 149, 140], [173, 177, 139], [139, 132, 184], [154, 131, 184], [155, 145, 188], [170, 146, 171], [169, 148, 188], [201, 184, 137], [170, 147, 196], [180, 171, 204], [208, 178, 203], [234, 216, 231], [29, 25, 6], [37, 33, 10], [41, 37, 14], [47, 50, 17], [55, 58, 25], [63, 66, 29], [71, 74, 37], [79, 82, 45], [88, 91, 53], [91, 100, 61], [99, 108, 69], [107, 116, 83], [115, 124, 91], [123, 131, 103], [131, 139, 116], [255, 255, 255]];
        this.palettes = {
            yellow: [176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191],
            red: [127, 126, 125, 124, 122, 46, 120, 47, 125, 124, 123, 122, 42, 121, 120, 120]
        };
    }

    _createClass(Helpers, [{
        key: "checkCollision",
        value: function checkCollision() {
            var collisionObjects = [];
            var movement = 1 * this.speed / this.game.gridSize / this.game.speedAdjustmentFactor;
            var angleRadians = this.direction / this.directions * 2 * Math.PI;
            var newX = this.x - helpers.roundFloating(movement * Math.sin(angleRadians));
            var newY = this.y - helpers.roundFloating(movement * Math.cos(angleRadians));

            for (var i = this.game.obstructionGrid.length - 1; i >= 0; i--) {

                if (Math.abs(i + .5 - newY) < 3) {
                    for (var j = this.game.obstructionGrid[i].length - 1; j >= 0; j--) {

                        if (this.game.obstructionGrid[i][j] && Math.abs(j - newX + .5) < 3) {

                            if (Math.pow(j + .5 - newX, 2) + Math.pow(i + .5 - newY, 2) < Math.pow(this.hardCollisionRadius / this.game.gridSize + .5, 2)) {
                                collisionObjects.push({
                                    collisionType: "ultra-hard",
                                    withItem: {
                                        type: "wall",
                                        x: j + .5,
                                        y: i + .5
                                    }
                                });
                            } else if (Math.pow(j + .5 - newX, 2) + Math.pow(i + .5 - newY, 2) < Math.pow(this.softCollisionRadius / this.game.gridSize + .5, 2)) {
                                collisionObjects.push({
                                    collisionType: "hard",
                                    withItem: {
                                        type: "wall",
                                        x: j + .5,
                                        y: i + .5
                                    }
                                });
                            } else if (Math.pow(j + .5 - newX, 2) + Math.pow(i + .5 - newY, 2) < Math.pow(this.softCollisionRadius / this.game.gridSize + .7, 2)) {
                                collisionObjects.push({
                                    collisionType: "soft",
                                    withItem: {
                                        type: "wall",
                                        x: j + .5,
                                        y: i + .5
                                    }
                                });
                            }
                        }
                    }
                }
            }

            for (var _i = this.game.items.length - 1; _i >= 0; _i--) {
                var item = this.game.items[_i];
                var itemX = void 0,
                    itemY = void 0;
                var crushableEnemy = false;

                if (item != this && item.type == "infantry" && Math.abs(item.x - newX) < 4 && Math.abs(item.y - newY) < 4) {
                    var _crushableEnemy = this.crusher && this.player !== item.player && item.crushable;

                    itemX = item.x;
                    itemY = item.y;

                    if (Math.pow(itemX - newX, 2) + Math.pow(itemY - newY, 2) < Math.pow((this.hardCollisionRadius + item.hardCollisionRadius) / this.game.gridSize, 2)) {
                        if (_crushableEnemy) {
                            item.life = 0;
                            item.infantryDeath = "die-squish";
                        } else {
                            collisionObjects.push({
                                collisionType: "hard",
                                withItem: item
                            });
                        }
                    } else if (Math.pow(itemX - newX, 2) + Math.pow(itemY - newY, 2) < Math.pow((this.softCollisionRadius + item.hardCollisionRadius) / this.game.gridSize, 2)) {
                        if (_crushableEnemy) {
                            item.life = 0;
                            item.infantryDeath = "die-squish";
                        } else {
                            collisionObjects.push({
                                collisionType: "soft-hard",
                                withItem: item
                            });
                        }
                    } else if (Math.pow(itemX - newX, 2) + Math.pow(itemY - newY, 2) < Math.pow((this.softCollisionRadius + item.softCollisionRadius) / this.game.gridSize, 2)) {
                        if (_crushableEnemy) {} else {
                            collisionObjects.push({
                                collisionType: "soft",
                                withItem: item
                            });
                        }
                    }
                }
            }

            return collisionObjects;
        }
    }, {
        key: "roundFloating",
        value: function roundFloating(number) {
            return Math.round(number * 1e4) / 1e4;
        }
    }, {
        key: "findClosestEmptySpot",
        value: function findClosestEmptySpot(point, opt) {
            var options = opt || {};
            var x = point.x;
            var y = point.y;

            for (var radius = options.minimumRadius || 1; radius < 10; radius++) {
                for (var i = -radius; i <= radius; i++) {
                    for (var j = radius; j >= -radius; j--) {
                        if (Math.abs(i) > radius - 1 && Math.abs(j) > radius - 1 && helpers.isEmptySpot({
                            x: x + i,
                            y: y + j
                        })) {
                            return {
                                x: x + i,
                                y: y + j
                            };
                        }
                    }
                }
            }
        }
    }, {
        key: "isEmptySpot",
        value: function isEmptySpot(point) {
            if (!(point.x >= 0 && point.x <= this.game.obstructionGrid[0].length - 1 && point.y >= 0 && point.y <= this.game.obstructionGrid.length - 1 && !this.game.obstructionGrid[Math.floor(point.y)][Math.floor(point.x)])) {
                return false;
            }

            for (var i = this.game.infantry.length - 1; i >= 0; i--) {
                var item = this.game.infantry[i];
                if (item != point && Math.abs(point.x - item.x) < 1 && Math.abs(point.y - item.y) < 1) {
                    return false;
                }
            }

            return true;
        }
    }, {
        key: "moveTo",
        value: function moveTo(goal) {
            this.lastMovementX = 0;
            this.lastMovementY = 0;

            var destination = {
                x: goal.x,
                y: goal.y,
                type: goal.type
            };

            var start = [Math.floor(this.x), Math.floor(this.y)];
            var end = [Math.floor(destination.x), Math.floor(destination.y)];
            var newDirection = void 0;

            if (this.start && this.start.x === start.x && this.start.y === start.y && this.destination && this.destination.x === destination.x && this.destination.y === destination.y && this.path && !this.game.buildingLandscapeChanged) {} else {
                var grid = void 0;

                if (this.player === this.game.player) {
                    grid = $.extend(true, [], this.game.foggedObstructionGrid[this.player]);
                } else {
                    grid = $.extend(true, [], this.game.obstructionGrid);
                }

                if (start[1] < 0 || start[1] >= grid.length || start[0] < 0 || start[0] > grid[0].length) {
                    this.path = [];
                    newDirection = helpers.findAngle(destination, this, this.directions);
                } else {
                    this.path = _astar.AStar.AStar(grid, start, end, "Euclidean");
                    this.start = start;
                    this.end = end;

                    if (this.path.length > 1) {
                        newDirection = helpers.findAngle(this.path[1], this.path[0], this.directions);
                    } else if (start == end && !grid[start[1]][start[0]]) {
                        newDirection = helpers.findAngle(destination, this, this.directions);
                    } else {
                        return false;
                    }
                }
            }

            var collisionObjects = this.checkCollision();
            var movement = void 0,
                angleRadians = void 0;

            if (collisionObjects.length > 0) {
                this.colliding = true;

                if (this.path.length > 0) {
                    collisionObjects.push({
                        collisionType: "attraction",
                        withItem: {
                            x: this.path[1].x + .5,
                            y: this.path[1].y + .5
                        }
                    });
                }

                var forceVector = {
                    x: 0,
                    y: 0
                };

                var hardCollision = false;
                var softHardCollision = false;

                for (var i = collisionObjects.length - 1; i >= 0; i--) {
                    var collObject = collisionObjects[i];
                    var objectAngleRadians = helpers.findAngle(collObject.withItem, this, this.directions) * 2 * Math.PI / this.directions;
                    var forceMagnitude = 0;

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
                            break;
                    }

                    forceVector.x += helpers.roundFloating(forceMagnitude * Math.sin(objectAngleRadians));
                    forceVector.y += helpers.roundFloating(forceMagnitude * Math.cos(objectAngleRadians));
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

                    var newX = this.x + this.lastMovementX;
                    var newY = this.y + this.lastMovementY;

                    this.x = newX;
                    this.y = newY;
                    this.turnTo(newDirection);
                } else {
                    this.turnTo(newDirection);
                }
            } else {
                this.colliding = false;

                if (Math.abs(helpers.angleDiff(newDirection, this.direction)) < this.directions / 4) {
                    movement = this.speed / this.game.gridSize / this.game.speedAdjustmentFactor;

                    if (this.prone) {
                        movement = movement / 2;
                    }

                    angleRadians = this.direction / this.directions * 2 * Math.PI;

                    this.lastMovementX = -helpers.roundFloating(movement * Math.sin(angleRadians));
                    this.lastMovementY = -helpers.roundFloating(movement * Math.cos(angleRadians));

                    this.x = this.x + this.lastMovementX;
                    this.y = this.y + this.lastMovementY;
                }

                if (this.direction != newDirection) {
                    this.turnTo(newDirection);
                }
            }
            return true;
        }
    }, {
        key: "findEnemyInRange",
        value: function findEnemyInRange() {
            if (!this.primaryWeapon) {
                return;
            }

            var sightBonus = 0;

            if (this.type == "infantry") {
                sightBonus = 1;
            }

            if (this.orders && this.orders.type == "guard") {
                sightBonus = 2;
            }

            if (this.orders && this.orders.type == "hunt") {
                sightBonus = 50;
            }

            var range = this.weapon ? this.weapon.range : this.sight;
            var rangeSquared = Math.pow(range + sightBonus, 2);
            var lastDistance = void 0;
            var lastItem = undefined;

            var allies = this.game.map.currentMapContent.allies ? this.game.map.currentMapContent.allies[this.player] : "None";

            for (var i = 0; i < this.game.attackableItems.length; i++) {
                var item = this.game.attackableItems[i];
                if (item.player != this.player && item.player != "Neutral" && item.player != allies && item.player !== undefined && item.type != "trees" && item.type != "walls" && this.canAttackEnemy(item)) {
                    var distance = Math.pow((item.cgX || item.x) - this.x, 2) + Math.pow((item.cgY || item.y) - this.y, 2);

                    if (distance <= rangeSquared && (!lastItem || lastDistance > distance)) {
                        lastDistance = distance;
                        lastItem = item;
                    }
                }
            }
            return lastItem;
        }
    }, {
        key: "canAttackEnemy",
        value: function canAttackEnemy(item) {
            if (item == this) {
                return false;
            }

            if (item.cloaked) {
                if (this.type == "infantry") {
                    var distance = Math.pow((item.cgX || item.x) - this.cgX, 2) + Math.pow((item.cgY || item.y) - this.cgY, 2);
                    if (distance > 2.5) {
                        return false;
                    }
                } else {
                    return false;
                }
            }

            return true;
        }
    }, {
        key: "findAngle",
        value: function findAngle(object, unit, directions) {
            var dy = (object.cgY || object.y) - (unit.cgY || unit.y);
            var dx = (object.cgX || object.x) - (unit.cgX || unit.x);
            var angle = this.wrapDirection(directions / 2 + Math.round(Math.atan2(dx, dy) * directions / (2 * Math.PI)), directions);

            return angle;
        }
    }, {
        key: "wrapDirection",
        value: function wrapDirection(direction, directions) {
            if (direction < 0) {
                direction += directions;
            }

            if (direction >= directions) {
                direction -= directions;
            }

            return direction;
        }
    }, {
        key: "addAngle",
        value: function addAngle(angle, increment, base) {
            angle = angle + increment;

            if (angle > base - 1) {
                angle -= base;
            }

            if (angle < 0) {
                angle += base;
            }

            return angle;
        }
    }, {
        key: "angleDiff",
        value: function angleDiff(angle1, angle2, directions) {
            if (angle1 >= directions / 2) {
                angle1 = angle1 - directions;
            }

            if (angle2 >= directions / 2) {
                angle2 = angle2 - directions;
            }

            var diff = angle2 - angle1;

            if (diff < -directions / 2) {
                diff += directions;
            }

            if (diff > directions / 2) {
                diff -= directions;
            }

            return diff;
        }
    }, {
        key: "createSpriteSheetCanvas",
        value: function createSpriteSheetCanvas(image, canvas, type) {
            var colorCount = 2;

            canvas.width = image.width;
            canvas.height = image.height * colorCount;
            var context = canvas.getContext("2d");

            for (var i = 0; i < colorCount; i++) {
                context.drawImage(image, 0, image.height * i);
            }

            return canvas;
        }
    }]);

    return Helpers;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Системы


// Модуль одиночной игры


// Юнитов и их аттрибуты


// Хелпер


var _loader = __webpack_require__(7);

var _input = __webpack_require__(6);

var _fog = __webpack_require__(5);

var _map = __webpack_require__(8);

var _singleplayer = __webpack_require__(3);

var _infantry = __webpack_require__(9);

var _weapons = __webpack_require__(10);

var _helpers = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {
    function Game() {
        _classCallCheck(this, Game);

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
        this.gridSize = 24;
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

        window.helpers = new _helpers.Helpers(this);

        this.itemClass = {
            infantry: new _infantry.Infantry(this)
        };

        this.init();
    }

    _createClass(Game, [{
        key: 'init',
        value: function init() {
            $(window).resize(this.resize.bind(this));
            this.resize();

            this.loader = new _loader.Loader(this);
            this.input = new _input.Input(this);
            this.fog = new _fog.Fog(this);
            this.map = new _map.Map(this);

            this.singleplayer = new _singleplayer.SinglePlayer(this);

            this.weapons = new _weapons.Weapons(this);

            this.input.load();
            this.map.load("test", this.singleplayer.startLevel);
        }
    }, {
        key: 'resize',
        value: function resize() {
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();

            var maxPossibleWidth = windowWidth - 10;
            var maxPossibleHeight = windowHeight - 10;

            var newWidth = void 0,
                newHeight = void 0;

            if (windowWidth >= 1100) {
                if (maxPossibleWidth / maxPossibleHeight > this.aspectRatio) {
                    newWidth = Math.floor(maxPossibleHeight * this.aspectRatio);
                    newHeight = maxPossibleHeight;
                } else {
                    newHeight = Math.floor(maxPossibleWidth / this.aspectRatio);
                    newWidth = maxPossibleWidth;
                }

                this.scaleFactor = 640 / newWidth;

                $(".gamecontainer").width(newWidth).height(newHeight);
                $(".gamelayer").width(newWidth).height(newHeight);
                $(".mainpanel").width(newWidth);
            }
        }
    }, {
        key: 'createGrids',
        value: function createGrids() {
            if (!this.terrainGrid) {
                this.buildingLandscapeChanged = true;

                var terrainGrid = Array(this.map.currentMapTerrain.length);

                for (var i = 0; i < this.map.currentMapTerrain.length; i++) {
                    terrainGrid[i] = Array(this.map.currentMapTerrain[i].length);

                    for (var j = 0; j < this.map.currentMapTerrain[i].length; j++) {
                        if (this.map.currentMapTerrain[i][j]) {
                            terrainGrid[i][j] = 1;
                        } else {
                            terrainGrid[i][j] = 0;
                        }
                    }
                }

                this.terrainGrid = terrainGrid;
            }

            if (this.buildingLandscapeChanged) {
                this.obstructionGrid = $.extend(true, [], this.terrainGrid);

                for (var _i = this.walls.length - 1; _i >= 0; _i--) {
                    var item = this.walls[_i];

                    for (var _j = item.gridShape.length - 1; _j >= 0; _j--) {
                        for (var k = item.gridShape[_j].length - 1; k >= 0; k--) {
                            if (item.gridShape[_j][k] == 1) {
                                this.obstructionGrid[Math.floor(item.y) + _j][Math.floor(item.x) + k] = item.name;
                            }
                        }
                    }
                }
            }

            if (!this.foggedObstructionGrid) {
                this.foggedObstructionGrid = {};
            }

            for (var l = this.players.length - 1; l >= 0; l--) {
                var player = this.players[l];
                var fogGrid = this.fog.fogGrid[player];

                if (!this.foggedObstructionGrid[player]) {
                    this.foggedObstructionGrid[player] = $.extend(true, [], this.obstructionGrid);
                }

                for (var _j2 = this.foggedObstructionGrid[player].length - 1; _j2 >= 0; _j2--) {
                    for (var _k = this.foggedObstructionGrid[player][_j2].length - 1; _k >= 0; _k--) {
                        this.foggedObstructionGrid[player][_j2][_k] = fogGrid[_j2][_k] == 1 ? 0 : this.obstructionGrid[_j2][_k] === 0 ? 0 : 1;
                    }
                }
            }
        }
    }, {
        key: 'animationLoop',
        value: function animationLoop() {
            this.input.setCursor();
            this.createGrids();

            for (var i = this.items.length - 1; i >= 0; i--) {
                var item = this.items[i];

                if (item.processOrders) {
                    item.processOrders();
                }

                item.animate();

                if (item.preRender) {
                    item.preRender();
                }
            }

            this.fog.animate();

            this.sortedItemsArray = $.extend([], this.items);
            this.sortedItemsArray.sort(function (a, b) {
                var by = b.cgY ? b.cgY : b.y;
                var ay = a.cgY ? a.cgY : a.y;

                return (b.z - a.z) * 1.25 + (by - ay) + (by == ay ? a.x - b.x : 0);
            });

            this.lastAnimationTime = new Date().getTime();
        }
    }, {
        key: 'drawingLoop',
        value: function drawingLoop() {
            this.foregroundContext.clearRect(0, 0, this.screenWidth, this.screenHeight);
            this.lastDrawTime = new Date().getTime();

            if (this.lastAnimationTime) {
                this.movementInterpolationFactor = (this.lastDrawTime - this.lastAnimationTime) / this.animationTimeout - 1;
                if (this.movementInterpolationFactor > 0) {
                    this.movementInterpolationFactor = 0;
                }
            } else {
                this.movementInterpolationFactor = -1;
            }

            this.foregroundContext.save();
            this.foregroundContext.beginPath();

            this.viewport.width = this.screenWidth;

            this.foregroundContext.rect(this.viewport.left, this.viewport.top, this.viewport.width - this.viewport.left, this.viewport.height);
            this.foregroundContext.clip();

            this.input.handlePanning();
            this.map.draw();

            for (var i = this.sortedItemsArray.length - 1; i >= 0; i--) {
                this.sortedItemsArray[i].draw();
            }

            this.fog.draw();
            this.foregroundContext.restore();
            this.input.draw();

            if (this.running) {
                this.drawingInterval = requestAnimationFrame(this.drawingLoop.bind(this));
            }
        }
    }, {
        key: 'highlightGrid',
        value: function highlightGrid(i, j, width, height, optionalImage) {
            var gridSize = this.gridSize;

            if (optionalImage && $(optionalImage).is("img")) {
                this.foregroundContext.drawImage(optionalImage, i * gridSize + this.viewport.adjustX, j * gridSize + this.viewport.adjustY, width * gridSize, height * gridSize);
            } else {
                if (optionalImage) {
                    this.foregroundContext.fillStyle = optionalImage;
                } else {
                    this.foregroundContext.fillStyle = "rgba(225,225,225,0.5)";
                }

                this.foregroundContext.fillRect(i * gridSize + this.viewport.adjustX, j * gridSize + this.viewport.adjustY, width * gridSize, height * gridSize);
            }
        }
    }, {
        key: 'remove',
        value: function remove(item) {
            if (item.selected) {
                item.selected = false;

                for (var j = this.selectionArrays.length - 1; j >= 0; j--) {
                    var type = this.selectionArrays[j];

                    for (var i = this[type].length - 1; i >= 0; i--) {
                        if (this[type][i].uid == item.uid) {
                            this[type].splice(i, 1);
                            break;
                        }
                    }
                }
            }

            for (var _i2 = this.items.length - 1; _i2 >= 0; _i2--) {
                if (this.items[_i2].uid == item.uid) {
                    this.items.splice(_i2, 1);
                    break;
                }
            }

            for (var _i3 = this.attackableItems.length - 1; _i3 >= 0; _i3--) {
                if (this.attackableItems[_i3].uid == item.uid) {
                    this.attackableItems.splice(_i3, 1);
                    break;
                }
            }

            for (var _j3 = this.controlGroups.length - 1; _j3 >= 0; _j3--) {
                var group = this.controlGroups[_j3];

                if (group) {
                    for (var _i4 = group.length - 1; _i4 >= 0; _i4--) {
                        if (group[_i4].uid == item.uid) {
                            group.splice(_i4, 1);
                            break;
                        }
                    }
                }
            }

            for (var _i5 = this[item.type].length - 1; _i5 >= 0; _i5--) {
                if (this[item.type][_i5].uid == item.uid) {
                    this[item.type].splice(_i5, 1);
                    break;
                }
            }
        }
    }, {
        key: 'add',
        value: function add(item) {
            var object = void 0;
            this.counter++;

            if (item.uid == undefined) {
                item.uid = this.counter;
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
                    break;
            }
            return object;
        }
    }, {
        key: 'resetTypes',
        value: function resetTypes() {
            this.counter = 1;
            this.showEnding = false;
            this.terrainGrid = undefined;
            this.foggedObstructionGrid = undefined;
            this.refreshBackground = true;

            for (var i = this.itemArrays.length - 1; i >= 0; i--) {
                this[this.itemArrays[i]] = [];
            }

            for (var j = this.selectionArrays.length - 1; j >= 0; j--) {
                this[this.selectionArrays[j]] = [];
            }
        }
    }, {
        key: 'selectItem',
        value: function selectItem(item, shiftPressed, multipleSelection) {
            if (shiftPressed && item.selected) {
                item.selected = false;

                for (var j = this.selectionArrays.length - 1; j >= 0; j--) {
                    this[this.selectionArrays[j]].remove(item);
                }
                return;
            }

            item.selected = true;
            this.selectedItems.push(item);

            if (item.player == this.player) {
                this.selectedUnits.push(item);

                if (item.primaryWeapon) {
                    this.selectedAttackers.push(item);
                }

                if (item.type == "infantry") {
                    this.selectedInfantry.push(item);
                }
            }
        }
    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            for (var i = this.selectedItems.length - 1; i >= 0; i--) {
                this.selectedItems[i].selected = false;
                this.selectedItems.splice(i, 1);
            }

            for (var j = this.selectionArrays.length - 1; j >= 0; j--) {
                this[this.selectionArrays[j]].length = 0;
            }
        }
    }, {
        key: 'click',
        value: function click(ev, rightClick) {
            var clickedObject = this.input.objectUnderMouse;

            if (rightClick) {
                this.clearSelection();

                return;
            } else if (!rightClick && !this.input.dragSelect) {
                var commandUids = [];

                if (clickedObject && this.selectedAttackers.length > 0 && this.input.objectUnderMouse.player != this.player && !this.input.objectUnderMouse.unattackable) {
                    for (var i = this.selectedAttackers.length - 1; i >= 0; i--) {
                        commandUids.push(this.selectedAttackers[i].uid);
                    }

                    this.sendCommand(commandUids, {
                        type: "attack",
                        uidto: clickedObject.uid
                    });
                } else if (clickedObject && !clickedObject.unselectable) {
                    if (!ev.shiftKey) {
                        this.clearSelection();
                    }

                    if (!clickedObject.unselectable) {
                        this.selectItem(clickedObject, ev.shiftKey);
                    }
                } else if (this.selectedUnits.length > 0) {
                    for (var _i6 = this.selectedUnits.length - 1; _i6 >= 0; _i6--) {
                        commandUids.push(this.selectedUnits[_i6].uid);
                    }

                    this.sendCommand(commandUids, {
                        type: "move",
                        to: {
                            x: Math.round(16 * this.input.gameX / this.gridSize) / 16,
                            y: Math.round(16 * this.input.gameY / this.gridSize) / 16
                        }
                    });
                }
            }
        }
    }, {
        key: 'sendCommand',
        value: function sendCommand(commandUids, command) {
            this.singleplayer.sendCommand(commandUids, command);
        }
    }, {
        key: 'getItemByUid',
        value: function getItemByUid(uid) {
            for (var i = this.items.length - 1; i >= 0; i--) {
                var item = this.items[i];
                if (item.uid === uid) {
                    return item;
                }
            }
        }
    }, {
        key: 'receiveCommand',
        value: function receiveCommand(commandUids, command) {
            for (var i = commandUids.length - 1; i >= 0; i--) {
                var item = this.getItemByUid(commandUids[i]);

                if (item) {
                    var orders = $.extend(true, {}, command);
                    orders.to = orders.uidto ? this.getItemByUid(orders.uidto) : orders.to;

                    item.orders = orders;
                    item.animationIndex = 0;
                }
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.foregroundContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.backgroundContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.input.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        }
    }]);

    return Game;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

window.requestAnimFrame = function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
}();

loadGame();

function loadGame() {
	if (!document.getElementById("inputCanvas")) {
		window.setTimeout(loadGame, 100);
		return;
	}
	new _game.Game();
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SinglePlayer = exports.SinglePlayer = function () {
    function SinglePlayer(game) {
        _classCallCheck(this, SinglePlayer);

        this.game = game;

        this.gameSpeed = 5;
        this.currentFaction = undefined;
        this.currentLevel = undefined;
    }

    _createClass(SinglePlayer, [{
        key: "startLevel",
        value: function startLevel() {
            this.game.gameTick = 0;

            this.commands = [];
            this.game.team = this.currentFaction;

            this.resumeLevel();
        }
    }, {
        key: "loadLevel",
        value: function loadLevel() {
            var mapName = this.game.type + "/" + this.currentFaction + "/" + this.game.map.list[this.currentFaction][this.currentLevel];
            this.game.map.load(mapName, this.startLevel);
        }
    }, {
        key: "initializeLevel",
        value: function initializeLevel(data) {
            this.game.colorHash = {
                GoodGuy: {
                    index: 0,
                    color: "yellow",
                    team: "gsc"
                },
                BadGuy: {
                    index: 1,
                    color: "red",
                    team: "nwo"
                },
                Neutral: {
                    index: 0,
                    color: "yellow",
                    team: "civilian"
                }
            };

            this.game.players = ["GoodGuy", "BadGuy", "Neutral"];
            this.game.kills = [];
            this.game.deaths = [];

            for (var i = this.game.players.length - 1; i >= 0; i--) {
                this.game.kills[this.game.players[i]] = 0;
                this.game.deaths[this.game.players[i]] = 0;
            }

            var startingTypes = Object.keys(data.starting).sort();
            for (var st = startingTypes.length - 1; st >= 0; st--) {
                var type = startingTypes[st];
                var startingArray = data.starting[type];

                for (var _i = 0; _i < startingArray.length; _i++) {
                    var item = startingArray[_i];
                    item.type = type;

                    this.game.add(item);
                }
            }

            this.game.team = data.team;
            this.game.player = data.player;
            this.game.cash = $.extend([], data.cash);
        }
    }, {
        key: "gameOptions",
        value: function gameOptions() {
            this.pauseLevel();
        }
    }, {
        key: "pauseLevel",
        value: function pauseLevel() {
            this.game.running = false;
            clearInterval(this.game.animationInterval);
        }
    }, {
        key: "resumeLevel",
        value: function resumeLevel() {
            this.game.running = true;
            this.game.gameSpeed = this.gameSpeed;

            this.game.animationInterval = setInterval(this.animationLoop.bind(this), this.game.animationTimeout / this.game.gameSpeed);
            this.animationLoop();

            this.game.refreshBackground = true;
            this.game.drawingLoop();
        }
    }, {
        key: "sendCommand",
        value: function sendCommand(commandUids, command) {
            if (this.commands.length <= this.game.gameTick + 1) {
                this.commands[this.game.gameTick + 1] = [{
                    commandUids: commandUids,
                    command: command
                }];
            } else {
                this.commands[this.game.gameTick + 1].push({
                    commandUids: commandUids,
                    command: command
                });
            }
        }
    }, {
        key: "animationLoop",
        value: function animationLoop() {
            this.game.gameTick++;
            if (this.commands.length > this.game.gameTick && this.commands[this.game.gameTick]) {

                for (var i = 0; i < this.commands[this.game.gameTick].length; i++) {
                    var commandObject = this.commands[this.game.gameTick][i];
                    this.game.receiveCommand(commandObject.commandUids, commandObject.command);
                }
            }
            this.game.animationLoop();
        }
    }]);

    return SinglePlayer;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var astar = function () {
    function astar() {
        _classCallCheck(this, astar);
    }

    _createClass(astar, [{
        key: "diagonalSuccessors",
        value: function diagonalSuccessors(xN, xS, xE, xW, N, S, E, W, grid, rows, cols, result, i) {
            if (xN) {
                if (xE && (!grid[N][E] || grid[N][E] == 0)) {
                    result[i++] = {
                        x: E,
                        y: N
                    };
                }

                if (xW && (!grid[N][W] || grid[N][W] == 0)) {
                    result[i++] = {
                        x: W,
                        y: N
                    };
                }
            }

            if (xS) {
                if (xE && (!grid[S][E] || grid[S][E] == 0)) {
                    result[i++] = {
                        x: E,
                        y: S
                    };
                }

                if (xW && (!grid[S][W] || grid[S][W] == 0)) {
                    result[i++] = {
                        x: W,
                        y: S
                    };
                }
            }

            return result;
        }
    }, {
        key: "diagonalSuccessorsFree",
        value: function diagonalSuccessorsFree(xN, xS, xE, xW, N, S, E, W, grid, rows, cols, result, i) {
            xN = N > -1;
            xS = S < rows;
            xE = E < cols;
            xW = W > -1;

            if (xE) {
                if (xN && (!grid[N][E] || grid[N][E] == 0)) {
                    result[i++] = {
                        x: E,
                        y: N
                    };
                }

                if (xS && (!grid[S][E] || grid[S][E] == 0)) {
                    result[i++] = {
                        x: E,
                        y: S
                    };
                }
            }

            if (xW) {
                if (xN && (!grid[N][W] || grid[N][W] == 0)) {
                    result[i++] = {
                        x: W,
                        y: N
                    };
                }

                if (xS && (!grid[S][W] || grid[S][W] == 0)) {
                    result[i++] = {
                        x: W,
                        y: S
                    };
                }
            }

            return result;
        }
    }, {
        key: "nothingToDo",
        value: function nothingToDo(xN, xS, xE, xW, N, S, E, W, grid, rows, cols, result, i) {
            return result;
        }
    }, {
        key: "successors",
        value: function successors(find, x, y, grid, rows, cols) {
            var N = y - 1,
                S = y + 1,
                E = x + 1,
                W = x - 1,
                xN = N > -1 && !grid[N][x],
                xS = S < rows && !grid[S][x],
                xE = E < cols && !grid[y][E],
                xW = W > -1 && !grid[y][W],
                result = [],
                i = 0;

            if (xN) {
                result[i++] = {
                    x: x,
                    y: N
                };
            }

            if (xE) {
                result[i++] = {
                    x: E,
                    y: y
                };
            }

            if (xS) {
                result[i++] = {
                    x: x,
                    y: S
                };
            }

            if (xW) {
                result[i++] = {
                    x: W,
                    y: y
                };
            }

            return find(xN, xS, xE, xW, N, S, E, W, grid, rows, cols, result, i);
        }
    }, {
        key: "diagonal",
        value: function diagonal(start, end, f1, f2) {
            return f2(f1(start.x - end.x), f1(start.y - end.y));
        }
    }, {
        key: "euclidean",
        value: function euclidean(start, end, f1, f2) {
            var x = start.x - end.x,
                y = start.y - end.y;
            return f2(x * x + y * y);
        }
    }, {
        key: "manhattan",
        value: function manhattan(start, end, f1, f2) {
            return f1(start.x - end.x) + f1(start.y - end.y);
        }
    }, {
        key: "AStar",
        value: function AStar(grid, start, end, f) {
            var cols = grid[0].length;
            var rows = grid.length;
            var limit = cols * rows;
            var f1 = Math.abs;
            var f2 = Math.max;
            var list = {};
            var result = [];
            var open = [{
                x: start[0],
                y: start[1],
                f: 0,
                g: 0,
                v: start[0] + start[1] * cols
            }];
            var length = 1;

            var adj = void 0,
                distance = void 0,
                find = void 0,
                i = void 0,
                j = void 0,
                max = void 0,
                min = void 0,
                current = void 0,
                next = void 0;

            end = {
                x: end[0],
                y: end[1],
                v: end[0] + end[1] * cols
            };

            switch (f) {
                case "Diagonal":
                    find = this.diagonalSuccessors;
                case "DiagonalFree":
                    distance = diagonal;
                    break;
                case "Euclidean":
                    find = this.diagonalSuccessors;
                case "EuclideanFree":
                    f2 = Math.sqrt;
                    distance = this.euclidean;
                    break;
                default:
                    distance = this.manhattan;
                    find = this.nothingToDo;
                    break;
            }

            find || (find = diagonalSuccessorsFree);

            do {
                max = limit;
                min = 0;

                for (i = 0; i < length; ++i) {
                    if ((f = open[i].f) < max) {
                        max = f;
                        min = i;
                    }
                }

                current = open.splice(min, 1)[0];

                if (current.v != end.v) {
                    --length;
                    next = this.successors(find, current.x, current.y, grid, rows, cols);

                    for (i = 0, j = next.length; i < j; ++i) {
                        (adj = next[i]).p = current;
                        adj.f = adj.g = 0;
                        adj.v = adj.x + adj.y * cols;
                        if (!(adj.v in list)) {
                            adj.f = (adj.g = current.g + distance(adj, current, f1, f2)) + distance(adj, end, f1, f2);
                            open[length++] = adj;
                            list[adj.v] = 1;
                        }
                    }
                } else {
                    i = length = 0;
                    do {
                        result[i++] = {
                            x: current.x,
                            y: current.y
                        };
                    } while (current = current.p);result.reverse();
                }
            } while (length);

            return result;
        }
    }]);

    return astar;
}();

var AStar = exports.AStar = new astar();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fog = exports.Fog = function () {
    function Fog(game) {
        _classCallCheck(this, Fog);

        this.game = game;

        this.fogGrid = [];
        this.canvas = document.createElement("canvas");
    }

    _createClass(Fog, [{
        key: "init",
        value: function init() {
            this.context = this.canvas.getContext("2d");
            this.canvas.width = this.game.map.currentMapContent.width * this.game.gridSize;
            this.canvas.height = this.game.map.currentMapContent.height * this.game.gridSize;
            this.context.fillStyle = "rgba(0,0,0,1)";
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

            var fogGrid = [];

            for (var i = 0; i < this.game.map.currentMapContent.height; i++) {
                fogGrid[i] = [];

                for (var j = 0; j < this.game.map.currentMapContent.width; j++) {
                    fogGrid[i][j] = 1;
                }
            }

            for (var l = this.game.players.length - 1; l >= 0; l--) {
                this.fogGrid[this.game.players[l]] = $.extend(true, [], fogGrid);
            }
        }
    }, {
        key: "isPointOverFog",
        value: function isPointOverFog(x, y) {
            if (y < 0 || y / this.game.gridSize >= this.game.map.currentMapContent.height || x < 0 || x / this.game.gridSize >= this.game.map.currentMapContent.width) {
                return true;
            }

            return this.fogGrid[this.game.player][Math.floor(y / this.game.gridSize)][Math.floor(x / this.game.gridSize)] == 1;
        }
    }, {
        key: "animate",
        value: function animate() {
            this.context.globalCompositeOperation = "destination-out";

            for (var i = this.game.items.length - 1; i >= 0; i--) {
                var item = this.game.items[i];

                for (var l = this.game.players.length - 1; l >= 0; l--) {
                    var player = this.game.players[l];

                    if (item.player == player || item.firing) {
                        var x = Math.floor(item.cgX);
                        var y = Math.floor(item.cgY);
                        var x0 = void 0,
                            y0 = void 0,
                            x1 = void 0,
                            y1 = void 0;

                        if (item.player === player) {
                            x0 = x - item.sight < 0 ? 0 : x - item.sight;
                            y0 = y - item.sight < 0 ? 0 : y - item.sight;
                            x1 = x + item.sight > this.game.map.currentMapContent.width - 1 ? this.game.map.currentMapContent.width - 1 : x + item.sight;
                            y1 = y + item.sight > this.game.map.currentMapContent.height - 1 ? this.game.map.currentMapContent.height - 1 : y + item.sight;
                        } else {
                            x0 = x - 1 < 0 ? 0 : x - 1;
                            y0 = y - 1 < 0 ? 0 : y - 1;
                            x1 = x + 1 > this.game.map.currentMapContent.width - 1 ? this.game.map.currentMapContent.width - 1 : x + 1;
                            y1 = y + 1 > this.game.map.currentMapContent.height - 1 ? this.game.map.currentMapContent.height - 1 : y + 1;
                        }

                        for (var j = x0; j <= x1; j++) {
                            for (var k = y0; k <= y1; k++) {
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
                                        this.context.fill();
                                    }

                                    this.fogGrid[player][k][j] = 0;
                                }
                            }
                        }
                    }
                }
            }

            this.context.globalCompositeOperation = "source-over";
        }
    }, {
        key: "draw",
        value: function draw() {
            this.game.foregroundContext.drawImage(this.canvas, this.game.viewport.x, this.game.viewport.y, this.game.viewport.width, this.game.viewport.height, this.game.viewport.left, this.game.viewport.top, this.game.viewport.width, this.game.viewport.height);
        }
    }]);

    return Fog;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Input - система управления игрока
var Input = exports.Input = function () {
    function Input(game) {
        _classCallCheck(this, Input);

        var self = this;

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

        this.canvas.addEventListener('mousemove', function (e) {
            return self.mouseMoveListener(e);
        }, false);

        this.canvas.addEventListener('mousedown', function (e) {
            return self.mouseDownListener(e);
        }, false);

        this.canvas.addEventListener('mouseup', function (e) {
            return self.mouseUpListener(e);
        }, false);

        this.canvas.addEventListener('mouseout', function (e) {
            self.insideCanvas = false;
            self.draw();
        }, false);

        this.canvas.addEventListener('mouseover', function (e) {
            self.insideCanvas = true;
            self.buttonPressed = false;
        }, false);

        this.canvas.addEventListener('click', function (e) {
            return self.mouseClickListener(e);
        }, false);

        this.canvas.addEventListener('contextmenu', function (e) {
            self.click(e, true);
            return false;
        }, false);

        this.canvas.addEventListener('keydown', function (e) {
            self.game.keyPressed(e);
        }, false);

        this.canvas.addEventListener('keyup', function (e) {
            self.game.keyReleased(e);
        }, false);
    }

    _createClass(Input, [{
        key: 'load',
        value: function load() {
            this.spriteImage = this.game.loader.loadImage("images/mouse.png");
            this.blankCursor = this.game.loader.loadImage("images/blank.gif");
            this.defaultCursor = this.game.loader.loadImage("images/default-cursor.gif");

            this.loadCursor("default");

            this.cursor = this.cursors["default"];
        }
    }, {
        key: 'loadCursor',
        value: function loadCursor(name, x, y, imageCount, cursorSpeed) {
            if (!x && !y) {
                x = 0;
                y = 0;
            };

            if (!cursorSpeed) {
                cursorSpeed = 1;
            };

            if (!imageCount) {
                imageCount = 1;
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
    }, {
        key: 'click',
        value: function click(e, rightClick) {
            if (!this.game.running) {
                return;
            }

            this.game.click(e, rightClick);
        }
    }, {
        key: 'mouseMoveListener',
        value: function mouseMoveListener(e) {
            var $inputCanvas = $(".inputcanvas");
            var offset = $inputCanvas.offset();

            this.x = Math.round((e.pageX - offset.left) * this.game.scaleFactor);
            this.y = Math.round((e.pageY - offset.top) * this.game.scaleFactor);

            this.gameX = this.x - this.game.viewport.adjustX;
            this.gameY = this.y - this.game.viewport.adjustY;

            this.gridX = Math.floor(this.gameX / this.game.gridSize);
            this.gridY = Math.floor(this.gameY / this.game.gridSize);

            if (this.buttonPressed) {
                if (this.game.running) {
                    this.dragSelect = true;
                }
            } else {
                this.dragSelect = false;
            }

            this.draw();
        }
    }, {
        key: 'mouseClickListener',
        value: function mouseClickListener(e) {
            this.click(e, false);
            this.dragSelect = false;

            return false;
        }
    }, {
        key: 'mouseDownListener',
        value: function mouseDownListener(e) {
            if (e.which == 1) {
                this.buttonPressed = true;
                this.dragX = this.gameX;
                this.dragY = this.gameY;

                e.preventDefault();
            }

            return false;
        }
    }, {
        key: 'mouseUpListener',
        value: function mouseUpListener(e) {
            if (e.which == 1) {
                if (this.dragSelect && !this.game.showMessage) {
                    if (!e.shiftKey) {
                        this.game.clearSelection();
                    }

                    var x1 = Math.min(this.gameX, this.dragX);
                    var y1 = Math.min(this.gameY, this.dragY);
                    var x2 = Math.max(this.gameX, this.dragX);
                    var y2 = Math.max(this.gameY, this.dragY);

                    var lastUnit = void 0;
                    for (var i = this.game.items.length - 1; i >= 0; i--) {
                        var unit = this.game.items[i];

                        if (!unit.unselectable && unit.player == this.game.player && x1 <= unit.x * this.game.gridSize && x2 >= unit.x * this.game.gridSize && y1 <= (unit.y - unit.z) * this.game.gridSize && y2 >= (unit.y - unit.z) * this.game.gridSize) {
                            this.game.selectItem(unit, e.shiftKey, true);
                            lastUnit = unit;
                        }
                    }
                }

                this.buttonPressed = false;
            }
            return false;
        }
    }, {
        key: 'underMouse',
        value: function underMouse() {
            if (this.y < this.game.viewport.top || this.y > this.game.viewport.top + this.game.viewport.height || this.game.fog.isPointOverFog(this.gameX, this.gameY)) {
                return false;
            }

            var selection = false;
            for (var i = this.game.items.length - 1; i >= 0; i--) {
                var item = this.game.items[i];

                if (Math.pow(item.x - this.gameX / this.game.gridSize, 2) + Math.pow(item.y - item.z - this.gameY / this.game.gridSize, 2) < Math.pow((item.softCollisionRadius + 4) / this.game.gridSize, 2)) {
                    if (item.player == game.player) {
                        return item;
                    }
                }
            }

            return selection;
        }
    }, {
        key: 'setCursor',
        value: function setCursor() {
            this.cursor = this.cursors["default"];
            this.tooltip = null;
            this.objectUnderMouse = undefined;

            if (!this.game.running) {
                return;
            }

            this.cursor = this.cursors["default"];

            this.cursorLoop++;
            if (this.cursorLoop >= this.cursor.cursorSpeed * this.cursor.count) {
                this.cursorLoop = 0;
            }

            this.draw();
        }
    }, {
        key: 'handlePanning',
        value: function handlePanning() {
            var panDirection = "";

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
    }, {
        key: 'draw',
        value: function draw() {
            this.context.clearRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);

            if (this.insideCanvas) {
                var imageNumber = this.cursor.spriteOffset + Math.floor(this.cursorLoop / this.cursor.cursorSpeed);

                this.context.drawImage(this.spriteImage, 30 * imageNumber, 0, 30, 24, this.x - this.cursor.x, this.y - this.cursor.y, 30, 24);

                if (this.dragSelect) {
                    var x = Math.min(this.gameX, this.dragX);
                    var y = Math.min(this.gameY, this.dragY);
                    var width = Math.abs(this.gameX - this.dragX);
                    var height = Math.abs(this.gameY - this.dragY);

                    this.context.strokeStyle = "white";
                    this.context.strokeRect(x + this.game.viewport.adjustX, y + this.game.viewport.adjustY, width, height);
                }

                if (this.tooltip) {
                    var tooltipHeight = 14 * this.tooltip.length + 3;
                    var tooltipWidth = this.tooltip[0].length * 6;

                    var _x = Math.round(this.x);
                    var _y = Math.round(this.y + 16);

                    this.context.fillStyle = "black";
                    this.context.fillRect(_x, _y, tooltipWidth, tooltipHeight);
                    this.context.strokeStyle = "darkgreen";
                    this.context.strokeRect(_x, _y, tooltipWidth, tooltipHeight);
                    this.context.fillStyle = "darkgreen";
                    this.context.font = "12px Command";

                    for (var i = 0; i < this.tooltip.length; i++) {
                        this.context.fillText(this.tooltip[i], _x + 4, _y + 14 + i * 14);
                    }
                }
            }
        }
    }]);

    return Input;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = exports.Loader = function () {
    function Loader() {
        _classCallCheck(this, Loader);

        this.loaded = false;
        this.loadedCount = 0;
        this.totalCount = 0;

        this.soundFileExtn = "mp3";

        $("#loadingscreen").show();
    }

    _createClass(Loader, [{
        key: "percentLoaded",
        value: function percentLoaded() {
            return Math.round(this.loadedCount / this.totalCount * 100);
        }
    }, {
        key: "updateProgress",
        value: function updateProgress() {
            $("#loading").html("Загружено " + this.percentLoaded() + "%");
        }
    }, {
        key: "loadImage",
        value: function loadImage(url, callback) {
            this.totalCount++;
            this.updateProgress();
            this.loaded = false;
            var self = this;

            $("#loadingscreen").show();

            var image = new Image();

            image.src = url;
            image.onload = function (ev) {
                self.loadCb(ev);

                if (callback) {
                    callback(image);
                }
            };

            return image;
        }
    }, {
        key: "loadSound",
        value: function loadSound(url) {
            var audio = new Audio();

            if (!this.soundFileExtn) {
                return audio;
            }

            this.totalCount++;
            this.loaded = false;

            this.updateProgress();

            $("#loadingscreen").show();

            audio.addEventListener("loadingCb", this.loadCb, false);

            audio.preload = "auto";
            audio.src = url + this.soundFileExtn;
            audio.load();

            return audio;
        }
    }, {
        key: "loadCb",
        value: function loadCb(e) {
            e.target.removeEventListener("loadingCb", this.loadCb, false);

            this.loadedCount++;
            this.updateProgress();

            if (this.loadedCount === this.totalCount) {
                this.loaded = true;
                this.loadedCount = 0;
                this.totalCount = 0;

                $("#loadingscreen").hide();

                if (this.onload) {
                    this.onload();
                    this.onload = undefined;
                }
            }
        }
    }]);

    return Loader;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = exports.Map = function () {
    function Map(game) {
        _classCallCheck(this, Map);

        this.game = game;

        this.current = undefined;
        this.currentMapTerrain = {};
        this.currentMapContent = undefined;
    }

    _createClass(Map, [{
        key: "load",
        value: function load(name, onloadEventHandler) {
            var self = this;

            $.ajax({
                url: "js/maps/" + name + ".js",
                dataType: "json",
                success: function success(content) {
                    self.loadMapContent(name, content, onloadEventHandler);
                },
                error: function error(content, status) {
                    alert("Ошибка загрузки карты: " + content);
                }
            });
        }
    }, {
        key: "loadMapContent",
        value: function loadMapContent(name, content, onloadEventHandler) {
            this.game.backgroundContext.fillStyle = "black";
            this.game.backgroundContext.fillRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);

            this.game.foregroundContext.fillStyle = "black";
            this.game.foregroundContext.fillRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);

            this.game.inputCanvasContext.clearRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);

            this.currentMapContent = content;
            this.currentMapImage = this.game.loader.loadImage("images/maps/" + name + ".jpg");

            this.game.resetTypes();

            this.currentMapTerrain = [];
            for (var _i = 0; _i < content.height; _i++) {
                this.currentMapTerrain[_i] = Array(content.width);
            }

            var terrainTypes = Object.keys(content.terrain).sort();
            for (var tt = terrainTypes.length - 1; tt >= 0; tt--) {
                var terrainType = terrainTypes[tt];
                var terrainArray = content.terrain[terrainType];

                for (var i = terrainArray.length - 1; i >= 0; i--) {
                    this.currentMapTerrain[terrainArray[i][1]][terrainArray[i][0]] = terrainType;
                }
            }

            var requirementsTypes = Object.keys(content.requirements).sort();
            for (var rt = requirementsTypes.length - 1; rt >= 0; rt--) {
                var type = requirementsTypes[rt];
                var requirementArray = content.requirements[type];
                for (var i = 0; i < requirementArray.length; i++) {
                    var name = requirementArray[i];

                    if (this.game.itemClass[type]) {
                        this.game.itemClass[type].load(name);
                    } else {
                        console.log("Не загружен тип :", type);
                    }
                }
            }

            this.game.singleplayer.initializeLevel(content);
            this.game.viewport.x = content.x * this.game.gridSize;
            this.game.viewport.y = content.y * this.game.gridSize;

            this.game.fog.init();
            if (this.game.loader.loaded) {
                onloadEventHandler();
            } else {
                this.game.loader.onload = onloadEventHandler.bind(this.game.singleplayer);
            }
        }
    }, {
        key: "draw",
        value: function draw() {
            if (this.game.refreshBackground) {
                this.game.backgroundContext.drawImage(this.currentMapImage, this.game.viewport.x, this.game.viewport.y, this.game.viewport.width - 1, this.game.viewport.height, this.game.viewport.left, this.game.viewport.top, this.game.viewport.width, this.game.viewport.height - 1);
                this.game.refreshBackground = false;
            }
        }
    }]);

    return Map;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Infantry = exports.Infantry = function () {
    function Infantry(game) {
        _classCallCheck(this, Infantry);

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
                spriteImages: [{
                    name: "stand",
                    count: 8
                }, {
                    name: "guard",
                    count: 8
                }, {
                    name: "run",
                    count: 6,
                    direction: true
                }, {
                    name: "fire",
                    count: 8,
                    direction: true
                }, {
                    name: "down",
                    count: 2,
                    direction: true
                }, {
                    name: "up",
                    count: 2,
                    direction: true
                }, {
                    name: "idle-1",
                    count: 16
                }, {
                    name: "idle-2",
                    count: 16
                }]
            }
        };

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
            pixelOffsetX: -26,
            pixelOffsetY: -16,
            selectOffsetX: -16,
            selectOffsetY: -10,
            pixelHeight: 39,
            pixelWidth: 50,
            softCollisionRadius: 4,
            hardCollisionRadius: 2,
            path: undefined,
            turnTo: function turnTo(toDirection) {
                var turnDirection = helpers.angleDiff(this.direction, toDirection, this.directions);

                if (turnDirection) {
                    var turnAmount = turnDirection / Math.abs(turnDirection);
                    this.direction = helpers.wrapDirection(this.direction + turnAmount, this.directions);
                }
            },
            checkCollision: helpers.checkCollision,
            moveTo: helpers.moveTo,
            canAttackEnemy: helpers.canAttackEnemy,
            findEnemyInRange: helpers.findEnemyInRange,
            hasReached: function hasReached() {
                if (Math.pow(this.orders.to.x - this.x, 2) + Math.pow(this.orders.to.y - this.y, 2) < 9) {
                    if (this.colliding) {
                        this.nearCount++;
                    }
                } else {
                    this.nearCount = 0;
                }
                if (Math.pow(this.orders.to.x - this.x, 2) + Math.pow(this.orders.to.y - this.y, 2) < .25 || Math.pow(this.orders.to.x - this.x, 2) + Math.pow(this.orders.to.y - this.y, 2) < 1 && this.nearCount > 10 || Math.pow(this.orders.to.x - this.x, 2) + Math.pow(this.orders.to.y - this.y, 2) < 4 && this.nearCount > 20 || Math.pow(this.orders.to.x - this.x, 2) + Math.pow(this.orders.to.y - this.y, 2) < 9 && this.nearCount > 30) {
                    this.nearCount = 0;
                    return true;
                }
                return false;
            },
            processOrders: function processOrders() {
                this.lastMovementX = 0;
                this.lastMovementY = 0;
                this.firing = false;

                if (this.weapon && this.weapon.cooldown > 0) {
                    this.weapon.cooldown--;
                }

                if (this.attacked) {
                    this.attacked = false;
                    this.attackedCycles = 2;
                }

                var newDirection;
                var nearestEnemy;

                switch (this.orders.type) {
                    case "stand":
                        this.action = "stand";
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
                                };
                            }
                        }
                        break;
                    case "move":
                        this.moving = true;

                        if (this.hasReached()) {
                            if (this.orders.lastOrder) {
                                this.orders = this.orders.lastOrder;
                            } else {
                                this.orders = {
                                    type: "stand"
                                };
                            }
                        } else {
                            this.action = "run";

                            if (!this.moveTo(this.orders.to)) {
                                this.orders = {
                                    type: "stand"
                                };
                            }
                        }
                        break;
                    case "attack":
                        if (!this.orders.to || this.orders.to.player == this.player || !this.canAttackEnemy(this.orders.to)) {
                            if (this.orders.lastOrder) {
                                this.orders = this.orders.lastOrder;
                            } else {
                                this.orders = {
                                    type: "guard"
                                };
                            }
                            return;
                        }

                        if (Math.pow(this.orders.to.cgX - this.x, 2) + Math.pow(this.orders.to.cgY - this.y, 2) < Math.pow(this.weapon.range - 1 + this.orders.to.hardCollisionRadius / this.game.gridSize, 2)) {
                            this.moving = false;

                            if (this.action == "run") {
                                this.animationIndex = 0;
                                this.action = "stand";
                            }

                            newDirection = helpers.findAngle(this.orders.to, this, this.directions);

                            if (newDirection != this.direction) {
                                this.action = "guard";
                                this.turnTo(newDirection);
                            } else {
                                if (this.weapon.cooldown <= 0) {
                                    if (this.action != "fire") {
                                        this.animationIndex = 0;
                                    }

                                    this.action = "fire";
                                    if (this.fireIndex == this.animationIndex) {
                                        this.weapon.fire(this, this.direction, this.orders.to);
                                    }
                                }
                            }
                        } else {
                            this.moving = true;
                            this.action = "run";

                            if (!this.moveTo(this.orders.to)) {
                                if (this.orders.lastOrder) {
                                    this.orders = this.orders.lastOrder;
                                } else {
                                    this.orders = {
                                        type: "guard"
                                    };
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
                                return;
                            } else {
                                this.action = "guard";
                                this.moving = false;
                            }
                        }

                        break;
                    case "die":
                        break;
                }
            },
            moveToDestination: function moveToDestination() {
                this.moving = true;
                this.action = "run";

                if (!this.moveTo(this.orders.to)) {
                    this.moving = "false";
                    newDirection = helpers.findAngle(this.orders.to, this, this.directions);

                    this.turnTo(newDirection);
                    this.action = "stand";
                }
            },
            drawSelection: function drawSelection() {
                var x = this.selectOffsetX - this.pixelOffsetX;
                var y = this.selectOffsetY - this.pixelOffsetY;

                this.context.drawImage(this.selectImage, x, y);

                var selectBarHeight = 4;
                var selectBarWidth = 12;

                this.context.beginPath();
                this.context.rect(x + 9, y - selectBarHeight, selectBarWidth * this.life / this.hitPoints, selectBarHeight);

                this.context.fillStyle = "lightgreen";

                this.context.fill();
                this.context.beginPath();
                this.context.strokeStyle = "black";
                this.context.rect(x + 9, y - selectBarHeight, selectBarWidth, selectBarHeight);
                this.context.stroke();
            },
            preRender: function preRender() {
                var x = 0;
                var y = 0;
                this.context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);

                this.context.drawImage(this.spriteCanvas, this.imageOffset * this.pixelWidth, this.spriteColorOffset, this.pixelWidth, this.pixelHeight, x, y, this.pixelWidth, this.pixelHeight);
                if (this.selected) {
                    this.drawSelection();
                }
            },
            draw: function draw() {
                if (this.action == "hide") {
                    return;
                }

                var interpolatedX = this.x + this.game.movementInterpolationFactor * this.lastMovementX;
                var interpolatedY = this.y + this.game.movementInterpolationFactor * this.lastMovementY;
                var x = Math.round(interpolatedX * this.game.gridSize) - this.game.viewport.x + this.game.viewport.left;
                var y = Math.round(interpolatedY * this.game.gridSize) - this.game.viewport.y + this.game.viewport.top;

                if (x < -this.pixelWidth || y < -this.pixelHeight || x > this.game.viewport.width + this.pixelWidth || y > this.game.viewport.height + this.pixelHeight) {
                    return;
                }

                this.game.foregroundContext.drawImage(this.canvas, x + this.pixelOffsetX, y + this.pixelOffsetY);
            },
            animate: function animate() {
                this.cgX = this.x;
                this.cgY = this.y;
                this.spriteColorOffset = this.game.colorHash[this.player].index * this.pixelHeight;

                switch (this.action) {
                    case "run":
                    case "fire":
                    case "down":
                    case "up":
                        this.imageList = this.spriteArray[this.action + "-" + this.direction];

                        this.imageOffset = this.imageList.offset + this.animationIndex;
                        this.animationIndex++;

                        if (this.animationIndex >= this.imageList.count) {
                            this.animationIndex = 0;
                            if (this.action == "up") {
                                this.action = "stand";
                            }

                            if (this.action == "fire") {
                                this.action = "guard";
                            }
                        }

                        break;
                    case "guard":
                        this.imageList = this.spriteArray["guard"];
                        if (!this.imageList) {
                            alert(this.name);
                        }

                        this.imageOffset = this.imageList.offset + this.direction;

                        break;
                    case "stand":
                        this.imageList = this.spriteArray["stand"];
                        this.imageOffset = this.imageList.offset + this.direction;

                        break;
                    case "hide":
                        break;
                    default:
                        alert("no action called : " + this.action);
                        break;
                }
            },
            game: this.game
        };
    }

    _createClass(Infantry, [{
        key: "add",
        value: function add(details) {
            var item = {};
            var name = details.name;

            $.extend(item, this.defaults);
            $.extend(item, this.list[name]);

            if (details.percentLife) {
                item.life = item.hitPoints * details.percentLife;
                delete item.percentLife;
            } else {
                item.life = item.hitPoints;
            }

            $.extend(item, details);

            if (item.primaryWeapon) {
                item.weapon = this.game.weapons.add({
                    name: item.primaryWeapon
                });
            }

            item.canvas = document.createElement("canvas");
            item.canvas.width = item.pixelWidth;
            item.canvas.height = item.pixelHeight;
            item.context = item.canvas.getContext("2d");

            return item;
        }
    }, {
        key: "load",
        value: function load(name) {
            var item = this.list[name];
            console.log("Загрузка", name, "...");

            item.type = this.type;
            item.spriteCanvas = document.createElement("canvas");
            item.spriteSheet = this.game.loader.loadImage("images/" + this.type + "/" + name + "-sprite-sheet.png", function (image) {
                helpers.createSpriteSheetCanvas(image, item.spriteCanvas, "grayscale");
            });

            item.selectImage = this.game.loader.loadImage("images/sidebar/select-small.png");
            item.spriteArray = [];
            item.spriteCount = 0;

            for (var i = 0; i < item.spriteImages.length; i++) {
                var constructImageCount = item.spriteImages[i].count;
                var totalImageCount = item.spriteImages[i].totalCount || item.spriteImages[i].count;
                var constructImageName = item.spriteImages[i].name;

                if (typeof item.spriteImages[i].spriteCount !== "undefined") {
                    item.spriteCount = item.spriteImages[i].spriteCount;
                }

                if (item.spriteImages[i].direction) {
                    for (var j = 0; j < item.directions; j++) {
                        item.spriteArray[constructImageName + "-" + j] = {
                            name: constructImageName + "-" + j,
                            count: constructImageCount,
                            offset: item.spriteCount
                        };

                        item.spriteCount += totalImageCount;
                    }
                } else {
                    if (typeof item.spriteImages[i].spriteCount !== "undefined") {
                        item.spriteCount = item.spriteImages[i].spriteCount;
                    }

                    item.spriteArray[constructImageName] = {
                        name: constructImageName,
                        count: constructImageCount,
                        offset: item.spriteCount
                    };

                    item.spriteCount += constructImageCount;
                }
            }
        }
    }]);

    return Infantry;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Weapons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Weapons = exports.Weapons = function () {
    function Weapons(game) {
        _classCallCheck(this, Weapons);

        var self = this;

        this.game = game;

        this.list = {
            machinegun: {
                name: "machinegun",
                damage: 100500,
                projectile: "invisible",
                attackSpeed: 20,
                range: 3,
                fire: function fire(from, direction, target) {
                    from.firing = true;
                    self.cooldown = self.attackSpeed;

                    console.log("*Выстрел* Бах!");
                }
            }
        };

        this.defaults = {
            cooldown: 0,
            fire: function fire(from, direction, target) {
                from.firing = true;
                this.cooldown = this.attackSpeed;

                console.log("*Выстрел*. Бах!");
            }
        };
    }

    _createClass(Weapons, [{
        key: "add",
        value: function add(details) {
            var item = {};
            var name = details.name;

            $.extend(item, this.defaults);
            $.extend(item, this.list[name]);
            $.extend(item, details);

            return item;
        }
    }]);

    return Weapons;
}();

/***/ })
/******/ ]);