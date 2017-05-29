'use strict';

var gmarkers = [];

var map;
var infowindow;
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

  var marker = new google.maps.Marker({
    title: title,
    position: pos,
    category: category,
    map: map,
    description: description
  });
  gmarkers.push(marker);

  // Marker click listener
  // google.maps.event.addListener(markers, 'click', (function (markers, content) {
  //     return function () {
  //         console.log('Gmarker 1 gets pushed');
  //         infowindow.setContent(content);
  //         infowindow.open(map, markers);
  //         map.panTo(this.getPosition());
  //         map.setZoom(15);
  //     }
  // })(markers, content));
  var infowindow = new google.maps.InfoWindow({
   content: `${marker.title}
    ${marker.description}`
 });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}
var filterMarkers = function (category) {
  for (let i = 0; i < markers.length; i++) {
    var marker = gmarkers[i];
    // If is same category or category not picked
    if (marker.category == category || category.length === 0) {
      marker.setVisible(true);
    }
    // Categories don't match
    else {
      marker.setVisible(false);
    }
  }
}
