function dropPin(locationClass, map) {
    let geocoder = new google.maps.Geocoder();
    let createdMap = map;
    let address = locationClass.address;
    // let position = locationClass.location.geometry.location

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            let marker = new google.maps.Marker({
                map: createdMap,
                position: results[0].geometry.location,
                label: locationClass.name,
                icon: 'https://www.google.com/mapfiles/arrow.png'
            });

            let infoWindow = new google.maps.InfoWindow({
                content: locationClass.name
            });
            marker.addListener('click', function () {
                infoWindow.open(map, marker);
                //add function that loads the location attributes into the #info div
                document.getElementById('name').textContent = locationClass.name;
                document.getElementById('physical').textContent = locationClass.type
                document.getElementById('location').textContent = locationClass.address;
                document.getElementById('artist-link').textContent = locationClass.link;
                document.getElementById('access').textContent = locationClass.access;
            })
        } else {
            alert('Geocode was not successful for the following reason:' + status);
        }
    });

}