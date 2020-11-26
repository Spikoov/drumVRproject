$(document).ready(function () {

    const audioSnare = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/snare.mp3');
    const audioHighTom =  new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/tom-c.mp3');
    const audioMidTom = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/tom-b.mp3');
    const audioLowTom = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/tom-a.mp3');
    const audioHiHat = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/hi-hat.mp3');
    const audioCrash = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/crash.mp3');
    const audioRide = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/ride.mp3');

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

function test() {
    console.log("test");
}