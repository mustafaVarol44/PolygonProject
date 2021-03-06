# Map Marker with Openlayers 6.3
Create marker with openlayers map, simple map marker with popup.

### Map html
```html
<head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.3.1/css/ol.css" type="text/css">
	<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.3.1/build/ol.js"></script>

	<link href="map.css" rel="stylesheet">
	<script src="map.js"></script>
</head>

<!-- map div widh: height para (important !!!) -->
<div id="map" style="float:left; width: 100%; height: 400px;">
<!-- popup hover div -->
<div id="popup"></div>
<!-- popup click div -->
<div id="popup_click"></div>
```

### Add marker and polygon
```js
// Selected marker
var selected = null;
// Vars
var draw, snap, modify, source, map, marker1, popup, popup_click, poly_style, poly;
// Polygon
var polygon = [[20.922006711063837,51.43669800424428],[19.733289867618534,52.20726906566372],[19.414365836450276,52.570004719533785],[19.71879332074725,53.13028210472103],[20.67556541425201,53.32986826845254],[21.0524756329054,53.06064262010884],[21.50186858591521,53.29522444847305],[22.48763377316254,53.025780599876015],[22.661592335617947,52.47297790597722],[22.05273736702401,51.96676446116692],[20.922006711063837,51.43669800424428]];
// Coordinates
var point1 = [21.002902, 52.228850];
var point2 = [21.500002, 52.000050];

window.onload = () => {
	// Map center
	map = CreateMap(point1, 'map');

	// Hide popup
	popup = CreatePopup(map, '', 'popup');
	popup_click = CreatePopup(map, '', 'popup_click');

	// Marker
	marker1 = CreateMarker(point1, 'marker1.png', 'Marker', '<small>Map marker description</small>');
	source = CreateSource();
	CreateLayer(map, source, null, marker1);

	// Show polygon
	poly_style = PolygonStyle('#0099ff22','#0099ff', '#0099ff', [2,6]);
	poly = CreatePolygon(polygon, 'Dostawa', 'Obszar dostawy');
	source = CreateSource();
	CreateLayer(map, source, poly_style, poly, 1)

	// Draw polygon
	poly_style = PolygonStyle('#55cc0055','#55cc00', '#55cc00', [2,4,6]);
	source = CreateSource();
	DrawPolygon(map, source);
	CreateLayer(map, source, poly_style, null, 1)
}
```

## Eventy

### Map events
More in map-events.js
```js
window.onload = () => {
	// Hover popup
	map.on('pointermove', function (evt)
	{
		var feature = map.forEachFeatureAtPixel(evt.pixel, function (feat, layer) {
			return feat;
		});
		if (map.hasFeatureAtPixel(evt.pixel) === true)
		{
			if(selected != feature)
			{
				let html = feature.get('desc');

				if(html !== undefined)
				{
					popup = CreatePopup(map, html, 'popup');
					popup.setPosition(evt.coordinate);

					// From marker position
					// let postion = ol.proj.transform([feature.get('lon'),feature.get('lat')], 'EPSG:4326', 'EPSG:3857');
					// popup.setPosition(postion);

					MarkerOnTop(feature, true);
				}
			}
		}
		else
		{
			source.getFeatures().forEach((f) => {
				MarkerOnTop(f, false);
			});
			popup.setPosition(undefined);
		}
	});

	// Create static popup on click
	map.on('click', function(evt) {
		let coordinatePretty = ol.coordinate.toStringHDMS(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'), 2);
		let coordinate = ol.proj.toLonLat(evt.coordinate);

		console.log("Clicked at position: ", coordinatePretty, coordinate);
		console.log("Clicked at position: ", evt.coordinate);

		var feature = map.forEachFeatureAtPixel(evt.pixel, function (feat, layer) {
			selected = feat;
			return feat;
		});

		if (map.hasFeatureAtPixel(evt.pixel) === true)
		{
			let html = feature.get('desc');
			if(html !== undefined)
			{
				popup_click = CreatePopup(map,html,'popup_click');
				popup_click.setPosition(evt.coordinate);
			}
		}
		else
		{
			selected = null;
			// Hide markers zindex 999
			source.getFeatures().forEach((f) => {
				MarkerOnTop(f, false);
			});
			popup_click.setPosition(undefined);
		}
	});

	// Map onchange event
	source.on('change', function()
	{
		console.log("Map onchange event");

		// Get all features from source
		GetFeatures(source).forEach((f) => {
			console.log("Feature", f);
		})
	});

	// Create marker on click
	map.on('dblclick', function(evt)
	{
		console.log("Map onclick event");

		let coordinatePretty = ol.coordinate.toStringHDMS(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'), 2);
		let coordinate = ol.proj.toLonLat(evt.coordinate);

		let marker = CreateMarker(coordinate, 'marker2.png', 'Marker click', '<small>Map marker description</small>');
		CreateLayer(map, source, null, marker);
	});
}
```
