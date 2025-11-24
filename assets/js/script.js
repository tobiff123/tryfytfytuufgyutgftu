// 'use strict';

// let btnBack = document.querySelector('button')
//  btnBack.addEventListener('click', () => {
//   window.history.back();
//  })
/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener("click", function () {
//     navbar.classList.remove("active");
//     overlay.classList.remove("active");
//   });
// }
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



// /**
//  * header
//  */

// const header = document.querySelector("[data-header]");
// const backTopBtn = document.querySelector("[data-back-top-btn]");

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 100) {
//     header.classList.add("active");
//     backTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     backTopBtn.classList.remove("active");
//   }
// });

// ====================DONATIONS=================
function emailSend() {
  Email.send({
      Host : "smtp.gmail.com",
      Username : "tobif556@gmail.com",
      Password : "MyholyGod@123",
      To : 'oamentobi@gmail.com',
      From : document.getElementById("email").value,
      Subject : "New contact form Enquiry",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}

// function emailSend() {
//   Email.send({
//       Host : "smtp.elasticemail.com",
//       Username : "tobioamen@gmail.com",
//       Password : "50A81654A4244ABA3EFD97C43389A0AFD402",
//       To : 'tobif556@gmail.com',
//       From : "tobioamen@gmail.com",
//       Subject : "This is the subject",
//       Body : "And this is the body"
//   }).then(
//     message => alert(message)
//   );
// }


// =============scroll reveal===========

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about-banner img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".hero-content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".hero-content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about-right h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about-right h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about-right p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".address h3", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".address ul li", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".expertise h3", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".team .one1", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".container .post-box", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".container2 .form-container", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".project", {
  ...scrollRevealOption,
  delay: 500,
});
