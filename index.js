let buttonName  = document.querySelector('#name-button')
// let buttonMass  = document.querySelector('#planet-button')
// let buttonStar  = document.querySelector('#star-button')
// let people      = document.querySelector('#name')
// let planet      = document.querySelector('#planet')
// let star        = document.querySelector('#star')

// API in global variable
let apiURL1 = 'https://swapi.co/api/people/1' // people api to get 
// let apiURL2 = 'https://swapi.co/api/starships/9' // planet api to get
// let apiURL3 = 'https://swapi.co/api/planets/3' // star api to get

buttonName.addEventListener ('click', getName)
// buttonMass.addEventListener ('click', getPlanet)
// buttonStar.addEventListener('click', getPlanet)

function updateName(data) {
    people.innerText = data.name 
}

// function updatePlanet (data) {
//     planet.innerText = data.name
// }

// function updateStarship (data) {

// }

function getName() {
    axios.get(apiURL1).then(function (response){
        updateName(response.data)
    })
}

// function getPlanet() {
//     axios.get(apiURL2).then(function (response){
//         updateMass(response.data)
//     })
// }

// function getStarship() {
//     axios.get(apiURL3).then(function (response){
//         updateStarship(response.terrain)
//     })
// }