// Dark Mode Toggle Functionality
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    const toggleIcon = document.querySelector('.dark-mode-toggle');
    if (document.body.classList.contains("dark-mode")) {
        toggleIcon.innerHTML = '🌞';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleIcon.innerHTML = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Set default mode based on user preferences stored in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add("dark-mode");
    document.querySelector('.dark-mode-toggle').innerHTML = '🌞';
} else {
    document.body.classList.add("light-mode");
    document.querySelector('.dark-mode-toggle').innerHTML = '🌙';
}
