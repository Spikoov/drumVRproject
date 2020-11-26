const audioSnare = new Audio('sound/snare.mp3');
const audioHighTom =  new Audio('sound/tom-c.mp3');
const audioMidTom = new Audio('sound/tom-b.mp3');
const audioLowTom = new Audio('sound/tom-a.mp3');
const audioHiHat = new Audio('sound/hi-hat.mp3');
const audioCrash = new Audio('sound/crash.mp3');
const audioRide = new Audio('sound/ride.mp3');


$(document).ready(function () {

 

    AFRAME.registerComponent("snare", {
        init: function() {
            this.el.addEventListener("hitstart", (e) => {
                $("snare").color = "#ff5959";
                audioSnare.play();
            })

            this.el.addEventListener("hitend", (e) => {
                $("snare").color = "#fff";
            })
        }
    })

    AFRAME.registerComponent("high-tom", {
        init: function() {
            this.el.addEventListener("hitstart", (e) => {
                $("high-tom").color = "#ff5959";
                audioHighTom.play();
            })

            this.el.addEventListener("hitend", (e) => {
                $("high-tom").color = "#fff";
            })
        }
    })

    AFRAME.registerComponent("mid-tom", {
        init: function() {
            this.el.addEventListener("hitstart", (e) => {
                $("mid-tom").color = "#ff5959";
                audioMidTom.play();
            })

            this.el.addEventListener("hitend", (e) => {
                $("mid-tom").color = "#fff";
            })
        }
    })

    AFRAME.registerComponent("low-tom", {
        init: function() {
            this.el.addEventListener("hitstart", (e) => {
                $("low-tom").color = "#ff5959";
                audioLowTom.play();
            })

            this.el.addEventListener("hitend", (e) => {
                $("low-tom").color = "#fff";
            })
        }
    })

    AFRAME.registerComponent("hi-hat", {
        init: function() {
            this.el.addEventListener("hitstart", (e) => {
                $("hi-hat").color = "#ff5959";
                audioHiHat.play();
            })

            this.el.addEventListener("hitend", (e) => {
                $("hi-hat").color = "#fff";
            })
        }
    })

    AFRAME.registerComponent("crash", {
        init: function() {
            this.el.addEventListener("hitstart", (e) => {
                $("crash").color = "#ff5959";
                audioCrash.play();
            })

            this.el.addEventListener("hitend", (e) => {
                $("crash").color = "#fff";
            })
        }
    })

    AFRAME.registerComponent("ride", {
        init: function() {
            this.el.addEventListener("hitstart", (e) => {
                $("ride").color = "#ff5959";
                audioRide.play();
            })

            this.el.addEventListener("hitend", (e) => {
                $("ride").color = "#fff";
            })
        }
    })

})