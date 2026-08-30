document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling
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


    // Navbar effect when scrolling
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    // Reveal sections while scrolling
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(section => {

        section.classList.add("hidden");
        observer.observe(section);

    });


    // Back to top button
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

});
