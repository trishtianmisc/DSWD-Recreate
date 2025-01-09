document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            navbar.classList.add("hidden");
        } else {
            // Scrolling up
            navbar.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });
});



document.addEventListener("DOMContentLoaded", () => {
    // Select all elements you want to animate
    const scaleFadeElements = document.querySelectorAll('.scale-fade');

    // Function to handle scroll and visibility checks
    const handleScroll = () => {
        scaleFadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();

            // Add or remove the 'show' class based on position in the viewport
            if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    };

    // Trigger handleScroll on scroll
    window.addEventListener('scroll', handleScroll);

    // Trigger handleScroll once on load to check elements already in view
    handleScroll();
});

document.addEventListener("DOMContentLoaded", () => {
    // Select all elements you want to animate
    const scaleFadeElements = document.querySelectorAll('.allnews');

    // Function to handle scroll and visibility checks
    const handleScroll = () => {
        scaleFadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();

            // Add or remove the 'show' class based on position in the viewport
            if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    };

    // Trigger handleScroll on scroll
    window.addEventListener('scroll', handleScroll);

    // Trigger handleScroll once on load to check elements already in view
    handleScroll();
});


function showNews(newsId) {
    // Hide all news-content sections
    const allNews = document.querySelectorAll('.first-news');
    const scaleFadeElements = document.querySelectorAll('.allnews');
    
    allNews.forEach(news => {
        news.classList.remove('active'); // Remove the active class to hide the section
        scaleFadeElements.forEach(element => {
            element.classList.remove('show');  // Ensure to remove the scale fade effect
        });
    });

    // Remove the 'show' class from all scale fade elements
   

    // Show the selected news-content section
    const activeNews = document.getElementById(newsId);
    activeNews.classList.add('active');  // Add the active class to show the selected news

    scaleFadeElements.forEach(element => {
        element.classList.add('show');  // Ensure to remove the scale fade effect
    });
}

