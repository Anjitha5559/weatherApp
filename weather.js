let apiKey="e5d23761b7a54403fec26823850a37bd";
addEventListeners();
function gid(id){
return document.getElementById(id);
}


function getWeatherData(){
    var city = gid("searchhere").value;
    if(city==""){
        alert("Please enter a city name");
        return;
    }
    console.log(city);
    getDataFromApi(city);

}
function addEventListeners(){
    gid("searchimg").addEventListener("click",getWeatherData);
    gid("searchhere").addEventListener("keyup", function (event){
    if (event.key == "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("searchimg").click();
} });}

function getDataFromApi(city){
    var  url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
    fetch(url).then(function(response){
        return response.json();
    })
    .then(function(data){
        printDataToHtml(data) 
        console.log(data);
       })
    .catch(function(error){
        alert("City not found");
       if(error){
     weathershow.style.display="none";
       }
    })
}
function printDataToHtml(data){
    console.log(data);
    
    gid("city").innerHTML = "City:"+ data.name;
    gid("country").innerHTML = "Country:"+ data.sys.country;
    var tempInCelcius = data.main.temp - 273.15;
    gid("temp").innerHTML = "Temp:" + tempInCelcius.toFixed(2) + "°C";
    gid("humidity").innerHTML = "Humidity:"+data.main.humidity + "%";
    gid("pressure").innerHTML = "Pressure:"+data.main.pressure + "hPa";
    gid("sealevel").innerHTML = "Sea Level:"+data.main.sea_level +"m";
    gid("description").innerHTML ="Description:"+ data.weather[0].description;
    var description = data.weather[0].description;

    if(description=="clear sky"){
        document.body.style.backgroundImage = "url('sunny.jpg')";
    }
    else if(description=="cloudy"){
        document.body.style.backgroundImage = "url('clouds.jpg')";
    }
    
    else if(description=="scattered clouds"){
        document.body.style.backgroundImage = "url('few clouds.jpg')";
    }
    else if(description=="few clouds"){
        document.body.style.backgroundImage = "url('few clouds.jpg')";
    }
    else if(description=="broken clouds"){
        document.body.style.backgroundImage = "url('broken clouds.jpg')";
    }
    else if(description=="rainy"){
        document.body.style.backgroundImage = "url('rainy.jpg')";
    }
    else if(description=="moderate rain"){
        document.body.style.backgroundImage = "url('rainy.webp')";
    }
    else if(description=="light rain"){
        document.body.style.backgroundImage = "url('rainy.webp')";
    }
    else if(description=="thunderstorm"){
        document.body.style.backgroundImage = "url('thunderstorm.webp')";
    }
    else if(description=="heavy intensity rain"){
        document.body.style.backgroundImage = "url('thunderstorm.webp')";
    }
    else if(description=="snow"){
        document.body.style.backgroundImage = "url('snow.jpg')";
    }
    else if(description=="light snow"){
        document.body.style.backgroundImage = "url('snow.jpg')";
    }
    else if(description=="moderate snow"){
        document.body.style.backgroundImage = "url('snow.jpg')";
    }
    else if(description=="overcast clouds"){
        document.body.style.backgroundImage = "url('few clouds.jpg')";
    }
    else
    {
        document.body.style.backgroundImage = "url('bg.jpg')";
    }
    //link a css file
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'weather3.css';
    document.getElementsByTagName('HEAD')[0].appendChild(link);

   

}

function info(){

    gid("info").style.display="block";
    gid("info").style.height="20vh";
    gid("info").style.width="20vw";
    gid("info").style.backgroundColor="antiquewhite";
    gid("info").style.borderRadius="20px";
    gid("info").style.boxShadow="0px 0px 10px 10px black";
    gid("info").style.padding="5%";
    gid("info").style.fontSize="110%";
    gid("info").innerHTML="This is a weather app which gives you the weather details of the city you enter. It uses openweathermap API to fetch the data. It also changes the background image according to the weather condition of the city. Created by Anjitha J.";
    gid("info").style.opacity="0.8";
    gid("info").style.fontWeight="bold";
}

