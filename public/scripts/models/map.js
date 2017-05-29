'use strict';

var gmarkers = [];

var map;
var infowindow = new google.maps.InfoWindow({
    content: ''
});
var service;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.60616, lng: -122.328111},
    zoom: 13
  });
  for (let i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

}

function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];
    var description = marker[5];

    marker = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map,
        description: description
    });
    gmarkers.push(markers);

        // Marker click listener
        google.maps.event.addListener(markers, 'click', (function (markers, content) {
            return function () {
                console.log('Gmarker 1 gets pushed');
                infowindow.setContent(content);
                infowindow.open(map, markers);
                map.panTo(this.getPosition());
                map.setZoom(15);
            }
        })(markers, content));
    }
