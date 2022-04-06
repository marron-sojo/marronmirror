/* Magic Mirror
 * Module: MMM-ASL
 *
 * By Sohee Kim, Joni Park
 * MIT Licensed.
 */
 

Module.register("MMM-ASL", {
    // Default module config.
    defaults: {
        type: "default",
        maxWidth: "100%", // Adjusts size of images. Retains aspect ratio.
    },

    start: function() {
        self = this;
        this.gifUrls = [
            [
            "Again",
            "https://media.giphy.com/media/vxNVATiedMAufTqPBB/giphy.gif",
            ],
            [
            "Bathroom",
            "https://media.giphy.com/media/QZWdLEDNAz6yRN2Hhp/giphy.gif",
            ],
            [
            "Cat",
            "https://media.giphy.com/media/5lwwL1WPR9Dvs6qKrO/giphy-downsized-large.gif",
            ],
            [
            "Dog",
            "https://media.giphy.com/media/nTbzGqhzznuOPRZsTb/giphy-downsized-large.gif",
            ],
            [
            "Eat<br>food",
            "https://media.giphy.com/media/zfU3I4gmvH3DSLyvDJ/giphy-downsized-large.gif",
            ],
            [
            "Father",
            "https://media.giphy.com/media/aBpouscwBaHmiMF5Ey/giphy-downsized-large.gif",
            ],
            [
            "Fine",
            "https://media.giphy.com/media/tmj2JYt0LlGOzgNKF3/giphy-downsized-large.gif",
            ],
            [
            "Go to",
            "https://media.giphy.com/media/PTAczZRvx3WN2Vhoet/giphy-downsized-large.gif",
            ],
            [
            "Hello",
            "https://media.giphy.com/media/FRYnfhCmUgdujL9caB/giphy-downsized-large.gif",
            ],
            [
            "Help",
            "https://media.giphy.com/media/e9VLQOCwqWnBvu7CdD/giphy-downsized-large.gif",
            ],
            [
            "Milk",
            "https://media.giphy.com/media/toQ6Ru5Xv99nqCaseX/giphy-downsized-large.gif",
            ],
            [
            "More",
            "https://media.giphy.com/media/zGUEuJ73jJ7viZx375/giphy-downsized-large.gif",
            ],
            [
            "Mother",
            "https://media.giphy.com/media/inAYk2keRqN95zsLIr/giphy-downsized-large.gif",
            ],
            [
            "No",
            "https://media.giphy.com/media/Hsm9vUV6m3kAGeJJ1n/giphy-downsized-large.gif",
            ],
            [
            "Please",
            "https://media.giphy.com/media/Uk4EFOkJczvhhWZiQM/giphy-downsized-large.gif",
            ],
            [
            "See you<br>later",
            "https://media.giphy.com/media/hJxtIwwltktAGFIiVL/giphy.gif",
            ],
            [
            "Thank<br>you",
            "https://media.giphy.com/media/x045R20yUd3sQsTIv8/giphy-downsized-large.gif",
            ],
            [
            "Want",
            "https://media.giphy.com/media/xIKljcdVR4GP0UXXnP/giphy-downsized-large.gif",
            ],
            [
            "What",
            "https://media.giphy.com/media/YYdJg2YL5B7lNZK8NT/giphy-downsized-large.gif",
            ],
            [
            "Yes",
            "https://media.giphy.com/media/lzFUpQvcGOFH0HC4lu/giphy-downsized-large.gif",
            ],

          
        ];
        this.random =
            this.gifUrls[Math.floor(Math.random() * (this.gifUrls.length))];
        this.url = this.random[1];
        this.word = this.random[0];
        
        setInterval(()=>{
            this.random =
            this.gifUrls[Math.floor(Math.random() * (this.gifUrls.length))];
            this.url = this.random[1];
            this.word = this.random[0];
            
            self.updateDom(500);
        }, 10000);
    },

    // Define styles.
	getStyles: function () {
		return ["MMM-ASL.css"];
	},
    
    getHeader: function () {
		return (this.config.type === "mini")?"ASL Learning": "";
	},

    getDom: function() {
        
        
        
        if (this.config.type === "mini") {
            var container = document.createElement("div");
            container.classList.add("mini-out");
            
            var image = document.createElement("img");
            image.classList.add("mini-photo");
            image.src = this.url;
            //image.style.maxWidth = this.config.maxWidth;
            container.appendChild(image);
            
            var text = document.createElement("text");
            text.innerHTML = this.word;
            text.classList.add("mini-word");
            container.appendChild(text);

            return container;
        
        } else {
            var container = document.createElement("div");
            container.classList.add("out");
            
            var logoWrapper = document.createElement("div");
            logoWrapper.classList.add("logo");
            var intro = document.createElement("intro");
            intro.innerHTML = "<p>Let's learn ASL</p><hr/>";
            logoWrapper.appendChild(intro);
            
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
            
            var footerWrapper = document.createElement("div");
            footerWrapper.classList.add("footer");
            var foot = document.createElement("foot");
            foot.innerHTML = "Marron Mirror @ Joni & Sohee";
            footerWrapper.appendChild(foot);
            
            container.appendChild(logoWrapper);
            container.appendChild(wrapper);
            container.appendChild(footerWrapper);
            
            return container;
        }

        
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

