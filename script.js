document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed to only animate once
                // observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 2. Dynamic Background Particles (Futuristic Vibe)
    const canvas = document.getElementById('particle-canvas');
    const particleCount = 40; // Number of floating particles

    for (let i = 0; i < particleCount; i++) {
        createParticle(canvas);
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize size, position, and animation duration
        const size = Math.random() * 4 + 1; // 1px to 5px
        const posX = Math.random() * 100; // 0vw to 100vw
        const posY = Math.random() * 100; // 0vh to 100vh
        const duration = Math.random() * 20 + 10; // 10s to 30s
        const delay = Math.random() * 5;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}vw`;
        particle.style.top = `${posY}vh`;
        
        // Floating animation via web animations API
        particle.animate([
            { transform: 'translate(0, 0)', opacity: 0.1 },
            { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`, opacity: 0.5 },
            { transform: 'translate(0, 0)', opacity: 0.1 }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        });

        container.appendChild(particle);
    }
});
