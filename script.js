// ANIMASI MUNCUL SAAT SCROLL
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// SMOOTH SCROLL NAVBAR
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// NAVBAR BERUBAH SAAT SCROLL
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0,0,0,1)';
    navbar.style.boxShadow = '0 2px 20px rgba(0,212,255,0.2)';
  } else {
    navbar.style.background = 'rgba(0,0,0,0.9)';
    navbar.style.boxShadow = 'none';
  }
});

// TYPING EFFECT
document.addEventListener('DOMContentLoaded', function() {
  const text = "Saya Seorang Teknik Informatika Web Developer";
  const typingEl = document.querySelector('.home-content p');
  let i = 0;
  typingEl.textContent = '';

  function typing() {
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }

  typing();
});

// TYPING EFFECT ABOUT ME
const textAbout = "Saya Hafiz, saya Seorang Teknik Informatika. Perjalanan saya di dunia digital dimulai sejak SMK jurusan TKJ. Saya tertarik di bidang Front-End Development dan suka membangun tampilan website yang menarik. Saat ini saya terus belajar dan berkembang untuk menjadi Web Developer profesional.";
const typingAbout = document.querySelector('.about p');
let j = 0;
typingAbout.textContent = '';

function typingAboutMe() {
  if (j < textAbout.length) {
    typingAbout.textContent += textAbout.charAt(j);
    j++;
    setTimeout(typingAboutMe, 30);
  }
}

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      j = 0;
      typingAbout.textContent = '';
      typingAboutMe();
      aboutObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

aboutObserver.observe(document.querySelector('.about'));

// PARTICLES EFFECT
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: '#00d4ff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#00d4ff',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      random: false,
      out_mode: 'out'
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' }
    }
  }
});

// SCROLL PROGRESS BAR
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
});

