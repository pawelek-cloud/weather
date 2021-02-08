// fetch("https://api.jsonbin.io/b/600d53593126bb747e9e4276")
//     .then((resp) => resp.json())
//     .then(function (data) {
//         console.log(data)
//     })

// fetch("https://api.jsonbin.io/b/600d53593126bb747e9e4276")
//     .then((resp) => resp.json())
//     .then(function (data) {
//         data.forEach(function (element) {
//             console.log(element.name);
//             document.getElementById("output").innerHTML += `<div> ${element.name}</div>`;

//         });
//     });

// document.getElementById("oblicz").addEventListener("click", currency)



// function currency(e) {
//     e.preventDefault();

//     let value = document.getElementById("fwaluta").value

//     console.log(value);

//     fetch("http://api.nbp.pl/api/exchangerates/rates/c/usd/?format=json")
//         .then((resp) => resp.json())
//         .then(function (data) {
//             console.log(data.rates[0].ask * value)
//             document.getElementById("output").innerHTML = data.rates[0].ask * value;


//         })

// }

// function jsonList() {
//     fetch("https://api.jsonbin.io/b/600d53593126bb747e9e4276")
//         .then((resp) => resp.json())
//         .then(function (data) {
//             data.forEach(function (element) {
//                 console.log(element.name);
//                 document.getElementById("output").innerHTML += `<li> ${element.name}</li>`;

//             });
//         });
// }



document.getElementById("select").addEventListener("change",calc)

function calc(){
    let inputValue = document.getElementById("CCY").value

    if (inputValue <= 0) {
        document.getElementById("output").innerText = "wprowadzono zla liczbe"
    } else { 
        fetch(`https://api.nbp.pl/api/exchangerates/rates/c/${this.value}/?format=json`)
        .then((resp)=>resp.json())
        .then(function(data){ 
           document.getElementById("output").innerHTML = `po przeliczeniu kwota to: ${data.rates[0].ask * inputValue} PLN`
        })
    }
}



// document.getElementById("oblicz").addEventListener("click", weather)



// function weather(e) {
//     e.preventDefault();

//     let value = document.getElementById("fwaluta").value

//     console.log(value);

// fetch("http://api.openweathermap.org/data/2.5/weather?q=Werlas&appid=ecd6ba7cde8d46460f0cdb7d0b261058")
//     .then((resp) => resp.json())
//     .then(function (data) {
//         // console.log(data.rates[0].ask * value)
//         // document.getElementById("output").innerHTML = data.rates[0].ask * value;

//         let tempCelsius = data.main.temp - 273.15;

//         console.log(data.main.temp - 273.15)

//         document.getElementById("output").innerHTML = tempCelsius;
//     })



// }



