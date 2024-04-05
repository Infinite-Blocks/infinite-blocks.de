// Function to open the next tab
function openTab() {
    alert('hello');
    var currentTab = document.querySelector('.tabcontent.active');
    var nextTab = currentTab.nextElementSibling;

    // Check if there's a next tab, else loop back to the first tab
    if (nextTab) {
        currentTab.classList.remove('active');
        nextTab.classList.add('active');
    } else {
        currentTab.classList.remove('active');
        document.querySelector('.tabcontent:first-child').classList.add('active');
    }

    // Update the active tab link
    var currentTabLink = document.querySelector('.tablink.active');
    currentTabLink.classList.remove('active');
    var nextTabLink = currentTabLink.nextElementSibling;
    if (nextTabLink) {
        nextTabLink.classList.add('active');
    } else {
        document.querySelector('.tablink:first-child').classList.add('active');
    }
}

// Set interval to open tabs automatically every 3 seconds
setInterval(openNextTab, 3000);
