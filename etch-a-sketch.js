
const container = document.querySelector('#container');

let slider = document.getElementById('slider')
let output = document.getElementById("demo");


const roundValue = Math.round, rndmValue = Math.random, maxNum = 255;
const makeBlack = event => event.target.style.backgroundColor = 'black';
const makeRandomColor = event => event.target.style.backgroundColor = 'rgba(' + roundValue(rndmValue()*maxNum) + ',' + roundValue(rndmValue()*maxNum) + ',' + roundValue(rndmValue()*maxNum) + ')';

let squares = document.getElementsByClassName("squares");

let isActive = false;

output.innerHTML = slider.value + ' x ' + slider.value;

let num = slider.value;


slider.onchange = function() {
    output.innerHTML = this.value + ' x ' + this.value;
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

function activateBlack(){
    isActive = true;
    //boxes.forEach(equip);
    console.log('black mode');
    blackSquares();
}

function activateRandom(){
    isActive = true;
    //boxes.forEach(equip);
    console.log('black mode');
    randomColor();
}

console.log(isActive);

function blackSquares() {

    if(isActive === true){
        console.log(isActive + ' sdsd');
        for (let i = 0; i < squares.length; i++) {  
            squares[i].addEventListener('mousedown', event => {
                if(event.buttons === 1 && isActive === true) makeBlack(event);
            });
            squares[i].addEventListener('mouseover' , event => {
                if(event.buttons == 1 && isActive === true)makeBlack(event);
        } );
    }
}
}

// .................................experiment start

const boxes = [...document.getElementsByClassName("squares")];

const makeBlack2 = event => event.target.style.backgroundColor = "black";

function equip(box) {

        box.addEventListener("mousedown", event => {
            if(event.buttons === 1 && isActive === true) makeBlack(event);
        });
        box.addEventListener("mouseover", event => {
            if (event.buttons === 1 && isActive === true) makeBlack2(event);
  });
}

//................................................end

function randomColor(){
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mousedown', event => {
            if(event.buttons === 1 && isActive === true) makeRandomColor(event);
        });
        squares[i].addEventListener('mouseover', event => {
            if(event.buttons == 1 && isActive === true) makeRandomColor(event);
        })
    }
}

function clearButton(){
    isActive = false;
    console.log(isActive);
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }
}







