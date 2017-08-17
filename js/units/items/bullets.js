export class Bullets {
    constructor(game) {
        this.game = game;

        this.list = {
            invisible: {
                name: "invisible",
                spread: 2
            }
        }
        
        this.defaults = {
            direction: 0,
            distanceTravelled: 0,
            z: 0,
            delay: 2,
            offsetIndex: 0,
            animate: function() {
                if (this.delay) {
                    this.delay--
                }
                
                let x, y;

                x = this.target.cgX || this.target.x;
                y = this.target.cgY || this.target.y;

                this.lastMovementY = 0;
                this.lastMovementX = 0;
                this.offsetIndex = 0;

                let bulletHasReached = true;
                this.x = x;
                this.y = y;

                for (let i = this.game.attackableItems.length - 1; i >= 0; i--) {
                    let item = game.attackableItems[i];
                    
                    let itemX = item.cgX;
                    let itemY = item.cgY;

                    if (Math.floor(itemX - this.x) < 3 && Math.floor(itemY - this.y) < 3) {
                        let leastDistance = Math.pow(Math.pow(itemX - this.x, 2) + Math.pow(itemY - this.y, 2), .5) * game.gridSize;
                        
                        if (leastDistance > item.softCollisionRadius) {
                            leastDistance -= item.softCollisionRadius
                        }

                        let damage = this.weapon.damage;
                        let damageFactor = Math.pow(.5, Math.floor(leastDistance / 2));

                        if (damageFactor > .125) {
                            item.life -= damage * damageFactor;
    
                            if (item.life <= 0) {
                                item.life = 0;
                            }

                            item.attacked = true;
                            this.game.attackedPlayers[item.player] = true;
                            item.attackedBy = this.from;
                        }
                    }
                }

                this.game.remove(this);
            },
            draw: function() {
                if (this.delay) {
                    return
                }

                if (this.image) {
                    this.interpolatedX = this.x + this.game.movementInterpolationFactor * this.lastMovementX;
                    this.interpolatedY = this.y - this.z + this.game.movementInterpolationFactor * this.lastMovementY;
                    
                    let x = Math.round(this.interpolatedX * this.game.gridSize) - this.game.viewportX + this.game.viewportLeft - this.pixelWidth / 2;
                    let y = Math.round(this.interpolatedY * this.game.gridSize) - this.game.viewportY + this.game.viewportTop - this.pixelHeight / 2;
                    
                    if (x < -this.pixelWidth || y < -this.pixelHeight || x > this.game.viewportWidth + this.pixelWidth || y > this.game.viewportHeight + this.pixelHeight) {
                        return
                    }
                    
                    this.game.foregroundContext.drawImage(this.spriteSheet, this.offsetIndex * this.pixelWidth, 0, this.pixelWidth, this.pixelHeight, x, y, this.pixelWidth, this.pixelHeight)
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
        $.extend(item, details);
        
        if (details.target) {
            let target = details.target;
            let targetEnemy = Math.pow(Math.pow(item.x - target.cgX, 2) + Math.pow(item.y - target.cgY, 2), .5) + 1;
            
            item.target = target;
            
            if (!item.targetDistance || targetEnemy < item.targetDistance) {
                item.targetDistance = targetEnemy
            }
        }
        return item
    }   
}