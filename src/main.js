import {picture} from "./components/Cards.js";
// import Cards from './components/Cards';
// console.log(Cards)
import rick from './data/rym/rick.js'
console.log(rick.items);
//document.getElementById('root').appendChild(App())

window.onload = function (){
    document.querySelector('#start').style.display = 'flex'
    document.querySelector('#instructions').style.display = 'none'
    document.querySelector('#easyLevel').style.display = 'none'
    document.querySelector('#mediumLevel').style.display = 'none'
    document.querySelector('#hardLevel').style.display = 'none'
    document.querySelector('#end').style.display = 'none'
}

let easyPage = document.querySelector(".levelEasy")
easyPage.addEventListener('click',show)
function show(){
    document.querySelector('#start').style.display = 'none'
    document.querySelector('#instructions').style.display = 'none'
    document.querySelector('#easyLevel').style.display = 'flex'
    document.querySelector('#mediumLevel').style.display = 'none'
    document.querySelector('#hardLevel').style.display = 'none'
    document.querySelector('#end').style.display = 'none'
}
let directions = document.querySelector(".help")
directions.addEventListener('click',show2)
function show2(){
    document.querySelector('#start').style.display = 'none'
    document.querySelector('#instructions').style.display = 'flex'
    document.querySelector('#easylevel').style.display = 'none'
    document.querySelector('#mediumLevel').style.display = 'none'
    document.querySelector('#hardLevel').style.display = 'none'
    document.querySelector('#end').style.display = 'none'
}
let back = document.querySelector(".backStart")
back.addEventListener('click',backhome)
function backhome(){
    document.querySelector('#start').style.display = 'flex'
    document.querySelector('#instructions').style.display = 'none'
    document.querySelector('#easyLevel').style.display = 'none'
    document.querySelector('#mediumLevel').style.display = 'none'
    document.querySelector('#hardLevel').style.display = 'none'
    document.querySelector('#end').style.display = 'none'
}
picture();

let dataRick = rick.items;
//duplicar el array de cartas para crear una pareja//
const gameGrid =dataRick.concat(dataRick);
//console.log(gameGrid);

//se declaran variables para aleatorizar cartas//
//empieza en la primera carta el ciclo//
let i = 0
//crea una posicion aleatoria a las cartas//
let j = 0
//posicion aleatoria en que aparece la carta//
let temp = null 

//algoritmo de fisher-yates para aleatorizar las cartas//
function shuffle (gameGrid) {
    for (let i = gameGrid.length - 1; i > 0; i -= 1)
    {
    j = Math.floor(Math.random() * (i + 1))
    temp = gameGrid[i]
    gameGrid[i] = gameGrid[j]
    gameGrid[j] = temp
    }
return gameGrid;    
}
//se declaran valiables del juego//
//variable para los intentos del juego//
let count = 0
//variable del primer y segundo intento//
let firstGuess = ''
let secondGuess = ''
let previousTarget = null
//variable para dar lentitud a la carta volteada//
let delay = 1500

//traer la section con un id desde html//
const easyLevel = document.getElementById('easyLevel')
//crear una section dentro de la section anterior y le damos una class//
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')
//anexar el nuevo hijo a easyLevel//
easyLevel.appendChild(grid)

//guardamos funcion shuffle en una nueva variable//
let newGrid = shuffle (gameGrid)

//se agregan las cartas con un div a la nueva section//
newGrid.forEach((item) => {
  //  console.log(item);
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = item.id
    //creando un nuevo div para ocultar las cartas//
    const front = document.createElement('div')
    front.classList.add('front')
    front.style.backgroundImage = `url(${item.image})`
    const back = document.createElement('div')
    back.classList.add('back')

    //adjuntar el div a la sección grid
    grid.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
});

    //agregar el match al CSS
    const match = () => {
        const selected = document.querySelectorAll('.selected')
        selected.forEach(card => {
            card.classList.add('match')
        })
    };
//agregar el reseteo de intentos
const resetGuesses = () => {
    count = 0
    firstGuess = ''
    secondGuess = ''

      let selected = document.querySelectorAll('.selected')
      selected.forEach((card) => {
          card.classList.remove('selected')
      })
};

//se llama a la funcion para que el usuario pueda jugar
grid.addEventListener('click', function (event) {
    let clicked = event.target
    if (clicked.noneName === 'SECTION' || clicked === previousTarget) {
        return;
    }
    if (count < 2) {
        count++
        if (count === 1){
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected')
        }
        else {
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected')
        };
    //si ambos intentos no estan vacios
        if (firstGuess !== '' && secondGuess !== ''){
            //y el primer intento coincide con el segundo
            if (firstGuess === secondGuess) {
                //se aplica la función match
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
                }
                //si no coinciden las cartas se resetea el conteo
                else {
                    setTimeout(resetGuesses, delay);
            }
        }
     //establece el intento previo como clickeado 
     previousTarget = clicked;
    }
});

