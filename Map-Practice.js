var locations = [
    [
        "David Strong Building",
        48.464801,
         -123.313539
    ],
    [
    		"Engineering and Computer Science Building",
        48.461188,
        -123.311802
    ],
    [
    
    		"Buisiness and Economics Building",
        48.465222, 
        -123.313245
    ],
    [
    		"Elliot Building",
        48.462833, 
        -123.310190
    ]
]
		
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
		var cnt = 0;
    var marker, i;
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function(){
       cnt++;
          infowindow.setContent(locations[i][0] + "  " + locations[i][1] + "  " + locations[i][2] + "          " + cnt)
          infowindow.open(map, marker);
       
         
       
        }
      })(marker, i));
    }

