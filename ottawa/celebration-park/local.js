var southWest = L.latLng(45.36638, -75.73674),
    northEast = L.latLng(45.36933, -75.73316),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.map('map', {
    center: [45.36806, -75.73408],
    zoom: 18,
    minZoom: 18,
    maxZoom: 19,
    maxBounds: bounds,
});

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var benchLayer = new L.GeoJSON.AJAX("./geojson/benches.geojson", {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
});
benchLayer.addTo(map);

var trashIcon = L.AwesomeMarkers.icon({
  icon: 'trash',
  prefix: 'fa',
  markerColor: 'black'
})

var wastebinLayer = new L.GeoJSON.AJAX("./geojson/waste_baskets.geojson", {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: trashIcon
        });
    }
});
wastebinLayer.addTo(map);

var bicycleIcon = L.AwesomeMarkers.icon({
  icon: 'bicycle',
  prefix: 'fa',
  markerColor: 'blue'
})

var wastebinLayer = new L.GeoJSON.AJAX("./geojson/bicycle_parking.geojson", {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: bicycleIcon
        });
    }
});
wastebinLayer.addTo(map);



