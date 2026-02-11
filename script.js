// ═══════════════════════════════════════════════════════════
// TerraConnect Website JavaScript
// Interactive functionality and animations
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // SMOOTH SCROLL FOR NAVIGATION LINKS (Native Browser)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Smooth scrolling is handled by CSS: html { scroll-behavior: smooth; }

    // Just close mobile menu when clicking navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close mobile menu if open
            const navLinksMenu = document.getElementById('navLinks');
            if (navLinksMenu && navLinksMenu.classList.contains('active')) {
                navLinksMenu.classList.remove('active');
            }
        });
    });

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MOBILE MENU TOGGLE
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinksMenu = document.getElementById('navLinks');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinksMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navLinksMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-scroll class
    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    fadeElements.forEach(el => observer.observe(el));

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // LANGUAGE TOGGLE FUNCTIONALITY
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    let currentLang = 'en';
    const langToggle = document.getElementById('langToggle');

    // Initialize with English content on page load
    function setLanguage(lang) {
        document.querySelectorAll('[data-lang-fr]').forEach(element => {
            const frText = element.getAttribute('data-lang-fr');
            const enText = element.getAttribute('data-lang-en');

            if (lang === 'fr') {
                element.textContent = frText;
            } else {
                element.textContent = enText;
            }
        });
        document.documentElement.lang = lang;
    }

    // Set English as default on page load
    setLanguage('en');

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            langToggle.textContent = currentLang === 'fr' ? 'EN' : 'FR';
            setLanguage(currentLang);
        });
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // NAVBAR SCROLL EFFECT
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // DOWNLOAD PRESENTATION HANDLER
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const downloadBtn = document.getElementById('downloadPresentation');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();

            // Create a simple PDF-like content alert
            // In production, this would link to an actual PDF file
            alert(currentLang === 'fr'
                ? 'La présentation sera bientôt disponible. Pour plus d\'informations, contactez-nous à contact@terraconnect.ai'
                : 'The presentation will be available soon. For more information, contact us at contact@terraconnect.ai'
            );

            // Uncomment when PDF is ready:
            // window.open('presentation.pdf', '_blank');
        });
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TEAM CARD INTERACTIONS
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const teamCards = document.querySelectorAll('.team-card');

    teamCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // STATISTICS COUNTER ANIMATION (on scroll into view)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimatedStats = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimatedStats) {
                hasAnimatedStats = true;
                // Simple pulse animation for stats
                statNumbers.forEach((stat, index) => {
                    setTimeout(() => {
                        stat.style.animation = 'pulse 0.5s ease';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.5 });

    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
        statsObserver.observe(statsGrid);
    }

    // Add pulse animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // CONSOLE MESSAGE FOR DEVELOPERS
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    console.log('%c🌍 TerraConnect', 'font-size: 24px; font-weight: bold; color: #0066FF;');
    console.log('%cIntelligence Géospatiale Accessible', 'font-size: 14px; color: #00C853;');
    console.log('%cInterested in joining our mission? Contact us at contact@terraconnect.ai', 'font-size: 12px; color: #546E7A;');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // INITIALIZE ALL ANIMATIONS ON PAGE LOAD
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    console.log('✅ TerraConnect website initialized successfully');
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONTACT FORM HANDLER (if you add a form later)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function handleContactForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log('Contact form submitted:', data);

    // In production, send to backend or email service
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    event.target.reset();
}

// jQuery form submission to prevent redirect
$(document).ready(function() {
    $('.contact-form').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        var form = $(this);

        // Trigger native HTML5 validation
        if (!form[0].checkValidity()) {
            form[0].reportValidity();
            return;
        }

        var url = form.attr('action');

        // Build data manually, excluding Formspree special _fields
        var formData = {
            name: form.find('#name').val(),
            email: form.find('#email').val(),
            subject: form.find('#subject').val(),
            message: form.find('#message').val()
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(function(response) {
            if (response.ok) {
                showPopup('success', 'Merci pour votre message ! Nous vous contacterons bientôt.');
                form[0].reset();
            } else {
                return response.json().then(function(data) {
                    showPopup('error', 'Erreur : ' + (data.error || 'Veuillez réessayer.'));
                });
            }
        })
        .catch(function(error) {
            showPopup('error', 'Une erreur réseau s\'est produite. Veuillez réessayer.');
        });
    });
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CUSTOM POPUP MODAL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function showPopup(type, message) {
    var modal = document.getElementById('popupModal');
    var icon = document.getElementById('popupIcon');
    var msg = document.getElementById('popupMessage');

    icon.textContent = type === 'success' ? '✅' : '❌';
    msg.textContent = message;
    modal.classList.add('active');
}

$(document).ready(function() {
    $('#popupClose, #popupModal').on('click', function(e) {
        if (e.target === this) {
            $('#popupModal').removeClass('active');
        }
    });
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { handleContactForm };
}
