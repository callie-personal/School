// IIFE
(() => {


    //create map in leaflet and tie it to the div called 'theMap'
    let map = L.map('theMap').setView([44.646240, -63.573570], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    // L.marker([42, -60]).addTo(map)
    //     .bindPopup('This is a sample popup. You can put any html structure in this including extra flight data. You can also swap this icon out for a custom icon. Some png files have been provided for you to use if you wish.')
    //     .openPopup();

    let flightDataLayer;

    function fetchFlightData() {
        const apiUrl = 'https://opensky-network.org/api/states/all';
        const username = 'kuponut';
        const password = 'Majere88';
    //chatGPT because I couldn't find the info on opensky for javascript
        const headers = new Headers({
        'Authorization': 'Basic ' + btoa(username + ':' + password)
    });

    //fetch the API and include my authorization data
    fetch(apiUrl, { headers })
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        if (flightDataLayer) {
            map.removeLayer(flightDataLayer);
        }

        const flightData = data.states
        //filter the data to only include Canada as the origin country
            .filter(state => state[2] === 'Canada')
            .map(state => {
            return {
                //mapping the object with origin country, location and bearing
                //in GeoJSON format
                type: "Feature",
                properties: {
                    originCountry: state[2],
                    heading: state[10]
                },
                geometry: {
                    type: "Point",
                    coordinates: [state[5], state[6]]
                }

            };
        });
        

        flightDataLayer = L.geoJSON(flightData, {
            //adds GeoJSON layer to the map
            pointToLayer: (feature, location) => {
                //fixing the rotation to compensate for the orientation of the png
                const rotationAngle = feature.properties.heading - 45;
                //changing the icon
                const planeIcon = L.icon({
                    iconUrl: 'plane4-45.png',
                    iconSize: [32, 32],
                    //setting the anchor point for the icon and the popup
                    iconAnchor: [16, 16],
                    popupAnchor: [0, -32], 
            });
            //sets the plane marker data, location, icon used and rotation to match heading
            const planeMarker = L.marker(location, { icon: planeIcon, rotationAngle});
            //when you click on one of the icons, it'll display the origin country, location and heading
            planeMarker.on('click', () => {   
                const flightInfo = `Origin Country: ${feature.properties.originCountry}<br>Latitude: ${location.lat}<br>Longitude: ${location.lng}<br>Heading: ${feature.properties.heading}`;
                planeMarker.bindPopup(flightInfo).openPopup();
        });

        return planeMarker;
    }
    }).addTo(map);
    });
}

//initially call the fetch function
fetchFlightData();
//set interval to refresh every 10 seconds
setInterval(fetchFlightData, 10000);

})();