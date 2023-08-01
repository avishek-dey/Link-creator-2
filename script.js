
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







document.addEventListener("DOMContentLoaded", function () {
    // Get the container and elements
    const container = document.getElementById("container");
    const title = document.getElementById("title");
    const bold = document.getElementById("bold");
    const tagGroup = document.getElementById("tag-group");
  
    // Function to animate the elements one after another
    function animateElements() {
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
  
      setTimeout(function () {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
      }, 300); // Delay for title animation (adjust as needed)
  
      setTimeout(function () {
        bold.style.opacity = "1";
        bold.style.transform = "translateY(0)";
      }, 600); // Delay for bold animation (adjust as needed)
  
      setTimeout(function () {
        tagGroup.style.opacity = "1";
        tagGroup.style.transform = "translateY(0)";
      }, 300); // Delay for tagGroup animation (adjust as needed)
    }
  
    // Call the animateElements function after a short delay (adjust the delay as needed)
    setTimeout(animateElements, 300); // 300 milliseconds delay in this example
  });
  

  let card = document.querySelector('.content');

  document.addEventListener('mousemove', function(e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
  });

