console.log("Hello from main script")

AFRAME.registerComponent("snare", {
    init: function() {
      this.el.addEventListener("hitstart", (e) => {
        var audioCylindre1 = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/snare.mp3')
        audioCylindre1.play()
        console.log("dans le listener")
      })
    }
  })

AFRAME.registerComponent("high-tom", {
    init: function() {
        this.el.addEventListener("hitstart", (e) => {
            var audioCylindre1 = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/tom-c.mp3')
            audioCylindre1.play()
            console.log("dans le listener")
        })
    }
})

AFRAME.registerComponent("mid-tom", {
    init: function() {
        this.el.addEventListener("hitstart", (e) => {
            var audioCylindre1 = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/tom-b.mp3')
            audioCylindre1.play()
            console.log("dans le listener")
        })
    }
})

AFRAME.registerComponent("low-tom", {
    init: function() {
        this.el.addEventListener("hitstart", (e) => {
            var audioCylindre1 = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/tom-a.mp3')
            audioCylindre1.play()
            console.log("dans le listener")
        })
    }
})

AFRAME.registerComponent("hi-hat", {
    init: function() {
        this.el.addEventListener("hitstart", (e) => {
            var audioCylindre1 = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/hi-hat.mp3')
            audioCylindre1.play()
            console.log("dans le listener")
        })
    }
})

AFRAME.registerComponent("crash", {
    init: function() {
        this.el.addEventListener("hitstart", (e) => {
            var audioCylindre1 = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/crash.mp3')
            audioCylindre1.play()
            console.log("dans le listener")
        })
    }
})

AFRAME.registerComponent("ride", {
    init: function() {
        this.el.addEventListener("hitstart", (e) => {
            var audioCylindre1 = new Audio('https://raw.githubusercontent.com/Spikoov/drumVRproject/main/sound/ride.mp3')
            audioCylindre1.play()
            console.log("dans le listener")
        })
    }
})