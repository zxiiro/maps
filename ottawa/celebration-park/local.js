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

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
