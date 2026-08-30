document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ZAHRA ATELIER — SIMPLE PREMIUM JAVASCRIPT
    ===================================================== */


    /* =====================================================
       1. SMOOTH SCROLLING
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* =====================================================
       2. NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        });

    }


    /* =====================================================
       3. ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(section => {

            const id = section.getAttribute("id");

            if (!id) return;

            const sectionTop = section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                currentSection = id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* =====================================================
       4. SCROLL REVEAL
       يظهروا واحدة واحدة أثناء النزول
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section-title, .about-content, .service-card, .manufacturing-content, .working-hours p, .social-links, .work-content, .contact-glass"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach((element, index) => {

        element.classList.add("hidden");

        element.style.transitionDelay =
            `${(index % 3) * 0.12}s`;

        observer.observe(element);

    });


    /* =====================================================
       5. BACK TO TOP ARROW
    ===================================================== */

    const backToTop = document.createElement("button");

    backToTop.innerHTML = "↑";

    backToTop.className = "back-to-top";

    backToTop.setAttribute(
        "aria-label",
        "العودة إلى الأعلى"
    );

    document.body.appendChild(backToTop);


    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("active");

        } else {

            backToTop.classList.remove("active");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       6. HERO TYPING EFFECT
    ===================================================== */

    const heroText = document.querySelector(
        ".hero > .hero-content > p:not(.small-title)"
    );

    if (heroText) {

        const messages = [
            "نصمم أناقتك...",
            "نخيط تفاصيلك...",
            "نصنع هويتك...",
            "نحوّل أفكارك إلى أزياء..."
        ];

        let messageIndex = 0;
        let characterIndex = 0;
        let deleting = false;


        function typeEffect() {

            const currentMessage =
                messages[messageIndex];


            if (!deleting) {

                heroText.textContent =
                    currentMessage.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;


                if (
                    characterIndex >=
                    currentMessage.length
                ) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);

                    return;

                }

            } else {

                heroText.textContent =
                    currentMessage.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;


                if (characterIndex <= 0) {

                    characterIndex = 0;

                    deleting = false;

                    messageIndex =
                        (messageIndex + 1) %
                        messages.length;

                }

            }


            setTimeout(
                typeEffect,
                deleting ? 55 : 90
            );

        }


        typeEffect();

    }


    /* =====================================================
       7. WELCOME
    ===================================================== */

    console.log(
        "🌸 Zahra Atelier loaded successfully"
    );

});
