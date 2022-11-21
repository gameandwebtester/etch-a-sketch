
const container = document.querySelector('#container');

let slider = document.getElementById('slider')
let output = document.getElementById("demo");
let test = document.getElementsByClassName("squares");
output.innerHTML = slider.value;

let num = slider.value;

slider.onchange = function() {
    output.innerHTML = this.value;
    num = this.value;
    container.style.setProperty("--n", num);
    removeSquares();
    createDivs();
    changeSquares();
}

function createDivs(){
    for(let i = 0; i < num * num; i++) {
        const innerDivs = document.createElement('div');
        innerDivs.className = 'squares';
        innerDivs.textContent = '';
        container.appendChild(innerDivs)[i];
        console.log(num);
    }
}

function removeSquares(){
    document.querySelectorAll('.squares').forEach(e => e.remove());
}

function changeSquares() {
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('click', function onClick() {
            test[i].style.backgroundColor = 'black';
        })
    }
}

function clearButton(){
    for (let i = 0; i < test.length; i++) {
            test[i].style.backgroundColor = 'white';
    }
}

