const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



    burger.addEventListener('click', () => {
        
        nav.classList.toggle('nav-active');

        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade ease forwards ${index / 7 + 1}s`;
            }
        });
        
        burger.classList.toggle('toggle');
    });

}

navSlide();

window.addEventListener('load', () =>{
    const rock = document.querySelector('.rock');
    rock.classList.add('rock-finish')
});
