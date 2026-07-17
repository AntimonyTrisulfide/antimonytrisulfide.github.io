// Get all collapsible buttons and add event listeners
const collapsibles = document.querySelectorAll('.collapsible');

// Loop through each collapsible and add event listeners
collapsibles.forEach(function(collapsible) {
    collapsible.addEventListener('click', function() {
        const content = this.nextElementSibling; // Get the content div next to the button

        if (content.style.display === "block") {
            content.style.display = "none"; // Hide content if it's visible
        } else {
            content.style.display = "block"; // Show content if it's hidden
        }
    });
});

// Scroll to top functionality and sticky header shrink
window.onscroll = function() {
    const btn = document.getElementById("topbutton");
    const header = document.querySelector('header');
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    
    if (btn) {
        if (scrollTop > 20) {
            btn.style.display = "flex"; // Show button
        } else {
            btn.style.display = "none"; // Hide button
        }
    }
    
    // Shrink header on scroll
    if (header) {
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        if (themeIcon) {
            themeIcon.className = 'fas fa-moon';
        }
    }
});

// Music player functionality
function toggleMusicPlayer() {
    const musicPlayer = document.getElementById('musicPlayer');
    const musicToggle = document.querySelector('.music-toggle');
    
    if (musicPlayer.classList.contains('show')) {
        musicPlayer.classList.remove('show');
        musicToggle.classList.remove('active');
    } else {
        musicPlayer.classList.add('show');
        musicToggle.classList.add('active');
    }
}

// Close music player when clicking outside
document.addEventListener('click', function(event) {
    const musicWidget = document.querySelector('.music-widget');
    const musicPlayer = document.getElementById('musicPlayer');
    const musicToggle = document.querySelector('.music-toggle');
    
    if (musicWidget && !musicWidget.contains(event.target) && musicPlayer.classList.contains('show')) {
        musicPlayer.classList.remove('show');
        musicToggle.classList.remove('active');
    }
});
