const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.using__ratings-counter'),
    lines=document.querySelectorAll('.using__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


const link = document.querySelectorAll('.menu__link');


link.forEach (item => {
    item.addEventListener( 'click', (i)=>{
        menu.classList.toggle('active');
    });
});


    
