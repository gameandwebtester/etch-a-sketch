
const container = document.querySelector('#container');

let slider = document.getElementById('slider')
let output = document.getElementById("demo");
let test = document.getElementsByClassName("squares");
output.innerHTML = slider.value;

let isEnabled = false;

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

function changeSquares() {
    if(isEnabled == true){
        for (let i = 0; i < test.length; i++) {
            test[i].addEventListener('mouseover', function onClick() {
                test[i].style.backgroundColor = 'black'
            });
        }
    }
}

function randomColor(){

    const roundValue = Math.round, rndmValue = Math.random, maxNum = 255;

    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('mouseover', function onClick() {
            test[i].style.backgroundColor = 'rgba(' + roundValue(rndmValue()*maxNum) + ',' + roundValue(rndmValue()*maxNum) + ',' + roundValue(rndmValue()*maxNum) + ')';
        });
    }
}

function enableThings(){
    isEnabled = true;
    changeSquares();
}


function clearButton(){
    isEnabled = false;
    for (let i = 0; i < test.length; i++) {
            test[i].style.backgroundColor = 'white';
    }
}



