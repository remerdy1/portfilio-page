const nav = document.querySelector(".nav-container");
const learnMore = document.getElementById("learn-more");
const projects = document.getElementById("projects");

// Transparent navbar
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 50) {
        window.innerWidth > 410 && nav.classList.add("transparent");

        learnMore && learnMore.classList.add("is-visible");
    } else {
        nav.classList.remove("transparent");
        learnMore && learnMore.classList.remove("is-visible");
    };
})

// Typing effect
const typing = document.getElementById("typing");
typing.innerText = "";

let i = 0;

const typingEffect = () => {
    const text = "Hello, my name is Remy."
    const currentText = text.slice(0, ++i);

    typing.textContent = currentText;

    if (currentText.length === text.length) {
        i = 0;
    }

    currentText.length === text.length ? setTimeout(typingEffect, 5000) : setTimeout(typingEffect, 250);
}
typingEffect();

// Scroll
const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
const scrollToLearnMore = () => learnMore.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
const scrollToProjects = () => projects.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });