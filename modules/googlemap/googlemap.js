Module.register("googlemap",{
    // Default module config.
    defaults: {

	apikey: 'AIzaSyDwSDIe_qMPFufCLtz5JB80jgUG9-AgoqI',
	origin: 'Chicago, IL',
	destination: 'Los Angeles, CA',
	baseurl: 'https://www.google.com/maps/embed/v1/directions?key=',
	//style: 'border:0;-webkit-filter: ',
	},

    getDom: function() {
	var fullyBuiltURL = this.config.baseurl + this.config.apikey + '&origin=' + this.config.origin + '&destination=' + this.config.destination;
  		var iframe = document.createElement("IFRAME");
		iframe.style = this.config.style;
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.src =  fullyBuiltURL;
		return iframe;
	}
});
