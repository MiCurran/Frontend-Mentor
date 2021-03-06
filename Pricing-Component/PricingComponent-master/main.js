let left = document.getElementById('left-card');
let middle = document.getElementById('middle-card');
let right = document.getElementById('right-card');

let toggle = document.getElementById('toggle')
let clicked = false;

toggle.addEventListener('click', ()=> {
    clicked = !clicked;
    if(clicked){
        left.innerHTML = '199.99';
        middle.innerHTML = '249.99';
        right.innerHTML = '399.99';
        
        
    }else{
        left.innerHTML = '19.99';
        middle.innerHTML = '24.99';
        right.innerHTML = '39.99';

    }
})