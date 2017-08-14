import {helpers} from './../../helpers'

export class Weapons {
    constructor(game) {
        let self = this;

        this.game = game;

        this.list = {
            machinegun: {
                name: "machinegun",
                damage: 100500,
                projectile: "invisible",
                attackSpeed: 20,
                range: 3,
                fire: function(from, direction, target) {
                    from.firing = true;
                    self.cooldown = self.attackSpeed;

                    console.log("*Выстрел* Бах!");
                }
            }
        }

        this.defaults = {
            cooldown: 0,
            fire: function(from, direction, target) {
                from.firing = true;
                this.cooldown = this.attackSpeed;

                console.log("*Выстрел*. Бах!");
            }
        }

    }

    add(details) {
        let item = {};
        let name = details.name;

        $.extend(item, this.defaults);
        $.extend(item, this.list[name]);
        $.extend(item, details);

        return item
    }
}