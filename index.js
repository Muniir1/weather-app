const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const weatherImage = document.querySelector('.weatherImage')
const mainWeather = document.querySelector('.weather')


const apiurl ='https://api.openweathermap.org/data/2.5/weather?appid=c735afe267cdeacd39e9424135bb1fc0&units=metric&q=';
 
async function checkWeather(city){
    const theApi = await fetch(apiurl + city);

    if(theApi.status == 404){
        document.querySelector('.error').style.display = 'block'
        mainWeather.style.display = 'none'
    }
    else{
        const data = await theApi.json();
        console.log(data)
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity-no').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind-no').innerHTML = data.wind.speed + ' km/h';
    
        if(data.weather[0].main == 'Clouds'){
            weatherImage.src ="m/images/clouds.png"
        } 
        else if(data.weather[0].main == 'Clear'){
            weatherImage.src ="./images/clear.png"
        } 
        else if(data.weather[0].main == 'Rain'){
            weatherImage.src ="./images/rain.png"
        } 
        else if(data.weather[0].main == 'Drizzle'){
            weatherImage.src ="./images/drizzle.png"
        } 
        else if(data.weather[0].main == 'Mist'){
            weatherImage.src ="./images/mist.png"
        }
    
        document.querySelector('.error').style.display = 'none'
        mainWeather.style.display = 'block'
    }



}
btn.addEventListener('click', ()=>{
    checkWeather(input.value);
    input.value = '';
})
