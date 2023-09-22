let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 200,
    reset: true
});

sr.reveal('.intro-text', {delay: 200, origin: 'top'});
sr.reveal('.intro-img', {delay: 400, origin: 'top'});
sr.reveal('.icons', {delay: 450, origin: 'left'});
sr.reveal('.scroll', {delay: 400, origin: 'right'});