// HAGO LOS EJERCICIOS CON APIS DIFERENTES A LA DEL ENUNCIADO PORQUE EN ESTOS MOMENTOS ESTÁ CAIDA


// 1. Fetch

// -----------------------------------1.1---------------------------------

// fetch("https://api.agify.io?name=michael")
//     .then((respuestaApi) => {
//         console.log(respuestaApi)
//     })


// -----------------------------------1.2---------------------------------

// const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

// const button = document.querySelector("button")
// const input = document.querySelector("input")


// button.onclick = function() {
//     fetch(baseUrl)
//         .then((respuestaDelApi) => {
//             return respuestaDelApi.json()
//         })
//         .then((respuestaEnJson) => {
//             return respuestaEnJson.results;
//         })
//         .then((resultados) => {
//             for (poke of resultados) {
//                 if (input.value.includes(poke.name)) {
//                     console.log(`${poke.name} ${poke.url}`)
//                 }
//             }
//         })
// }


// -----------------------------------1.3---------------------------------

// const baseUrl = 'https://rickandmortyapi.com/api/character/';

// const button = document.querySelector("button")
// const input = document.querySelector("input")

// button.onclick = function() {
//     fetch(baseUrl)
//         .then((respuestaDelApi) => {
//             return respuestaDelApi.json()
//         })
//         .then((respuestaEnJson) => {
//             return respuestaEnJson.results;
//         })
//         .then((resultados) => {
//             for (character of resultados) {
//                 if (input.value.includes(character.name)) {
//                     let h5 = document.createElement("h5")
//                     document.body.appendChild(h5)
//                     let h5Text = document.createTextNode(`El personaje ${character.name} es especie ${character.species} y genero ${character.gender}`)
//                     h5.appendChild(h5Text)
//                 }
//             }
//         })
// }


// -----------------------------------1.4---------------------------------

// const baseUrl = 'https://rickandmortyapi.com/api/character/';

// const button = document.querySelector("button")
// const input = document.querySelector("input")

// button.onclick = function() {
//     fetch(baseUrl)
//         .then((respuestaDelApi) => {
//             return respuestaDelApi.json()
//         })
//         .then((respuestaEnJson) => {
//             return respuestaEnJson.results;
//         })
//         .then((resultados) => {
//             for (character of resultados) {
//                 if (input.value.includes(character.name)) {
//                     let h5 = document.createElement("h5")
//                     document.body.appendChild(h5)
//                     let h5Text = document.createTextNode(`El personaje ${character.name} es especie ${character.species} y genero ${character.gender}`)
//                     h5.appendChild(h5Text)
//                     let deleteButton = document.createElement("button")
//                     let deleteButtonText = document.createTextNode("Eliminar")
//                     document.body.appendChild(deleteButton)
//                     deleteButton.appendChild(deleteButtonText)
//                     deleteButton.onclick = function() {
//                         h5Text.remove()
//                         deleteButton.remove()
//                     }
//                 }
//             }
//         })
// }