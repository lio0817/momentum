function onGeoOk() {
    const API_KEY = "a153ac8d05dd1d06b5e756c31fa1bb94";
    const lat = 37.5868432; // 특정 위도 설정
    const lon = 126.9218479; // 특정 경도 설정
    const weather = document.querySelector("#weather-description span:last-child");
    const city = document.querySelector("#city span:last-child");

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

            // 날씨 아이콘 이미지를 설정
            const weatherIcon = document.querySelector("#weather-icon");
            weatherIcon.src = iconUrl;
            weatherIcon.alt = "날씨 아이콘";

            weather.innerText = data.weather[0].description;
            city.innerText = data.name;
        })
        .catch(error => {
            console.error('날씨 정보를 가져오는 중 오류가 발생했습니다.', error);
            weather.innerText = '날씨 정보를 가져오는 중 오류가 발생했습니다.';
        });
}

function onGeoError() {
    console.log("찾을 수 없습니다.");
}

// onGeoOk 함수를 직접 호출하여 특정 위도와 경도에 대한 날씨 정보를 가져옵니다.
onGeoOk();