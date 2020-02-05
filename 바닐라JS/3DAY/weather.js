// ������ �浵�� ������ �´�.
// API : �ٸ� �����κ��� �ս��� �����͸� ������ �� �ִ� ����. (���� �����͸�)
const weather = document.querySelector(".js-weather");

const API_KEY ="596d3632ad5352caa015f3ab483ceca5";
const COORDS = 'coords';

function getWeather(lat, log){
    // then : �����Ͱ� ������ ���� ���� �Լ��� ȣ�����ִ� �޼���
    // fetch�� �ؼ� �����͸� ������ ���� �� Network�� ������ �ֹǷ�, 
    // �� ���� ������ body�κп� �ʿ��� json������ ������ ���� ���ؼ� json()�� ����.
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
        ).then(function(response){ // fetch�� ������ �� �����Ϳ� ���� �Լ�
            return response.json(); // json �����͸� �غ��ؼ� ����(�̰͵� ������ ó���ϴµ� �ð� �ɸ���.)
        }).then(function(json){  // ���ϵ� json���Ͽ� ���� �Լ�
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError(position){
    console.log(position);
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, // -> latitude: latitude �� ���� ��
        longitude // -> longitude: longitude �� ���� ��
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();