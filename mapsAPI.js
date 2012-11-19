 function initialize() 
 {

    // See if I can get IP on initialize
    

	    var nodes = [
	    	['Node_1', 35.0156, -85.0867], 
	     	['Node_2', 35.0726, -85.0477],
	     	['Node_3', 35.0146, -85.0017],
	     	['Node_4', 35.0456, -85.0047],
	     	['Node_5', 35.0116, -85.0467],
	     	['Node_6', 35.0596, -85.0457],
	     	['Node_7', 35.0236, -85.0497]
	     ]; 



        var mapOptions = 
        {
            center: new google.maps.LatLng(35.0196, -85.0497),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
         };

        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

         var infowindow = new google.maps.InfoWindow(); 
         var marker, i; 

         for(i=0; i<nodes.length; i++)
         {
         	marker = new google.maps.Marker({
         		position: new google.maps.LatLng(nodes[i][1], nodes[i][2]), 
         		map: map
         	}); 

         	google.maps.event.addListener(marker, 'click', (function(marker,i){
         		return function(){
         			infowindow.setContent(nodes[i][0]); 
         			infowindow.open(map,marker); 

         		}
         	})(marker, i)); 
         }

         	var image = new google.maps.MarkerImage('plane.png'); 
         	plane = new google.maps.Marker({
         		position: new google.maps.LatLng(34.9006, -85.0390),
         		map: map,
         		icon: image
         	}); 

         	google.maps.event.addListener(plane); 
}

function animate()
{
    
}