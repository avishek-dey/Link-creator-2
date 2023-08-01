function animateTabsOnScroll() {
    const tabGroup = document.getElementById('tabGroup');
    const tabs = tabGroup.querySelectorAll('.tab');

    function showTab(tab) {
        tab.style.opacity = '1';
        tab.style.transform = 'translateY(0)';
    }

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        tabs.forEach((tab) => {
            if (isElementInViewport(tab)) {
                showTab(tab);
            }
        });
    }

    // Initial check when the page loads
    handleScroll();

    // Check when the user scrolls
    window.addEventListener('scroll', handleScroll);
}

// Run the animation when the page is fully loaded
window.addEventListener('load', animateTabsOnScroll);



// Smooth scrolling function with friction
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Adjust the duration of the scroll

    const startTime = performance.now();

    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= duration) {
            window.scrollTo(0, targetPosition);
            return;
        }

        const normalizedTime = elapsedTime / duration;
        const easedTime = easeOutCubic(normalizedTime);
        const scrollDistance = distance * easedTime;
        const currentPosition = startPosition + scrollDistance;

        window.scrollTo(0, currentPosition);
        requestAnimationFrame(scrollAnimation);
    }

    function easeOutCubic(t) {
        // Easing function (cubic easing out)
        t--;
        return t * t * t + 1;
    }

    requestAnimationFrame(scrollAnimation);
}

// Smooth scroll when a link is clicked
document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const targetId = target.getAttribute('href');
        smoothScroll(targetId);
    }
});
