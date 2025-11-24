// function scrollToElement(elementSelector, instance = 0) {
//     // Select all elements that match the given selector
//     const elements = document.querySelectorAll(elementSelector);
//     // Check if there are elements matching the selector and if the requested instance exists
//     if (elements.length > instance) {
//         // Scroll to the specified instance of the element
//         elements[instance].scrollIntoView({ behavior: 'smooth' });
//     }
// }

// const link1 = document.getElementById("link1");
// const link2 = document.getElementById("link2");
// const link3 = document.getElementById("link3");

// link1.addEventListener('click', () => {
//     scrollToElement('.header');
// });

// link2.addEventListener('click', () => {
//     // Scroll to the second element with "header" class
//     scrollToElement('.header', 1);
// });

// link3.addEventListener('click', () => {
//     scrollToElement('.column');
// });


// ------------------skilss-----------------
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let  itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'   
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

// ---------------SERVICES----------------
const modalViews = document.querySelectorAll('.services__modal'),
modalBtns = document.querySelectorAll('.services__button'),
modalCloses = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

// ----------------------PORTFOLIO SWIPER---------------------
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// ===================== TESTIMONIAL ================
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicButton: true,
    },
});

// ================== MENU SHOW Y HIDDEN ==================
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

//   ===== MENU SHOW =====
// validate if constant exists 
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


//   ===== MENU HIDDEN =====
// validate if constant exists 
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// =========== REMOVE MENU MOBILE ================
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ============= CLICK OUTSIDE ===============
// const alsoClose = document.getElementById('body')

// document.addEventListener('click', e => {
//     if(!navMenu.contains(e.target) && e.target !== navToggle) {
//         navMenu.classList.remove('show-menu')
//     }
// })

document.onClick = function(e) {
    if(!navMenu.contains(e.target)) {
        navMenu.classList.remove('show-menu')
    }
}

// ==============BACK TO TOP===============
const scrollUp = document.querySelector('.scroll__div');

window.addEventListener('scroll', () => {
    if(window,pageYOffset > 300) {
        scrollUp.classList.add('active');
    } else {
        scrollUp.classList.remove('active');
    }
})

// ============== CHANGE BACKGROUND HEADER =============
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ============== DARK LIGHT THERE ===============
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// PREVIOUSLY SELECTED TOPIC (IF USER SELECTED)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//WE OBTAIN THE CURRENT TIME THAT THE INTERFACE HAS BY VALIDATING THE DARK-THEME CLASS
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//WE VALIDATE IF THE USER PREVIOUSLY CHOSE A TOPIC
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkMode)
    themeButton.classList [selectedIcon === 'uil-moon' ? 'add' : 'remove'] (iconTheme)
}

// ACTIVATE / DEACTIVATE THE THEME MANUALLY WITH THE BUTTON
themeButton.addEventListener('click', () => {
    // ADD OR REMOVE THE DARK / ICON THEME
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toogle(iconTheme)
    // WE SAVE THE THEME AND THE CURRENT ICON THAT USER CHOSE
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Animation on scroll effect
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.section');
hiddenElements.forEach((el) => observer.observe(el));

// ==========LOGO CHANGHE========
// const toggleImage = document.getElementById('img1');
// const image1 = './images/logo_main.png'
// const image2 = './images/logo_main2.png'


// const selectedImage = localStorage.getItem('selected-image')
// const selectedImg = localStorage.getItem('selected-img')


// if(selectedImage) {
//     document.body.classList[selectedImage === 'dark' ? 'add' : 'remove'] (darkMode)
//     toggleImage.classList [selectedImg === 'uil-moon' ? 'add' : 'remove'] (iconTheme)
// }

// toggleImage.addEventListener('click', () => {

//     document.body.classList.toggle(darkTheme)
//     toggleImage.classList.toogle(iconTheme)

//     localStorage.setItem('selected-image', getCurrentImage())
//     localStorage.setItem('selected-img', getCurrentImg())
// })

// console.log("yee!!!!");
