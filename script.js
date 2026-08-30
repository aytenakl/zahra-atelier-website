```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ZAHRA ATELIER — PREMIUM JAVASCRIPT
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

            navbar.classList.toggle(
                "scrolled",
                window.scrollY > 50
            );

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

            const sectionTop =
                section.offsetTop - 180;

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

    window.addEventListener(
        "scroll",
        updateActiveLink
    );

    updateActiveLink();


    /* =====================================================
       4. SCROLL PROGRESS BAR
    ===================================================== */

    const progressBar =
        document.createElement("div");

    progressBar.className =
        "scroll-progress";

    document.body.appendChild(
        progressBar
    );


    function updateProgress() {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        if (documentHeight <= 0) return;

        const percentage =
            (scrollTop / documentHeight) * 100;

        progressBar.style.width =
            `${percentage}%`;

    }

    window.addEventListener(
        "scroll",
        updateProgress
    );


    /* =====================================================
       5. SCROLL REVEAL
       يظهروا واحدة واحدة أثناء النزول
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-title, .about-content, .service-card, .manufacturing-content, .work-content, .contact-glass, .working-hours p, .social-links, footer"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach((element, index) => {

        element.classList.add("hidden");

        /*
           تأخير بسيط يجعل العناصر
           تظهر بشكل متتابع
        */

        element.style.transitionDelay =
            `${(index % 4) * 0.12}s`;

        revealObserver.observe(
            element
        );

    });


    /* =====================================================
       6. BACK TO TOP ARROW
    ===================================================== */

    const backToTop =
        document.createElement("button");

    backToTop.innerHTML = "↑";

    backToTop.className =
        "back-to-top";

    backToTop.setAttribute(
        "aria-label",
        "العودة إلى الأعلى"
    );

    document.body.appendChild(
        backToTop
    );


    window.addEventListener("scroll", () => {

        backToTop.classList.toggle(
            "active",
            window.scrollY > 400
        );

    });


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       7. HERO TYPING EFFECT
    ===================================================== */

    const heroText =
        document.querySelector(".hero > .hero-content > p:not(.small-title)");


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

                    setTimeout(
                        typeEffect,
                        1800
                    );

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
       8. SERVICE CARD 3D EFFECT
       على الكمبيوتر فقط
    ===================================================== */

    if (window.innerWidth > 768) {

        const cards =
            document.querySelectorAll(
                ".service-card"
            );


        cards.forEach(card => {

            card.addEventListener(
                "mousemove",
                (e) => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        e.clientX - rect.left;

                    const y =
                        e.clientY - rect.top;


                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        ((y - centerY) /
                            centerY) * -3;

                    const rotateY =
                        ((x - centerX) /
                            centerX) * 3;


                    card.style.transform =
                        `perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-8px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

    }


    /* =====================================================
       9. BUTTON RIPPLE EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn, .luxury-btn, .social-links a"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function (e) {

                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.className =
                    "ripple";


                const rect =
                    this.getBoundingClientRect();


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;


                ripple.style.left =
                    `${e.clientX -
                    rect.left -
                    size / 2}px`;

                ripple.style.top =
                    `${e.clientY -
                    rect.top -
                    size / 2}px`;


                this.appendChild(
                    ripple
                );


                setTimeout(() => {

                    ripple.remove();

                }, 600);

            }
        );

    });


    /* =====================================================
       10. MAGNETIC BUTTONS
       على الكمبيوتر فقط
    ===================================================== */

    if (window.innerWidth > 768) {

        const magneticButtons =
            document.querySelectorAll(
                ".primary, .luxury-btn"
            );


        magneticButtons.forEach(button => {

            button.addEventListener(
                "mousemove",
                (e) => {

                    const rect =
                        button.getBoundingClientRect();


                    const x =
                        e.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        e.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        `translate(
                            ${x * 0.08}px,
                            ${y * 0.08}px
                        )`;

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "";

                }
            );

        });

    }


    /* =====================================================
       11. PAGE LOADED
    ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );


    /* =====================================================
       12. WELCOME MESSAGE
    ===================================================== */

    console.log(
        "🌸 Zahra Atelier"
    );

    console.log(
        "✨ Premium experience loaded successfully"
    );

});
```
