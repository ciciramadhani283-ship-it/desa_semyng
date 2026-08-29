javascript
/* =====================================================
   LOADING SCREEN
===================================================== */

window.addEventListener("load", function () {

    const loading = document.getElementById("loading");

    setTimeout(function () {

        loading.classList.add("hide");

    }, 700);

});


/* =====================================================
   MENU MOBILE
===================================================== */

const tombolMenu = document.getElementById("tombolMenu");
const daftarMenu = document.getElementById("daftarMenu");

tombolMenu.addEventListener("click", function () {

    daftarMenu.classList.toggle("active");

    const icon = tombolMenu.querySelector("i");

    if (daftarMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =====================================================
   MENU OTOMATIS TERTUTUP
===================================================== */

const semuaLink = document.querySelectorAll(".nav-menu a");

semuaLink.forEach(function (link) {

    link.addEventListener("click", function () {

        daftarMenu.classList.remove("active");

        const icon = tombolMenu.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   NAVBAR SAAT SCROLL
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   ANIMASI REVEAL SAAT SCROLL
===================================================== */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* =====================================================
   ACTIVE MENU
===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   EFEK PARALLAX SEDERHANA PADA HERO
===================================================== */

window.addEventListener("scroll", function () {

    const hero = document.querySelector("#beranda");

    if (!hero) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPositionY =
            scrollPosition * 0.35 + "px";

    }

});


/* =====================================================
   EFEK HOVER KARTU
===================================================== */

const cards = document.querySelectorAll(
    ".tentang-card, .potensi-item, .kontak-kolom, .foto-kartu"
);

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.willChange = "transform";

    });

    card.addEventListener("mouseleave", function () {

        card.style.willChange = "auto";

    });

});
