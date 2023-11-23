console.log('Bozo')

const getData = async (cityName) => {
    //should I define the key and url? because I need the api key in order for it to work. 
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=23f4cdf287b64a9adf7edeaa12534f71&units=imperial`)
    console.log(response)
    console.log(response.data)
    return response.data
}

const weatherList = (id,location, temperature, forecast, humiditiy) => {
    const html = `
    <div class="card mt-3 mb-3" style="width: 18rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${location}</li>
    <li class="list-group-item">${temperature}</li>
    <li class="list-group-item">${forecast}</li>
    <li class="list-group-item">${humiditiy}</li>
    </ul>
    </div>
    `;

    document.querySelector('.weather-list').insertAdjacentHTML('beforeend', html)
};

const loadData = async (event) => {
    event.preventDefault()
    let queryCity = document.querySelector("#city-name").value
    const weatherData = await getData(queryCity)
    weatherList(weatherData.sys.country, weatherData.main.temp, weatherData.weather[0].description, weatherData.main.humidity)
    
}
const clearData = () => {
    document.querySelector('.weather-list').innerHTML ='';
}
