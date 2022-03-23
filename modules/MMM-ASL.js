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
                "https://media.giphy.com/media/46zn7p2dDz2cGqjCwe/giphy-downsized-large.gif",
            ],
            [
                "four",
                "https://media.giphy.com/media/3kHJ6aIUVtjhLefBiz/giphy.gif",
            ],
        ];
        this.random =
            this.gifUrls[Math.floor(Math.random() * (this.gifUrls.length))];
        this.url = this.random[1];
        this.word = this.random[0];
    },

    // Define styles.
	getStyles: function () {
		return ["MMM-EyeCandy.css"];
	},

    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.classList.add("main");
        
        var text = document.createElement("text");
        text.innerHTML = this.word;
        text.classList.add("word");
        wrapper.appendChild(text);
        
        var image = document.createElement("img");
        image.classList.add("photo");
        image.src = this.url;
        image.style.maxWidth = this.config.maxWidth;
        wrapper.appendChild(image);


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

