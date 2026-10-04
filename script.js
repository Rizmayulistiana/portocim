function toggleMenu() {

    const nav = document.querySelector("nav");

    nav.classList.toggle("active");

}


// Tutup menu ketika link diklik

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector("nav").classList.remove("active");

    });

});
