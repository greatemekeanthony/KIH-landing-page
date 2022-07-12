const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav =document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li');

// toggle menue
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

// link animate
        navLink.forEach((link,index) => {
          
            if (link.style.animation) {
                link.style.animation ='';
            } else{
                link.style.animation = `naveLinkFade 0.5s ease forwards ${index /7 +0.5}s`
            }
        })

        // burger animate
        burger.classList.toggle('toggle')
    });

}


navSlide();


window.addEventListener('scroll', function(){
    var nav =document.querySelector('nav')
    // console.log(nav);
    nav.classList.toggle('sticky', window.scrollY > 0)
})