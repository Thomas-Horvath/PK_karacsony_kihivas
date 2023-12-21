


/*  gallery swiper script  */
const gallery = new Swiper(".gallery_slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: true,
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    pagination: {
        el: ".gallery_slider-pagination",
        clickable: true,
    },

});


/* Button submit event */
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Gombra kattintva, de az oldal nem töltődik újra!");
});




/*  hamburger menu */

const closeBtn = document.querySelector(".close");
const hamburgerBtn = document.querySelector('.nav_hamburger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-item');


[hamburgerBtn, closeBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("transition");
        menu.style.transition = "transform 0.4s ease";
    });
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("transition");
    });
});
menu.addEventListener("transitionend", function () {
    this.removeAttribute("style");
});




/* menu links scroll active */
const artickles = document.querySelectorAll("article");
const navLinks = document.querySelector('.menu-item a');

window.addEventListener('scroll', () => {
    const top = window.scrollY + 100; // Az eltérés miatt hozzáadunk 150 pixelt

    artickles.forEach(artickle => {
        const id = artickle.getAttribute("id");

        const link = document.querySelector(`.menu-item a[href="#${id}"]`);



        if (artickle.offsetTop <= top && artickle.offsetTop + artickle.offsetHeight > top) {
            // Ha a szakasz fent látható, hozzáadjuk az "active" osztályt a hozzátartozó linkhez
            link.classList.add('active');
        } else {
            // Ellenkező esetben eltávolítjuk az "active" osztályt a linkről
            link.classList.remove('active');
        }
    });
});

