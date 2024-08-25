// script.js
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionID = event.target.getAttribute('href').substring(1);
        const section = document.getElementById(sectionID);
        window.scrollTo({
          top: section.offsetTop - 50,
          behavior: 'smooth'
        });
      });
    });
  });
  