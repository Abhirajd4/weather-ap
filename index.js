
    let apiKey= "3a3e7b38148014d16679270dd3febf30"
    let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")
async function checkweather(city){


    const response=await fetch(apiUrl+ city + `&appid=${apiKey}`);
 if(response.status==404){
  document.querySelector(".eror").style.display="block";
  document.querySelector(".weather").style.display="none";
}
  
    var data=await response.json();


  
    console.log(data)
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector (".temprature").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "km/hr";

  if(data.weather[0].main=="clouds"){
    weatherIcon.src="images/clouds.png"}
else if(data.weather[0].main=="Clear") {
 weatherIcon.src="images/clear.png"
}
else if(data.weather[0].main=="Rain"){
 weatherIcon.src="images/rain.png"

}
else if(data.weather[0].main=="Drizzle"){

 weatherIcon.src="images/Drizzle.png"
  }
  else if(data.weather[0].main=="Drizzle"){

    weatherIcon.src="images/drizzle.png"
     }
     else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png"
     }
     else if(data.weather[0].main=="Snow"){
      weatherIcon.src="images/snow.png"

     }
     else if(data.weather[0].main=="Clouds"){
    
      weatherIcon.src="images/clouds.png"
    
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".eror").style.display="none";
}

searchbtn.addEventListener("click", () =>{

    checkweather(searchbox.value);
  

});