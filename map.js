// Marker coordinates
var map_point1 = [21.002902, 52.228850];
var map_point2 = [21.500902, 52.000850];

// Polygon
var map_polygon = [[20.922006711063837,51.43669800424428],[19.733289867618534,52.20726906566372],[19.414365836450276,52.570004719533785],[19.71879332074725,53.13028210472103],[20.67556541425201,53.32986826845254],[21.0524756329054,53.06064262010884],[21.50186858591521,53.29522444847305],[22.48763377316254,53.025780599876015],[22.661592335617947,52.47297790597722],[22.05273736702401,51.96676446116692],[20.922006711063837,51.43669800424428]];

/* Functions, do not delete */

function RandomRgba(opacity = 0.8)
{
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + opacity + ')';
}

function RandomHex()
{
	return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function PolygonStyle(fill_rgba = 'rgba(71, 166, 255, 0.2)', stroke_rgba = 'rgba(71, 166, 255, 1)', dot_rgba = 'rgba(71, 166, 255, 1)', dash_arr = [1,3,6])
{
	return new ol.style.Style({
		fill: new ol.style.Fill({
			color: fill_rgba
		}),
		stroke: new ol.style.Stroke({
			color: stroke_rgba,
			width: 2,
			lineDash: dash_arr
		}),
		image: new ol.style.Circle({
			radius: 5,
			fill: new ol.style.Fill({
				color: dot_rgba
			})
		})
	});
}

function RandomPolygonStyle(lineDash = [2,6])
{
	var rgb1 = RandomHex() + '66';
	var rgb2, rgb3 = RandomHex();
	return PolygonStyle(rgb1,rgb2,rgb3, lineDash)
}

function Feature(coordinate, title, desc)
{
	return new ol.Feature({
        // From event
        // geometry: new ol.geom.Point(evt.coordinate),
        geometry: new ol.geom.Point(ol.proj.fromLonLat(coordinate)),
		name: title,
		title: title,
        desc: desc,
        lon: coordinate[0],
        lat: coordinate[1]
    });
}

function CreateMap(coordinate, div_id = 'map', zoom = 7, max_zoom = 23)
{
    var TileLayer = new ol.layer.Tile({  source: new ol.source.XYZ({
		attributions: ['Powered by Esri',
					   'Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'],
		attributionsCollapsible: false,
		//https://api.maptiler.com/tiles/satellite/?key=t7KuvEZMf4kkkRt6mXIC
		url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
		// 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
		//'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
		maxZoom: 23
	  }) });

    return new ol.Map({
        target: div_id,
        layers: [ TileLayer ],
        view: new ol.View({
            center: ol.proj.fromLonLat(coordinate),
            maxZoom: max_zoom,
            zoom: zoom
        })
    })
}

function CreateIcon(icon_path = 'marker1.png', icon_text = '')
{
	return new ol.style.Style({
		image: new ol.style.Icon({
			anchor: [0.5, 50],
			anchorXUnits: 'fraction',
			anchorYUnits: 'pixels',
			opacity: 0.75,
			src: icon_path
		}),
		text: new ol.style.Text({
			font: '12px Arial',
			fill: new ol.style.Fill({ color: '#000' }),
			stroke: new ol.style.Stroke({
				color: '#fff',
				width: 2
			}),
			text: icon_text
		})
	});
}

function CreateMarker(coordinate, icon_path = 'marker1.png', title = 'Marker', desc = 'Map marker description')
{
	let iconStyle = CreateIcon(icon_path, title)
	let f = Feature(coordinate, title, desc);
    f.setStyle(iconStyle);
    return f;
}

function CreateSource(json_feature)
{
	// See json_feature: data/polygon-features.json
	return new ol.source.Vector({
		features: [],
		format: new ol.format.GeoJSON({featureProjection: 'EPSG:3857'}),
		url: json_feature,
		wrapX: false
	})
}

function CreateFeature(feature)
{
	if(feature) {
		source.addFeature(feature);
	}
	return source;
}

function CreateLayer(map, source, poly_style = null, feature = null, zindex = 999)
{
	if(feature) { source.addFeature(feature); }
	let layer = new ol.layer.Vector({ source: source, style: poly_style });
	layer.setStyle(poly_style);
	layer.setZIndex(zindex);
	map.addLayer(layer);
	return source;
}

function CreatePolygon(poly_array, title = '', desc = 'Obszar dostawy')
{
	let polygon = new ol.geom.Polygon([poly_array]);
	polygon.transform('EPSG:4326', 'EPSG:3857');

	let feature = new ol.Feature({
		geometry: polygon,
		name: title,
		title: title,
        desc: desc,
        lon: poly_array[0][0],
        lat: poly_array[0][1]
	});

	return feature;
}

function ModifyPolygon(map,source)
{
	var modify = new ol.interaction.Modify({source: source});
	map.addInteraction(modify);
	return source;
}

function SnapPolygon(map,source)
{
	var snap = new ol.interaction.Snap({source: source});
	map.addInteraction(snap);
	return source;
}

/**
 * Draw polygon on the map
 * @param obj map Map
 * @param obj source Map source
 * @param function geometryFunction
 * @param string type Value: Polygon, Point, LineString, Circle, Square, Box
 */
function DrawPolygon(map,source,geometryFunction,type = 'Polygon', style = null)
{
	var maxPoints = 10000;
	var poly = new ol.interaction.Draw({
		style: style,
		type: type,
		source: source,
		maxPoints: maxPoints,
		geometryFunction: geometryFunction
	});
	map.addInteraction(poly);
	return source;
}

// Remove draw from map
function RemoveDraw(draw)
{
    map.removeInteraction(draw);
}

function RemoveSnap(snap)
{
    map.removeInteraction(snap);
}

function RemoveModify(snap)
{
    map.removeInteraction(modify);
}

function ClearPolygon(source)
{
	source.clear();
}

function ClearMap(map)
{
	let lay = map.getLayers();
	lay.forEach((f) => {
		let s = f.getSource();
		s.clear();
	})
}

function MarkerOnTop(feature, show = false)
{
    let style = feature.getStyle();
    if(style)
    {
	    if(show){
	        style.zIndex = 9999;
	        style.zIndex_ = 9999;
	    }else{
	        style.zIndex = 999;
	        style.zIndex_ = 999;
	    }
	    feature.setStyle(style);
	}
}

function CreatePopup(map, html, div_box = 'popup')
{
	let s = new ol.source.Vector({ wrapX: true });
	let layer = new ol.layer.Vector({ source: s });

	// Popup showing the position the hovered marker
	let container = document.getElementById(div_box);
	container.innerHTML = html;

	let p = new ol.Overlay({
	    element: container,
	    autoPan: true,
	    autoPanAnimation: { duration: 350 }
	});
    p.setPosition(undefined);
	map.addOverlay(p);
	return p;
}

function CenterMap(coordinate, zoom = 13)
{
    map.getView().setCenter(ol.proj.transform(coordinate, 'EPSG:4326', 'EPSG:3857'));
    map.getView().setZoom(zoom);
}

// Get all fatures
function GetFeatures(source)
{
	return source.getFeatures()
}

function DownloadLinkJson(json)
{
    return 'data:text/json;charset=utf-8,' + json;
}

// Callback function
function Geometry(coordinates, geometry)
{
    if (geometry == undefined)
    {
        geometry = new ol.geom.Polygon(null);
    }
    console.log("Polygon points: ", coordinates);
    return geometry;
}

// Get polygon
function GetPolygon(source) {
    const format = new ol.format.GeoJSON({featureProjection: 'EPSG:3857'});
    const features = source.getFeatures();
	const json = format.writeFeatures(features);
	return json;
}



// If polygon contains point coordinates
function PointInPolygon(coordinate, polygon_points_array)
{
    var polygon = new ol.geom.Polygon([polygon_points_array]);
    var out = polygon.intersectsCoordinate(coordinate);
    return out;
}

/* Geocoding */

// Get address from location
function ReverseGeocoding(lon, lat) {
    fetch('https://nominatim.openstreetmap.org/reverse?format=json&lon=' + lon + '&lat=' + lat).then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        if(json != undefined){
            // document.getElementById('address').innerHTML = json.display_name;
        }
    })
}

