
const container = document.querySelector('#container');

let slider = document.getElementById('slider')
let output = document.getElementById("demo");
output.innerHTML = slider.value;

let num = slider.value;

slider.onchange = function() {
    output.innerHTML = this.value;
}

console.log(num);

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

let test = document.getElementsByClassName("squares");

function changeSquares() {
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('click', function onClick() {
            test[i].style.backgroundColor = 'black';
        })
    }
}

changeSquares();

function clearButton(){
    for (let i = 0; i < test.length; i++) {
            test[i].style.backgroundColor = 'white';
    }
}

