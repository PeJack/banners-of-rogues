export class SinglePlayer {
    constructor(game) {
        this.game = game;

        this.gameSpeed = 5;
        this.currentFaction = undefined;        
        this.currentLevel = undefined;
    }


    startLevel() {
        this.game.gameTick = 0;

        this.commands = [];
        this.game.team = this.currentFaction;

        this.resumeLevel();
    } 

    loadLevel() {
        let mapName = this.game.type + "/" + this.currentFaction + "/" + this.game.map.list[this.currentFaction][this.currentLevel];
        this.game.map.load(mapName, this.startLevel)
    } 

    initializeLevel(data) {
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

        for (let i = this.game.players.length - 1; i >= 0; i--) {
            this.game.kills[this.game.players[i]] = 0;
            this.game.deaths[this.game.players[i]] = 0
        }

        let startingTypes = Object.keys(data.starting).sort();
        for (let st = startingTypes.length - 1; st >= 0; st--) {
            let type = startingTypes[st];
            let startingArray = data.starting[type];

            for (let i = 0; i < startingArray.length; i++) {
                let item = startingArray[i];
                item.type = type;

                this.game.add(item)
            }
        }
        
        this.game.team = data.team;
        this.game.player = data.player;
        this.game.cash = $.extend([], data.cash)
    }

    gameOptions() {
        this.pauseLevel();
    }

    pauseLevel() {
        this.game.running = false;
        clearInterval(this.game.animationInterval)
    }

    resumeLevel() {
        this.game.running = true;
        this.game.gameSpeed = this.gameSpeed;
    
        this.game.animationInterval = setInterval(this.animationLoop.bind(this), this.game.animationTimeout / this.game.gameSpeed);
        this.animationLoop();
        
        this.game.refreshBackground = true;
        this.game.drawingLoop();
    }

    sendCommand(commandUids, command) {
        if (this.commands.length <= this.game.gameTick + 1) {
            this.commands[this.game.gameTick + 1] = [{
                commandUids: commandUids,
                command: command
            }]
        } else {
            this.commands[this.game.gameTick + 1].push({
                commandUids: commandUids,
                command: command
            })
        }
    }

    animationLoop() {
        this.game.gameTick++;
        if (this.commands.length > this.game.gameTick && this.commands[this.game.gameTick]) {

            for (let i = 0; i < this.commands[this.game.gameTick].length; i++) {
                let commandObject = this.commands[this.game.gameTick][i];
                this.game.receiveCommand(commandObject.commandUids, commandObject.command)
            }
        }
        this.game.animationLoop()
    }
  
}