// script.js

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.replace('bg-brand-dark/80', 'bg-brand-dark/95');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.replace('bg-brand-dark/95', 'bg-brand-dark/80');
    }
});

console.log("Portfolio loaded.");
