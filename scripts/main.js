// scripts/main.js

// --- Theme Toggle Functionality ---
function initThemeToggle() {
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    // Apply initial theme
    if (initialTheme === 'light') {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
    } else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
    }
    
    // Toggle theme function
    function toggleTheme() {
        const isLight = htmlElement.classList.contains('light');
        
        if (isLight) {
            htmlElement.classList.remove('light');
            htmlElement.classList.add('dark');
            try {
                localStorage.setItem('theme', 'dark');
            } catch (e) {
                console.warn('Unable to save theme preference to localStorage');
            }
        } else {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            try {
                localStorage.setItem('theme', 'light');
            } catch (e) {
                console.warn('Unable to save theme preference to localStorage');
            }
        }
    }
    
    // Add event listeners to both toggle buttons
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
}

// --- Smooth Scrolling ---
function initSmoothScrolling() {
    // Handle clicks on navbar links and hero content links
    // Exclude theme toggle mobile button from smooth scrolling
    document.querySelectorAll('#navbarNav a:not(.theme-toggle-mobile), .hero-content a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Adjust for fixed navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
}

// --- Scroll Animation for Elements ---
function initScrollAnimations() {
    const faders = document.querySelectorAll('.fade-in-up');

    if (faders.length > 0) {
        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('appear');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of the element is visible
            rootMargin: "0px 0px -50px 0px" // Trigger 50px before element enters viewport
        });

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }
}

// --- Document Ready ---
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        // Small delay to ensure DOM is fully ready
        setTimeout(() => {
            initThemeToggle();
            initSmoothScrolling();
            initScrollAnimations();
        }, 100);
    });
} else {
    // Document is already ready
    setTimeout(() => {
        initThemeToggle();
        initSmoothScrolling();
        initScrollAnimations();
    }, 100);
}