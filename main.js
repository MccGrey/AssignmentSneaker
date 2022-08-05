// IMAGES SELECTOR
let BigImg = document.querySelector('.big-img img')
function showImg(pic){
    BigImg.src = pic;
}

const minus = document.querySelector('.minus');
const number = document.querySelector('.number');
const plus = document.querySelector('.plus');

let count = 0;


//  COUNTER
plus.addEventListener('click', function(){
    count++;
    number.innerHTML = count
})

minus.addEventListener('click', function(){
    if(count > 0){
        count--;
        number.innerHTML = count;
    } else{
        number.innerHTML = 0;
        
    }
})

// TOGGLE NAVBAR FOR SMALLER DEVICE

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');
//function for open nav bar
const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav)

//function for close nav bar
const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav)