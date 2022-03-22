/* Magic Mirror
 * Module: MMM-ASL
 *
 * By Sohee Kim, Joni Park
 * MIT Licensed.
 */
Module.register("MMM-EyeCandy", {
    // Default module config.
    defaults: {
        maxWidth: "100%", // Adjusts size of images. Retains aspect ratio.
    },

    start: function() {
        self = this;
        this.gifUrls = [
            ["one", "https://media.giphy.com/media/qUdiWk9DnEfC0/giphy.gif"],
            ["two", "https://media.giphy.com/media/xT1Ra0YPsiN7Yz51Oo/giphy.gif"],
            [
                "three",
                "https://giphy.com/clips/buzzfeed-kylie-jenner-buzzfeed-celeb-jordyn-woods-DvUHNSJXVeevC50djG",
            ],
            [
                "four",
                "https://giphy.com/clips/buzzfeed-buzzfeed-celeb-bowen-yang-reads-thirst-tweets-vnZAMoH2WjTIqmMROq",
            ],
        ];
        let random =
            this.gifUrls[Math.floor(Math.random() * (this.gifUrls.length - 1))];
        this.url = random[1];
        this.word = random[0];
    },

    getStyles: function() {
        return ["MMM-EyeCandy.css"];
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        var image = document.createElement("img");
        // var getTimeStamp = new Date();
        image.classList.add = "photo";
        // image.src = this.url + "?seed=" + getTimeStamp;
        image.src = this.url;
        image.style.maxWidth = this.config.maxWidth;
        wrapper.appendChild(image);

        let text = document.createElement("text");
        text.classList.add = "word";
        text.innerHTML = this.word;

        return wrapper;
    },

    // /////  Add this function to the modules you want to control with voice //////
    // notificationReceived: function(notification, payload) {
    //     if (notification === "HIDE_EYECANDY") {
    //         this.hide();
    //     } else if (notification === "SHOW_EYECANDY") {
    //         this.show(1000);
    //     }
    // },
});
