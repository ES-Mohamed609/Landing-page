const mainTitle = document.getElementById("main-title");
const background2 = document.getElementById("background-2");
const background3 = document.getElementById("background-3");

const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");
const card4 = document.getElementById("card-4");

document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    mainTitle.style.fontSize = `${100 + scrollY * 0.5}px`;

    background2.style.top = `-${scrollY * 0.5}px`;
    background3.style.top = `-${scrollY}px`;
    background3.style.transform = `scale(${1 + scrollY * 0.001})`;

    card1.style.transform = `translateY(${scrollY * -0.5 + 400}px)`;
    card2.style.transform = `translateY(${scrollY * 0.1 - 50}px)`;
    card3.style.transform = `translateY(${scrollY * -0.1 + 100}px)`;
    card4.style.transform = `translateY(${scrollY * 0.2 - 125}px)`;

    const newOpacity = scrollY * 0.001;
    if (newOpacity >= 0 && newOpacity <= 1) {
        card1.style.opacity = newOpacity;
        card2.style.opacity = newOpacity;
        card3.style.opacity = newOpacity;
        card4.style.opacity = newOpacity;
    }
});
const readMoreBtn = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

readMoreBtn.addEventListener("click", () => {
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        readMoreBtn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }
});