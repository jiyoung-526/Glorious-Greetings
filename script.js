let currentSection = 1;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > scrollState && currentSection < 3) {
        // 스크롤 내릴 때
        document.getElementById("text" + currentSection).style.display = "none";
        currentSection++;
        document.getElementById("text" + currentSection).style.display = "block";
    } else if (currentScroll < scrollState && currentSection > 1) {
        // 스크롤 올릴 때
        document.getElementById("text" + currentSection).style.display = "none";
        currentSection--;
        document.getElementById("text" + currentSection).style.display = "block";
    }
    scrollState = currentScroll;
});