// Get location from address
function LocationGeocoding(address) {
    fetch('https://nominatim.openstreetmap.org/search?q=' + address + '&format=json').then(function(response) {
        console.log("Geocoding response :: ", response);
        return response.json();
    }).then(function(json) {
        if(json != undefined){
            // document.getElementById('location').innerHTML = json[0].lat + ' ' + json[0].lon;
            var obj = json[0];
            console.log(obj);
            console.log(obj.lat, obj.lon);
            SetMarker(obj);
        }
    })
}

function getLatLng(e){
    console.log(e.value);
    LocationGeocoding(e.value);
}

function getLatLngClick(e){
    var e = document.getElementById("address");
    console.log(e.value);
    LocationGeocoding(e.value);
}

function PointToLonLat(e)
{
    var coordinate = ol.proj.toLonLat(e.coordinate).map(function(val) {
        return val.toFixed(6);
    });
    console.log("Coordinates: ", coordinate, e.coordinate);
    var lon = document.getElementById('lon').value = coordinate[0];
    var lat = document.getElementById('lat').value = coordinate[1];
    console.log("Coordinates Lon Lat: ", lon, lat);
    return coordinate;
}

// Only for tests
function CheckDeliveryAddress(ev, submit = true, key = '') {
	let len = 6;
	let c = document.getElementById('map-city');
	let a = document.getElementById('map-address');
	let city = c.value;
	let street = a.value;
	let address = city + ' ' + street;
	console.log("Address", address);
	// Miasto (warszawa) 8 + 1 (ulica)
	if(address.length > len) {
		fetch(encodeURI('https://maps.google.com/maps/api/geocode/json?key='+key+'&address='+address)).then(function(response) {
			console.log("Geocoding: ", response);
			return response.json();
		}).then(function(json) {
			if(json != undefined){
				let obj = json.results[0];
				if(obj != undefined){
					let loc = obj.geometry.location
					console.log("Location: ", loc);
					var map_point = [loc.lng, loc.lat];
					let ok = CheckDeliveryLocation(map_point);
					if(ok) {
						if(submit) {
							// If error div does not exists
							let error = CheckOrderMinCost();
							console.log("Min cost:", error);
							if(error == null) {
								// Submit form
								let form = document.getElementById('order-form');
								form.submit();
							}
						}else{
							alert("Dowozimy pod ten adres.")
						}
					} else {
						alert("Nie dowozimy pod ten adres.")
					}
				}else{
					alert('Adres nie istnieje.');
				}
			}else{
				alert('Nie można sprawdzić adresu! Spróbuj później.');
			}
		})
	} else {
		alert("Proszę podaj miasto i adres.");
	}
}

