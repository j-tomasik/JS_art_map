//needs getData method, LocationClass and populateInfoBox to be passed in or accessable/initialized
async function initMap() {

    //centers map on sf
    let mapOptions = {
        center: { lat: 37.77493, lng: -122.419415 },
        zoom: 12
    }
    //initializes map and connect it to html
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //initializes geocoder obj to convert each street address to coords for pin placement
    let geocoder = new google.maps.Geocoder();
    //loads the array of location info
    let tester = await getData();

    //iterates through data matrix returned by async 'getData' function, creates an li with each name
    //need to add event listener and bind class instance to li element
    tester.forEach(location => {
        let newLocation = new LocationClass(location);

        let node = document.createElement("LI");
        let textnode = document.createTextNode(newLocation.name);
        node.appendChild(textnode);
        document.getElementById('vertical-list').appendChild(node);

        node.addEventListener('click', function () {

            dropPin(newLocation, map);
            populateInfoBox(newLocation);
        })


    });
}