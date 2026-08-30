```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ZAHRA ATELIER — PREMIUM EXPERIENCE
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

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                const id = section.getAttribute("id");

                if (id) {
                    currentSection = id;
                }

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                currentSection &&
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
       4. SCROLL PROGRESS
    ===================================================== */

    const progressBar =
        document.createElement("div");

    progressBar.className =
        "scroll-progress";

    document.body.appendChild(
        progressBar
    );


    window.addEventListener("scroll", () => {

        const scrollTop =
            window.scrollY;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            scrollHeight > 0
                ? (scrollTop / scrollHeight) * 100
                : 0;

        progressBar.style.width =
            `${progress}%`;

    });


    /* =====================================================
       5. BACK TO TOP
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
       6. HERO TEXT EFFECT
    ===================================================== */

    const heroText =
        document.querySelector(".hero-content > p:not(.small-title)");


    if (heroText) {

        const messages = [
            "نصنع لكِ إطلالتكِ كما تحلمين بها",
            "نحوّل أفكاركِ إلى أزياء",
            "تفاصيلكِ تصنع الفرق",
            "أناقتكِ تبدأ من زَهرة"
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
       7. SERVICE CARD 3D EFFECT
    ===================================================== */

    const cards =
        document.querySelectorAll(
            ".service-card"
        );


    if (window.innerWidth > 768) {

        cards.forEach(card => {

            card.addEventListener(
                "mousemove",
                e => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        e.clientX - rect.left;

                    const y =
                        e.clientY - rect.top;


                    const rotateX =
                        ((y - rect.height / 2) /
                        (rect.height / 2)) * -3;


                    const rotateY =
                        ((x - rect.width / 2) /
                        (rect.width / 2)) * 3;


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

                    card.style.transform = "";

                }
            );

        });

    }


    /* =====================================================
       8. BUTTON RIPPLE
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
                    document.createElement("span");

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


                setTimeout(
                    () => ripple.remove(),
                    600
                );

            }
        );

    });


    /* =====================================================
       9. CURSOR GLOW
    ===================================================== */

    if (window.innerWidth > 768) {

        const cursorGlow =
            document.createElement("div");

        cursorGlow.className =
            "cursor-glow";

        document.body.appendChild(
            cursorGlow
        );


        document.addEventListener(
            "mousemove",
            e => {

                cursorGlow.style.left =
                    `${e.clientX}px`;

                cursorGlow.style.top =
                    `${e.clientY}px`;

            }
        );

    }


    /* =====================================================
       10. MAGNETIC BUTTONS
    ===================================================== */

    if (window.innerWidth > 768) {

        const magneticElements =
            document.querySelectorAll(
                ".primary, .luxury-btn"
            );


        magneticElements.forEach(element => {

            element.addEventListener(
                "mousemove",
                e => {

                    const rect =
                        element.getBoundingClientRect();


                    const x =
                        e.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        e.clientY -
                        rect.top -
                        rect.height / 2;


                    element.style.transform =
                        `translate(
                            ${x * 0.12}px,
                            ${y * 0.12}px
                        )`;

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    element.style.transform = "";

                }
            );

        });

    }


    /* =====================================================
       11. PAGE ENTRANCE
    ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );


    /* =====================================================
       12. PREMIUM CONSOLE
    ===================================================== */

    console.log(
        "🌸 Zahra Atelier Premium Experience Loaded"
    );

});
```
