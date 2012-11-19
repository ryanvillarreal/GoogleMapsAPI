 function initialize() 
 {

        // List that holds all of the locations for adding to the Google Map later
	    var nodes = [
	    	['Node_1', 35.0156, -85.0867], 
	     ]; 

        // On initialize take in the IP as well as the Lat/Lon of the user
        lat = geoip_latitude(); 
        lon = geoip_longitude(); 
        alert(lat + " " + lon)

        // Pass that info into the list
        nodes.push("Node_2", lon, lat); 

         // This is the Map Options that are specified by Google's API
        var mapOptions = 
        {
            center: new google.maps.LatLng(35.0196, -85.0497),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
         };

         // Create the canvas
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

         var infowindow = new google.maps.InfoWindow(); 
         var marker, i; 

         alert(nodes.length)

         // Run through the list and add all of the Locations to the maps as markers
         for(i=0; i<nodes.length; i++)
         {
         	marker = new google.maps.Marker({
         		position: new google.maps.LatLng(nodes[i][1], nodes[i][2]), 
         		map: map
         	}); 

            // On click display the markers title
         	google.maps.event.addListener(marker, 'click', (function(marker,i){
         		return function(){
         			infowindow.setContent(nodes[i][0]); 
         			infowindow.open(map,marker); 

         		}
         	})(marker, i)); 
         }
} // end initalize function
