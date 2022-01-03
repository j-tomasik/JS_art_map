function populateInfoBox (locationClass) {
    document.getElementById('name').textContent = locationClass.name;
    document.getElementById('physical').textContent = locationClass.type;
    document.getElementById('location').textContent = locationClass.address;
    document.getElementById('artist-link').textContent = locationClass.link;
    document.getElementById('access').textContent = locationClass.access;
}