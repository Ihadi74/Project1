// Dark Mode Toggle
function synchronizeDarkMode() {
    const switchElement = document.getElementById("darkModeSwitch");
    if (switchElement.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

// Load theme preference on page load
window.onload = function() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    const switchElement = document.getElementById("darkModeSwitch");
    if (switchElement) {
        switchElement.checked = (savedTheme === "dark");
    }
};

// Responsive Navbar Menu Toggle
function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger");
    const navLinks = document.querySelector("#nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // Close menu when clicking on a menu item (for better UX)
        document.querySelectorAll("#nav-links li a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    } else {
        console.error("Navbar elements not found! Check your HTML structure.");
    }
});

function changeButtonColor(button, hoverColor, originalColor) {
    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = hoverColor;
    });

    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = originalColor;
    });
}

// Example usage:
document.addEventListener("DOMContentLoaded", function() {
    const myButton = document.getElementById("myButton");
    changeButtonColor(myButton, "lightbleu", "blue"); // Change to red on hover, revert to blue
});
