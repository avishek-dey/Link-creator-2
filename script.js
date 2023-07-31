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



