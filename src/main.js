import {picture} from "./components/Cards.js";
/*import Cards from './components/Cards';
/console.log(Cards)
import rick from './data/rym/rick.js'
console.log(rick.items);*/
//document.getElementById('root').appendChild(App());//

window.onload = function (){
    document.querySelector('#start').style.display = 'block'
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
    document.querySelector('#easylevel').style.display = 'block'
    document.querySelector('#mediumLevel').style.display = 'none'
    document.querySelector('#hardLevel').style.display = 'none'
    document.querySelector('#end').style.display = 'none'
}
let directions = document.querySelector(".help")
directions.addEventListener('click',show2)
function show2(){
    document.querySelector('#start').style.display = 'none'
    document.querySelector('#instructions').style.display = 'block'
    document.querySelector('#easylevel').style.display = 'none'
    document.querySelector('#mediumLevel').style.display = 'none'
    document.querySelector('#hardLevel').style.display = 'none'
    document.querySelector('#end').style.display = 'none'
}
let back = document.querySelector(".backStart")
back.addEventListener('click',backhome)
function backhome(){
    document.querySelector('#start').style.display = 'block'
    document.querySelector('#instructions').style.display = 'none'
    document.querySelector('#easyLevel').style.display = 'none'
    document.querySelector('#mediumLevel').style.display = 'none'
    document.querySelector('#hardLevel').style.display = 'none'
    document.querySelector('#end').style.display = 'none'
}
picture();