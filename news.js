document.addEventListener("DOMContentLoaded", function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Responsive Navbar
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("show-menu");
    });

    // Search Bar Functionality
    document.getElementById("search-bar").addEventListener("keyup", function() {
        let searchQuery = this.value.toLowerCase();
        let newsCards = document.querySelectorAll(".news-card");

        newsCards.forEach(card => {
            let title = card.querySelector("h3").textContent.toLowerCase();
            card.style.display = title.includes(searchQuery) ? "block" : "none";
        });
    });

    // Load News Articles
    loadNews();

    // Clickable News Cards (Open Modal)
    document.addEventListener("click", function(event) {
        if (event.target.closest(".news-card")) {
            let card = event.target.closest(".news-card");
            document.getElementById("modal-title").textContent = card.querySelector("h3").textContent;
            document.getElementById("modal-image").src = card.querySelector("img").src;
            document.getElementById("modal-content").textContent = card.querySelector("p").textContent;
            document.getElementById("news-modal").style.display = "flex";
        }
    });

    // Close Modal
    document.querySelector(".close-modal").addEventListener("click", function() {
        document.getElementById("news-modal").style.display = "none";
    });
});
async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5836472706453394"
     crossorigin="anonymous";>
