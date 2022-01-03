function dropPin(locationClass) {
    let geocoder = new google.maps.Geocoder();
    let map = document.getElementById('map')

    geocoder.geocode({ 'address': locationClass.address }, function (results, status) {
        if (status === 'OK') {
            let marker = new google.maps.Marker({
                map: map,
                position: locationClass.location,
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
            })
        } else {
            alert('Geocode was not successful for the following reason:' + status);
        }
    });

}