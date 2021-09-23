const weatherApi = {
    key: "7d6dee4e0c3ce758c96ef083530dd665",
    baseurl: "https://api.openweathermap.org/data/2.5/weather?"
}

// Event listner function on keypress

const searchinputbox = document.getElementById("input-box");
searchinputbox.addEventListener('keypress',(Event) => {

    if(Event.keyCode == 13){
        console.log(searchinputbox.value);
        getWeatherReport(searchinputbox.value);
        
    }
    
});

// Get weather report
function getWeatherReport(city){
    fetch(`${weatherApi.baseurl}q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);

}

//Show weather report

function showWeatherReport(weather){
    console.log(weather);
    let city = document.getElementById('city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${weather.main.temp}&deg;C`;
    let minmaxtemp = document.getElementById('min-max');
    minmaxtemp.innerHTML = `${weather.main.temp_max}&deg;C (max) | ${weather.main.temp_min}&deg;C (min)`;

    let weatherinfo = document.getElementById('weather');
    weatherinfo.innerHTML = `${weather.weather[0].main}`;

    
    let iconid = `${weather.weather[0].icon}`;
    console.log(iconid);
    document.getElementById('img1').src=`http://openweathermap.org/img/wn/`+iconid+`@2x.png`;
    

    let date = document.getElementById('date');
    let todaydate = new Date();
    date.innerHTML = datemangment(todaydate);

}

//Date management

function datemangment(datearg){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

    let year = datearg.getFullYear();
    let date = datearg.getDate();
    let month = months[datearg.getMonth()];
    let day = days[datearg.getDay()];
    return `${date} ${day} ${month} ${year}`;
}

const buttonclick = document.getElementById('clear');
buttonclick.addEventListener('click',(Event) =>{
    document.getElementById('date').innerHTML = '';
    document.getElementById('temp').innerHTML = '';
    document.getElementById('min-max').innerHTML = '';
    document.getElementById('weather').innerHTML = '';
    document.getElementById('city').innerHTML = ''
    document.getElementById('img1').src = '#';
    document.getElementById('input-box').value = '';

});
