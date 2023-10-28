var scrollToTopButton = document.getElementById('scrollToTopButton');

// Run function when button clicked.
scrollToTopButton.onclick = function() {
    scrollToTopSmoothly();
};

// Function to smoothly scroll to the top.
function scrollToTopSmoothly() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTopSmoothly);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
    }
}

// Make button less opaque when at top of page.
window.addEventListener('scroll', function() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll === 0) {
        scrollToTopButton.style.opacity = 0.25;
    } else {
        scrollToTopButton.style.opacity = 1;
    }
});

// JavaScript to handle sidebar toggling
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');
  const toggleButton = document.querySelector('.toggle-sidebar');

  if (sidebar.style.left === '-250px' || sidebar.style.left === '') {
    sidebar.style.left = '0';
    content.style.marginLeft = '250px';
    toggleButton.style.left = '250px'; // Move the button with the sidebar
    toggleButton.innerText = '<'; // Set text to "<" when opening the sidebar
  } else {
    sidebar.style.left = '-250px';
    content.style.marginLeft = '0';
    toggleButton.style.left = '0';
    toggleButton.innerText = '>'; // Set text to ">" when closing the sidebar
  }
}

/*
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;

  // Adjust the size of the level containers based on the scroll position
  const levelContainers = document.querySelectorAll('.level-container');
  levelContainers.forEach((levelContainer, index) => {
    const containerOffset = levelContainer.offsetTop + levelContainer.offsetHeight / 2 - viewportHeight / 2;
    const range = viewportHeight * 2; // Adjust this value to change the range

    // Calculate the desired scale for each level container based on the scroll position
    const distance = Math.abs(scrollPosition - containerOffset);
    const scale = Math.max(1 - distance / range, 0.5);

    // Apply the scale to the level container
    levelContainer.style.transform = `scale(${scale})`;
  });
});
*/
