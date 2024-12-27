document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Detectar clic fuera del menú
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const arrow = header.querySelector('.accordion-arrow');
            
            // Toggle current accordion
            content.classList.toggle('active');
            arrow.classList.toggle('active');
            
            // Optional: Close other accordions
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherContent = otherHeader.nextElementSibling;
                    const otherArrow = otherHeader.querySelector('.accordion-arrow');
                    otherContent.classList.remove('active');
                    otherArrow.classList.remove('active');
                }
            });
        });
    });

    // Add paw print effect on mouse move
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.98) { // Occasional paw print
            createPawPrint(e.clientX, e.clientY);
        }
    });

    function createPawPrint(x, y) {
        const paw = document.createElement('div');
        paw.className = 'paw-print';
        paw.style.left = `${x}px`;
        paw.style.top = `${y}px`;
        document.body.appendChild(paw);

        setTimeout(() => {
            paw.remove();
        }, 2000);
    }

    // Add hover sound effect to cards
    const cards = document.querySelectorAll('.card');
    const bark = new Audio('sounds/small-bark.mp3');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            bark.volume = 0.2;
            bark.play();
        });
    });
});
