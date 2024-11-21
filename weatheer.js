const input = document.querySelector("#inputtag")
const btn = document.querySelector("#eve")
const img = document.querySelector("#weather-img")
const temp = document.querySelector("#temp")
const des = document.querySelector("#desc")
const wind = document.querySelector(".wind")
const humid = document.querySelector(".humid")
const k=document.querySelector(".errorr")
btn.addEventListener("click", () => {
    weather(input.value);
})
const weather = async (city) => {
    const key = `14461610d0debf7c6642bebc6af09d1d`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    const data = await fetch(`${url}`).then((response) => {
        console.log(response)
        return response.json();
    })
    if (data.cod == "404" ) {
        k.classList.remove("errorr")
        k.classList.add("error");
        
    }
    else
    {
        k.classList.remove("error");
        k.classList.add("errorr")

    }
    // k.classList.add("errorr")
    console.log(data)
    temp.innerHTML = `${Math.round(data.main.temp)}°C`
    des.innerHTML = `${data.weather[0].description}`
    wind.innerHTML = `${data.wind.speed}Km/H`
    humid.innerHTML = `${data.main.humidity}%`
    switch (data.weather[0].main) {
        case  "Clouds":
            img.src="cloud.png"
            break
       case "Clear":
           img.src="clear.png"
           break

       case "Mist":
           img.src="mist.png"
           break

       case "Rain":
           img.src="rain.png"
           break;

       case "Snow":
           img.src="snow.png"
           break;
       

    }
}
