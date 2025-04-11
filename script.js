/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
};

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id+ ']').classList.add('active');
          })
      };
  });




  let header = document.querySelector('.header');
  header.classList.toggle('sticky',  window.scrollY > 100);
  

  /*========== remove menu icon navbar when click navbar link (scroll) ==========*/

  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
};


/*========== swiper ==========*/
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween:50,
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

/*========== scroll reveal ==========*/


ScrollReveal({ 
  // reset: true,
  distance:'80px',
  duration:2000,
  delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testemonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about.content', { origin: 'right' });



event.preventDefault();
    let form = this;
    let formMessage = document.getElementById("form-message");

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            formMessage.style.display = "block";
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    }).catch(error => {
        alert("Error: " + error);
    });