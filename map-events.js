/*
if(PointInPolygon(map_point1, map_polygon))
{
    console.log("Marker in delivery area (polygon) !!!");
}
*/

/* Map Events */

// Selected marker
// var selected = null;

/*
// Get polygon
source.on('change', function()
{
    console.log("Map onchange event");

    // Get created polygon
	let json = GetPolygon();
	console.log("Created polygon: ", json);

    // If polygon contains point coordinates
    if(PointInPolygon(point1, polygon))
    {
        console.log("Yupi! Marker in polygon area!");
    }

	// Get all features from source
	GetFeatures(source).forEach((f) => {
		console.log("Feature", f);
	})
});
*/

/*
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
			let html = feature.get('title');

			if(html !== undefined)
        	{
				console.log("Hover", html);

				// Show popup
				popup = CreatePopup(map,html,'popup');
				// From cursor over
				popup.setPosition(evt.coordinate);

				// From feature/marker position
				// let postion = ol.proj.transform([feature.get('lon'),feature.get('lat')], 'EPSG:4326', 'EPSG:3857');
				// popup.setPosition(postion);

				// Show marker on top
				MarkerOnTop(feature, true);
			}
		}
	}
	else
	{
		source.getFeatures().forEach((f) => {
			// Move zindex 999
			MarkerOnTop(f, false);
		});

		// Hide popup
		popup.setPosition(undefined);
	}

});

// Create static popup on click
map.on('click', function(evt){
	let coordinatePretty = ol.coordinate.toStringHDMS(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'), 2);
	let coordinate = ol.proj.toLonLat(evt.coordinate);

	console.log("Clicked at position: ", coordinatePretty, coordinate);
	console.log("Clicked at position: ", evt.coordinate);

	// Click popup
	var feature = map.forEachFeatureAtPixel(evt.pixel, function (feat, layer) {
		selected = feat;
		return feat;
	});

	if (map.hasFeatureAtPixel(evt.pixel) === true)
	{
		// Show click popup here
		let html = feature.get('desc');

		if(html !== undefined)
        {
			// Show popup
			popup_click = CreatePopup(map,html,'popup_click');
			// From cursor over
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
*/

/*
// Create marker on click
map.on('click', function(evt){
	let coordinatePretty = ol.coordinate.toStringHDMS(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'), 2);
	let coordinate = ol.proj.toLonLat(evt.coordinate);

	// Create marker on click
	let m = CreateMarker(coordinate,'marker2.png');
	source = CreateLayer(m, map, source);
});
*/

/*
// Double click
map.on('dblclick', function(evt)
{
	let coordinatePretty = ol.coordinate.toStringHDMS(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'), 2);
	let coordinate = ol.proj.toLonLat(evt.coordinate);
	Clear map
	ClearMap(map);
});
*/