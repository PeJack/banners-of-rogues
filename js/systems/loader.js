export class Loader {
    constructor() {
        this.loaded = false;
        this.loadedCount = 0;
        this.totalCount = 0;

        this.soundFileExtn = "mp3";

        $("#loadingscreen").show();
    }

    percentLoaded() {
        return Math.round((this.loadedCount/this.totalCount)*100);
    }

    updateProgress() {
        $("#loading").html("Загружено " + this.percentLoaded() + "%");
    }

    loadImage(url, callback) {
        this.totalCount++;
        this.updateProgress();
        this.loaded = false;
        let self = this;

        $("#loadingscreen").show();

        let image = new Image;
        
        image.src = url;
        image.onload = function(ev) {
            self.loadCb(ev);
            
            if (callback) {
                callback(image)
            }
        }

        return image
    }

    loadSound(url) {
        let audio = new Audio;

        if (!this.soundFileExtn) {
            return audio
        }

        this.totalCount++;
        this.loaded = false;

        this.updateProgress();

        $("#loadingscreen").show();

        audio.addEventListener("loadingCb", this.loadCb, false);
        
        audio.preload = "auto";
        audio.src = url + this.soundFileExtn;
        audio.load();

        return audio
    }  

    loadCb(e) {
        e.target.removeEventListener("loadingCb", this.loadCb, false);
        
        this.loadedCount++;
        this.updateProgress();

        if (this.loadedCount === this.totalCount) {
            this.loaded = true;
            this.loadedCount = 0;
            this.totalCount = 0;
            
            $("#loadingscreen").hide();

            if(this.onload) {
                this.onload();
                this.onload = undefined;
            }
        }
    }
}