function CheckOrderMinCost() {
	const error = document.querySelector('.delivery-min-order-error');
	if(error) {
		alert("Nie przekroczono kwoty minimalnego zamówienia.")
	}
	return error
}

function CheckDeliveryLocation(point) {
	// Get poly from html
	let p = document.querySelectorAll('.polygon-array');
	let res = 0;
	if(p) {
		p.forEach((i) => {
			let poly = i.innerHTML
			let poly_id = i.dataset.id
			console.log('Polygon Id:', poly_id, 'Array:', poly);
			let o = JSON.parse(poly)
			let poly1 = o.coordinates[0];
			if(!res) {
				if(PointInPolygon(point, poly1)) {
					console.log("Marker in delivery area!");
					res = 1;
					// Update delivery session
					UpdateDeliverySession(poly_id);
				}else{
					console.log("Error delivery area location!");
					res = 0;
				}
			}
		});
	}

	return res;
}

function UpdateDeliverySession(poly_id) {
	// fetch(encodeURI('/update/delivery/session?id=' + poly_id)).then(function(res) {
	// 	console.log("Update delivery session: ", res);
	// 	return res.text();
	// }).then(function(txt) {
	// 	console.log("Update delivery session: ", txt);
	// 	// !!! Update cart here ... !!!
	//  // UpdateCart()
	// })
}

// Get location from address
function CheckDeliveryAddressOpenLayers(it, len = 9) {
	let c = document.getElementById('map-city');
	let a = document.getElementById('map-address');
	let city = c.value;
	let street = a.value;
	let address = city + ' ' + street;
	console.log("Address", address);
	// Miasto (warszawa) 8 + 1 (ulica)
	if(address.length > len) {
		fetch('https://nominatim.openstreetmap.org/search?q=' + address + '&format=json').then(function(response) {
			console.log("Geocoding response :: ", response);
			return response.json();
		}).then(function(json) {
			if(json != undefined){
				var obj = json[0];
				console.log(obj);
				var map_point = [obj.lon, obj.lat];
				let ok = CheckDeliveryLocation(map_point);
				if(ok) {
					alert("Dowozimy pod ten adres.")
				} else {
					alert("Nie dowozimy pod ten adres.")
				}
			}else{
				alert('Nie można sprawdzić adresu (map api error).');
			}
		})
	} else {
		alert("Proszę podaj miasto i adres.");
	}
}