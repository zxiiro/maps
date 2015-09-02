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


var geojson = {
  "type": "FeatureCollection",
  "generator": "overpass-turbo",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2015-09-01T23:21:01Z",
  "features": [
    {
      "type": "Feature",
      "id": "node/2629289667",
      "properties": {
        "@id": "node/2629289667",
        "amenity": "bench",
        "backrest": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.7360088,
          45.3684421
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2629289668",
      "properties": {
        "@id": "node/2629289668",
        "amenity": "bench",
        "backrest": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.7357038,
          45.3682841
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2629289669",
      "properties": {
        "@id": "node/2629289669",
        "amenity": "bench",
        "backrest": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.7339954,
          45.3684713
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2629289990",
      "properties": {
        "@id": "node/2629289990",
        "amenity": "bench"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.7346733,
          45.3676794
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2629289992",
      "properties": {
        "@id": "node/2629289992",
        "amenity": "bench"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.7346744,
          45.3676515
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2629290215",
      "properties": {
        "@id": "node/2629290215",
        "amenity": "bench",
        "backrest": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.7348356,
          45.3675514
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2629290216",
      "properties": {
        "@id": "node/2629290216",
        "amenity": "bench",
        "backrest": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.7347842,
          45.3673904
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2629290217",
      "properties": {
        "@id": "node/2629290217",
        "amenity": "bench",
        "backrest": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.7348018,
          45.3673286
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2629290220",
      "properties": {
        "@id": "node/2629290220",
        "amenity": "bench",
        "backrest": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.7347368,
          45.367215
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2629290221",
      "properties": {
        "@id": "node/2629290221",
        "amenity": "bench",
        "backrest": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.7346624,
          45.3671446
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2629290222",
      "properties": {
        "@id": "node/2629290222",
        "amenity": "bench",
        "backrest": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.734623,
          45.3670457
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2629290223",
      "properties": {
        "@id": "node/2629290223",
        "amenity": "bench",
        "backrest": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.7346783,
          45.3669788
        ]
      }
    }
  ]
};

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJson(geojson, {
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

}).addTo(map);
