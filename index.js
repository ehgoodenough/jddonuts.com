google.maps.event.addDomListener(window, "load", function() {
    var map = new google.maps.Map(document.getElementById("map"), {
        "center": new google.maps.LatLng(35.062731, -85.306903),
        "disableDefaultUI": true,
        "scrollwheel": false,
        "zoom": 15,
    })
    var marker = new google.maps.Marker({
        "position": new google.maps.LatLng(35.062731, -85.306903),
        "map": map
    })
})
