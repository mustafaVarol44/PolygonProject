/*
	Google javascript map api
	https://gist.github.com/MoovFun/2454d77c8bfdca0ea5910a5f2d53e863

	Geocoding google maps, find address coordinates. Add script in <head>
	<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY"></script>

	Address from input
	var address = document.getElementById('address').value;
*/
function FindAddressLocation(address = 'warszawa jerozolimskie 123') {
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode(
		{
			'address': address,
			componentRestrictions: {
				country: 'PL'
			}
		},
		function(results, status) {
			if (status == 'OK') {
				let loc = results[0].geometry.location;
				let lng = loc.lng();
				let lat = loc.lat();
				console.log("Location Lng: ", lng);
				console.log("Location Lng: ", lat);

				console.log("Map location:", obj, results);

				/*
				// Create map marker
				const map = new google.maps.Map(document.getElementById("map"), {
					zoom: 4,
					center: results[0].geometry.location,
				});

				map.setCenter(results[0].geometry.location);

				var marker = new google.maps.Marker({
					position: results[0].geometry.location,
					title: "Hello World!"
				});

				marker.setMap(map);
				*/

			} else {
				console.log('Geocode was not successful for the following reason: ' + status);
			}
		}
	);
}

// Create google map marker
function Marker(location, div = "map") {
	const map = new google.maps.Map(document.getElementById(div), {
		zoom: 4,
		center: location,
	});

	map.setCenter(location);

	var marker = new google.maps.Marker({
		position: location,
		title: "Hello World!"
	});

	marker.setMap(map);
}