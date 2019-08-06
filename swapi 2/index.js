let URL1    = ('https://swapi.co/api/planets/3')
let URL2    = ('https://swapi.co/api/starships/9')
let URL3    = ('https://swapi.co/api/people/1')






let buttonPlanet    = document.querySelector('#planet');
let planet          = document.querySelector('#result_planet');
buttonPlanet.addEventListener('click', getPlanet())

function updatePlanet(data) {
    planet.innerText = data.population
}

function getPlanet() {
    axios.get(URL1).then(function (response) {
        updatePlanet(response.data)
    })
}






let buttonStar      = document.querySelector('#starship')
let starships       = document.querySelector('#result_starship')
buttonStar.addEventListener('click', getStar())

function updateStar(data) {
    starships.innerText = data.length
}

function getStar() {
    axios.get(URL2).then(function (response) {
        updateStar(response.data)
    })
}



let buttonName      = document.querySelector('#name')
let name            = document.querySelector('#result_name')
buttonName.addEventListener('click',getName())

function updateName (data) {
    name.innerText = data.gender
}

function getName() {
    axios.get(URL3).then(function (response) {
        updateName(response.data)
    })
}