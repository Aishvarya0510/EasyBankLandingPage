const btnHamberger = document.getElementById('hamberger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadingElem = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamberger.addEventListener('click', function() {

        if(header.classList.contains('open')) {

            body.classList.remove('noscroll'); 
            header.classList.remove('open');
            overlay.style.visibility = 'hidden';
            overlay.classList.add('fade-out');
            overlay.classList.remove('fade-in');
            fadingElem.forEach(function(element) {
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });
        }
        else {
            body.classList.add('noscroll'); 
            header.classList.add('open');
            overlay.style.visibility = 'visible';
            overlay.classList.remove('fade-out');
            overlay.classList.add('fade-in');
            fadingElem.forEach(function(element) {
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });
        }
});