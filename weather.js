const weather = document.querySelector('.js-weather');

const API_KEY = 'ea3b24d9a95a9898ae4ac05b30e095e9';
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`https:///api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
    return response.json();
    })
    .then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature}˚  ${place}`
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        //latitude: latitude,
        //longitude: longitude
        latitude,
        longitude
    };
    // console.log(coordsObj);
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('Cant access geo location')
}

function askForCords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCords();
    }else{
        //getWeather
        const parsedCoords = JSON.parse(loadedCords);
        //console.log(parseCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();