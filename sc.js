// 1. Get the current year for the footer
const currentYear = new Date().getFullYear();
document.querySelector('#current-year').textContent = currentYear;

// 2. Toggle the mobile navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.navbar ul');
menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});

// 3. Close the mobile navigation menu when a link is clicked
document.querySelectorAll('.navbar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('show');
  });
});

// 4. Highlight the active section in the navigation menu
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar ul li a');

function highlightActiveSection() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightActiveSection);

// 5. Lazy load images for better performance
const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {
      img.removeAttribute('data-src');
    };
  });
};

window.addEventListener('DOMContentLoaded', lazyLoadImages);

// 6. Smooth scroll to top button
const scrollToTopButton = document.querySelector('.scroll-to-top');

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

scrollToTopButton.addEventListener('click', scrollToTop);

// 7. Sticky navigation on scroll
const navbar = document.querySelector('.navbar');

function handleStickyNavigation() {
  if (window.pageYOffset > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

window.addEventListener('scroll', handleStickyNavigation);

// 8. Show scroll-to-top button when scrolling
function toggleScrollToTopButton() {
  if (window.pageYOffset > 500) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
}

window.addEventListener('scroll', toggleScrollToTopButton);

// 9. Intersection Observer for revealing elements on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null,
  threshold: 0.3
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});

// 10. Slideshow for product images
const slideshowContainer = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function showSlide(index) {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[index].style.display = 'block';
}

function changeSlide(direction) {
  slideIndex += direction;
  if (slideIndex >= slides.length) {
    slide
