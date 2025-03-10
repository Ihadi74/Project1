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
