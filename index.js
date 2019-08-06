// API in global variable
let apiURL1 = 'https://swapi.co/api/people/1' // people api to get 
let apiURL2 = 'https://swapi.co/api/planets/3' // star api to get
let apiURL3 = 'https://swapi.co/api/starships/9' // planet api to get



// API Name
let buttonName  = document.querySelector('#name-button')
let people      = document.querySelector('#name')
buttonName.addEventListener ('click', getName)

function updateName(data) {
    people.innerText = data.name 
}

function getName() {
    axios.get(apiURL1).then(function (response){
        updateName(response.data)
    })
}






let buttonPlanet    = document.querySelector('#planet-button')
let planet          = document.querySelector('#planet')
buttonPlanet.addEventListener ('click', getPlanet)


function updatePlanet (data) {
    planet.innerText = data.rotation_period
}

function getPlanet() {
    axios.get(apiURL2).then(function (response){
        updatePlanet(response.data)
    })
}



let buttonStar  = document.querySelector('#star-button')
let star        = document.querySelector('#star')
buttonStar.addEventListener('click', getStarship)


function updateStarship (data) {
    star.innerText = data.consumables
}
function getStarship() {
    axios.get(apiURL3).then(function (response){
        updateStarship(response.data)
    })
}

