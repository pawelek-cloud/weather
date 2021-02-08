const select = document.getElementById("my-select"),
    showOption = document.getElementById("option-selected");

select.addEventListener("change", function () {

    const city=this.value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.value}&cnt=5&appid=ecd6ba7cde8d46460f0cdb7d0b261058`)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data)
            // showOption.innerHTML = `Aktualna temperatura w miejscowosci ${city} to: ${(data.main.temp-273.15).toFixed(1)} &#x2103`;
            showOption.innerHTML= `Aktualna pogoda w miejscowosci ${city} to: ${data.weather[0].main} ${data.weather[0].icon}`;
        })


})
