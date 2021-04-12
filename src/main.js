import Cards from './components/Cards';
console.log(Cards)
import rick from './data/rym/rick.js'
console.log(rick.items);
//document.getElementById('root').appendChild(App());//

window.onload = function (){
    document.querySelector('#start').style.display = 'block'
    document.querySelector('#instructions').style.display = 'none'
    document.querySelector('#easylevel').style.display = 'none'
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
