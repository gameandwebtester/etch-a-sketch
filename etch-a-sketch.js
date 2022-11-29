
const container = document.querySelector('#container');

let slider = document.getElementById('slider')
let output = document.getElementById("demo");


const roundValue = Math.round, rndmValue = Math.random, maxNum = 255;
const makeBlack = event => event.target.style.backgroundColor = 'black';
const makeRandomColor = event => event.target.style.backgroundColor = 'rgba(' + roundValue(rndmValue()*maxNum) + ',' + roundValue(rndmValue()*maxNum) + ',' + roundValue(rndmValue()*maxNum) + ')';

let squares = document.getElementsByClassName("squares");

let isActive = false;

output.innerHTML = slider.value;

let num = slider.value;


slider.onchange = function() {
    output.innerHTML = this.value;
    num = this.value;
    container.style.setProperty("--n", num);
    //always remove previous squares before generating new ones
    removeSquares();
    createDivs();
}

container.style.setProperty("--n", num);

function createDivs(){
    for(let i = 0; i < num * num; i++) {
        const innerDivs = document.createElement('div');
        innerDivs.className = 'squares';
        innerDivs.textContent = '';
        container.appendChild(innerDivs)[i];
    }
}

createDivs();


function removeSquares(){
    document.querySelectorAll('.squares').forEach(e => e.remove());
}

//document.getElementById("blackmode").onclick = function() {enable()};

function activate(){
    isActive = true;

    //blackSquares();
}

console.log(isActive);

function blackSquares() {

    if(isActive === true){
        console.log(isActive + ' sdsd');
        for (let i = 0; i < squares.length; i++) {  
            squares[i].addEventListener('mousedown', makeBlack);
            squares[i].addEventListener('mouseover' , event => {
                if(event.buttons == 1)makeBlack(event);
        } );
    }
}
}

// .................................experiment start

const boxes = [...document.getElementsByClassName("squares")];

const makeBlack2 = event => event.target.style.backgroundColor = "black";

function equip(box) {
    if(isActive){
        
    }
        box.addEventListener("mousedown", makeBlack2);
        box.addEventListener("mouseover", event => {
            if (event.buttons === 1 && isActive === true) makeBlack2(event);
  });
}
boxes.forEach(equip);

//................................................end


 

function randomColor(){
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mousedown', makeRandomColor);
        squares[i].addEventListener('mouseover', event => {
            if(event.buttons == 1) makeRandomColor(event);
        })
    }
}

function clearButton(){
    isActive = false;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }
}







