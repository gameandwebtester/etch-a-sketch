
const container = document.querySelector('#container');

const num = 16;


function createDivs(){
    for(let i = 0; i < num; i++) {
        const innerDivs = document.createElement('div');
        innerDivs.textContent = 'this is a test';
        container.appendChild(innerDivs)[i];
    }
}

createDivs();