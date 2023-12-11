document.addEventListener("DOMContentLoaded", function () {
    // Animation for paragraphs inside the sections
    gsap.from("section p", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power2.inOut",
    });

    // Animation for divs inside the sections
    gsap.from("section div", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.3,
        ease: "power2.inOut",
    });
});
