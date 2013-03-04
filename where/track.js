		var map;

      function initialize() {
	  
		// set location of various stations
		var stations = [
			['Alewife Station', 42.395428, -71.142483, 'RALEN', 'Northbound'],
			['Davis Square Station', 42.39674, -71.121815, 'RDAVN', 'Northbound'],
			['Davis Square Station', 42.39674, -71.121815, 'RDAVS', 'Southbound'],
			['Porter Square Station', 42.3884, -71.119149, 'RPORN', 'Northbound'],
			['Porter Square Station', 42.3884, -71.119149, 'RPORS', 'Southbound'],	
			['Harvard Square Station', 42.373362, -71.118956, 'RHARN', 'Northbound'],
			['Harvard Square Station', 42.373362, -71.118956, 'RHARS', 'Southbound'],
			['Central Square Station', 42.365486, -71.103802, 'RCENN', 'Northbound'],
			['Central Square Station', 42.365486, -71.103802, 'RCENNS', 'Southbound'],
			['Kendall/MIT Station', 42.36249079, -71.08617653, 'RKENN', 'Northbound'],
			['Kendall/MIT Station', 42.36249079, -71.08617653, 'RKENS', 'Southbound'],
			['Charles/MGH Station', 42.361166, -71.070628, 'RMGHN', 'Northbound'],
			['Charles/MGH Station', 42.361166, -71.070628, 'RMGHS', 'Southbound'],
			['Park St. Station', 42.35639457, -71.0624242, 'RPRKN', 'Northbound'],
			['Park St. Station', 42.35639457, -71.0624242, 'RPRKN', 'Southbound'],
			['Downtown Crossing Station', 42.355518, -71.060225, 'RDTCN', 'Northbound'],
			['Downtown Crossing Station', 42.355518, -71.060225, 'RDTCS', 'Southbound'],
			['South Station', 42.352271, -71.055242, 'RSOUN', 'Northbound'],
			['South Station', 42.352271, -71.055242, 'RSOUS', 'Southbound'],
			['Broadway Station', 42.342622, -71.056967, 'RBRON', 'Northbound'],
			['Broadway Station', 42.342622, -71.056967, 'RBROS', 'Southbound'],
			['Andrew Station', 42.330154, -71.057655, 'RANDN', 'Northbound'],
			['Andrew Station', 42.330154, -71.057655, 'RANDS', 'Southbound'],
			['JFK/UMass Station', 42.320685, -71.052391, 'RJFKN', 'Northbound'],
			['JFK/UMass Station', 42.320685, -71.052391, 'RJFKS', 'Southbound'],
			['Savin Hill Station', 42.31129, -71.053331, 'RSAVN', 'Northbound'],
			['Savin Hill Station', 42.31129, -71.053331, 'RSAVS', 'Southbound'],
			['Fields Corner Station', 42.300093, -71.061667, 'RFIEN', 'Northbound'],
			['Fields Corner Station', 42.300093, -71.061667, 'RFIES', 'Southbound'],
			['Shawmut Station', 42.29312583, -71.06573796, 'RSHAN', 'Northbound'],
			['Shawmut Station', 42.29312583, -71.06573796, 'RSHAS', 'Southbound'],
			['Ashmont Station', 42.284652, -71.064489, 'RASHS', 'Southbound'],
			['North Quincy Station', 42.275275, -71.029583, 'RNQUN', 'Northbound'],
			['North Quincy Station', 42.275275, -71.029583, 'RNQUS', 'Southbound'],
			['Wollaston Station', 42.2665139, -71.0203369, 'RWOLN', 'Northbound'],
			['Wollaston Station', 42.2665139, -71.0203369, 'RWOLS', 'Southbound'],
			['Quincy Center Station', 42.251809, -71.005409, 'RQUCN', 'Northbound'],
			['Quincy Center Station', 42.251809, -71.005409, 'RQUCS', 'Southbound'],
			['Quincy Adams Station', 42.233391, -71.007153, 'RQUAN', 'Northbound'],
			['Quincy Adams Station', 42.233391, -71.007153, 'RQUAS', 'Southbound'],
			['Braintree Station', 42.2078543, -71.0011385, 'RBRAS', 'Southbound']
		];
		
	  
		// set middle as downtown crossing
		var middle = new google.maps.LatLng(42.364125,-71.058111);
	  
		// set up map
        var mapOptions = {
          center: middle,
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		// create map in "map_canvas"
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
		
		// use image below as marker image
		var image = 'train.png';
		// make array to store each marker and info window, should correspond with stations array
		var markers = [];
		var infowindows = [];
		
		for (i = 0; i < stations.length; i++){
		
			var string = new Array ()
			string [i] = 'hi';
		
			infowindows[i] = new google.maps.InfoWindow({
				content: string [i]
			});
			
			markers[i] = new google.maps.Marker({
				position: new google.maps.LatLng(stations[i][1], stations[i][2]),
				title: stations [i][0],
				icon: image
				})
				markers[i].setMap(map);
				
			// when click, should display info window
			//setStationEventListener (infowindows[i], markers[i]);	
			google.maps.event.addListener(markers[i], 'click', function() {
				currentmarker = this;
				infowindows[i].setContent(currentmarker.title);
				infowindows[i].open(map,currentmarker);
				});
			
		}
			
		drawline (stations, map);
		
		// this doesn't work...
		getMyLocation();
				
}

	function setStationEventListener (infowindow, marker){
		
		console.log('enter set station func');
		console.log (infowindow);
		console.log(marker);
		
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
	}


	function drawline (stations, map){
	
		// draws line to connect markers	
			var line = new Array();
			for (i = 0; i < stations.length; i++){
				line[i] = new Array (2);
			}
			for (i = 0; i < line.length; i++){
				line[i][0] = stations [i][1];
				line [i][1]= stations [i][2];
				
			}
			var connect = new Array ();
			for (i = 0; i < stations.length; i++){
				connect [i] = new google.maps.LatLng(line[i][0], line [i][1])
			}
			
		// connect the dots with a red line
		var redLine = new google.maps.Polyline ({
			path: connect, // QUESTION- how do i specify that i want to use only the 2nd and 3rd element of each array? lat + long, dont want title...
			strokeColor: "#FF0000",
			strokeOpacity: 1.0,
			strokeWeight: 2
		});
		redLine.setMap(map);
	}



/*
	var request1;
	
	// this array contains 
	arrival = new Array ();
	init_arrive();
	parse_arrive();
	
	function init_arrive(){
		request1 = new XMLHttpRequest ();
		request1.open("GET"," http://mbtamap-cedar.herokuapp.com/mapper/redline.json", true);
		request1.send(null);
		request1.onreadystatechange = parse_arrive;
	}
	
	function parse_arrive() {
		pstring = JSON.parse (request1.responseText);
		
		for (i = 0; i < pstring.length; i++){
			Platform = pstring [i];
			render = Platform ['PlatformKey'] + " " + Platform ['Time'] + '<br/>';
			arrival[i] = Platform;
			console.log(arrival[i].Time);
			console.log (arrival[i].PlatformKey);
		}
		
	}
*/



// STILL NEED TO ASSIGN INFO BOX FOR THEM
// CLEAN UP THIS CODE
	
	var request2;
	init_where();

	function init_where (){
	
		request2 = new XMLHttpRequest ();
		request2.open("GET","http://messagehub.herokuapp.com/a3.json", true);
		request2.send(null);
		request2.onreadystatechange = parse_where;
	}
	
	function parse_where() {
	
	if (request2.readyState == 4){
	
		pstring = JSON.parse (request2.responseText);
		
		for (i = 0; i < pstring.length; i++){
			Find = pstring [i];
			render = Find ['name']+ ': ' + Find.loc.note + '<br/>';
			
			a = Find.loc.latitude;
			b = Find.loc.longitude;
	
	
			if (Find ['name'] == "Waldo"){
			console.log('found waldo');
			console.log(render);
			console.log(a,b);
			waldoloc = new google.maps.LatLng(a, b);
			console.log(waldoloc);
			var waldomarker = new google.maps.Marker({
				position: waldoloc,
				title:"Found Waldo!",
				icon: 'waldo.png'
			});
			waldomarker.setMap(map);
				
				// place corresponding info window for each marker
			/*	var waldowindow = new google.maps.InfoWindow({
					content: render
				});
				waldowindow.open(map,waldomarker);*/
				
				
			}
			

			if (Find ['name'] == "Carmen Sandiego"){
			console.log('found carmen');
			console.log(render);
			console.log(a,b);
			
				var marker2 = new google.maps.Marker({
					position: new google.maps.LatLng(a,b),
					title:"Found Carmen Sandiego!",
					icon: 'carmen.png'
					})
					marker2.setMap(map);
				
				// place corresponding info window for each marker
				var infowindow = new google.maps.InfoWindow({
					content: render
				})
			}	
			
		}
		
	  }
		
	}

	
	function getMyLocation() {
        lat = -99999;
        lng = -99999;
		
		console.log("1");
		
        if (navigator.geolocation) {
		
		console.log("2");
            // the navigator.geolocation object is supported on your browser
			//THIS IS NOT WORKING? WHY? 
            navigator.geolocation.getCurrentPosition(function(position) {

                lat = position.coords.latitude;
				console.log(lat);
                lng = position.coords.longitude;
				console.log(lng);
				
				var locationstring = '<p>You are located here: </p>' + lat + ", " + lng + "<br/>"; 
				
				var yourlocwindow = new google.maps.InfoWindow({
					content: locationstring
				});
				
                var yourlocation = new google.maps.Marker({
					position: new google.maps.LatLng(lat,lng),
					title:"You are here!"
				});
				yourlocation.setMap(map);
				
				google.maps.event.addListener(yourlocation, 'click', function() {
					yourlocwindow.open(map,yourlocation);
				});
			});		
        }
        else {
			console.log("3");
				alert("Geolocation is not supported by your web browser");
        }
	
    } 

// display this value in the info box of your location
	
	function find_station(stations, latitude, longitude){

		origin = (latitude, longitude);
		min = 0;

		for (i = 0; i < stations.length; i++){

			destination = (stations[i][1], stations[i][2]);
			distance = google.maps.geometry.spherical.computeDistanceBetween(origin, destination);
	
			if (distance < min){
				min = distance;
				neareststop = stations [i][0];
			}
		}

		// convert from meters to miles
		miles = min * 0.000621371;
		
		var closest = new Array ();
			closest [0] = min;
			closest [1] = neareststop;
		
		return closest; 
}
	
	
	
	
	
	
	
	
	
	