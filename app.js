const search=document.querySelector('#search');
const form=document.querySelector('form');
const API = `dfa194a9f8a32e6055512e0a00205b3f`;
const temperature=document.querySelector('.temp');
var at;
var lon;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
  getWeather(search.value);
    
    })
 async function getWeather(c){
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${c}&appid=${API}`;
    
    const response = await fetch(url);
    const data = await response.json();
     if(data==0){
      document.querySelector('.area').textContent='City Not found'; 
     }else{
      showWeather(data);
      console.log(data);
     }
}

    
function showWeather(data){
     temp(data[0].lat,data[0].lon);
    
}
 async function temp(lat,lon){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`;
    const response = await fetch(url);
    const data = await response.json();
    const temp=data.main.temp;
    const sum=((temp - 32) * 5/9).toFixed(2);
    temperature.innerHTML = sum + " " + ' °C';
    document.querySelector('.area').textContent=search.value;
console.log(data);
  
}