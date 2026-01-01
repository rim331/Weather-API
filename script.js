
async function get(city){
    const response = await fetch(" https://api.openweathermap.org/data/2.5/weather?q= "+ city +"&units=metric&appid=" + apikey);
 
    const data = await response.json()
    console.log(data);
    displayWeather(data);
}

function displayWeather(data){
    const {name} = data;
    const {description , icon} = data.weather[0];
    const {temp , humidity} = data.main;
    const {speed} = data.wind;
    console.log(name , icon, description, temp , humidity , speed);
    document.querySelector(".city").innerText="Weather in " +name;
    document.querySelector(".temperature").innerText = temp + "°C";
    document.querySelector(".wind").innerText ="Wind speed : "+ speed +" km/h";        
    document.querySelector(".humidity").innerText = "Humidity : " + humidity + " %" ;
    document.querySelector(".description").innerText = description;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";

}
function search(){
    const cit = document.querySelector(".search-bar").value;
    document.querySelector(".card").style.cssText =`margin:  230px auto;
     width:540px;
     height: 440px;
     background: linear-gradient(to bottom, #ffffff 40%, #ffffff 100%);
     opacity: 80%;
     padding: 30px;
     border-radius:17px;
     border:7px solid  #43abd456;";
     `


    document.querySelector(".weather").style.display="block";
    get(cit);

}



document.querySelector(".search-button").addEventListener("click" ,search);

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        search();
    }
});




