let cityname = document.querySelector('.weather_city');
let datetime = document.querySelector('.weather_date_time')
let w_forcast = document.querySelector('.weather_forcast')
let w_temprature = document.querySelector('.weather_temp')
let w_icon = document.querySelector('.weather_icon')
let w_mintem = document.querySelector('.weather_min')
let w_maxtem = document.querySelector('.weather_max')


let w_feelslike = document.querySelector('.weather_feelslike');
let w_humidity = document.querySelector('.weather_Humidity');
let w_wind = document.querySelector('.weather_Wind');
let w_pressur = document.querySelector('.weather_pressur')

let cityserch = document.querySelector('.weather_serch');
//3637ce8ace540c425947add2f576a499
//`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
//`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}



const getcountryname = (code) => {
  return new Intl.DisplayNames([code], {type: "region"}).of(code);
}


//to gate dateand time
const getdatetime = (dt) => {
const curdate = new Date(dt * 1000);
console.log(curdate);


const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
}

const formatter = new Intl.DateTimeFormat('en-US',options)
console.log(formatter);

return formatter.format(curdate);

}
let city = "Ahmedabad";

cityserch.addEventListener('submit' , (e) => {
  e.preventDefault();

  let cityname = document.querySelector('.city_name');
  console.log(cityname.value);
  city = cityname.value;
  getweatherDaTa();
  cityname.value = "";
  
})


const getweatherDaTa = async () => {
  const wurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2fde5cab1fcadc9237ff7bcb1027a1c`
//lat=44.34&lon=10.99
    
  try{
     const res = await fetch(wurl);
     const data = await res.json(); 
     console.log(data);
     



     const {main , name, weather, wind ,sys, dt} = data

     cityname.innerHTML = `${name} , ${getcountryname(sys.country)}`;
     datetime.innerHTML = getdatetime(dt);

    w_forcast.innerHTML = weather[0].main;
    w_icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@4x.png"/>`;
    w_temprature.innerHTML = `${main.temp}&#176`;
    w_mintem.innerHTML = ` Min:${main.temp_min.toFixed()}&#176`
    w_maxtem.innerHTML = ` Max:${main.temp_max.toFixed()}&#176`

    w_feelslike.innerHTML = `${main.feels_like.toFixed(2)}&#176`;
    w_humidity.innerHTML = `${main.humidity}%`;
    w_wind.innerHTML = `${wind.speed} m/s`;
    w_pressur.innerHTML = `${main.pressure} hpa`
    }catch(error){
        console.log(error);
     }

    }
    document.body.addEventListener('load',getweatherDaTa());

