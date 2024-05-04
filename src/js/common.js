/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
    }
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);

// Function to increase font size
function increaseFontSize() {
    // Get the current font size
    let currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    // Increase the font size by a certain amount
    document.documentElement.style.fontSize = (currentSize + 1) + 'px';
}

// Function to decrease font size
function decreaseFontSize() {
    // Get the current font size
    let currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    // Decrease the font size by a certain amount
    document.documentElement.style.fontSize = (currentSize - 1) + 'px';
}

// Add event listeners to the buttons
document.getElementById('font-increase-button').addEventListener('click', increaseFontSize);
document.getElementById('font-increase-button-1').addEventListener('click', increaseFontSize);
document.getElementById('font-decrease-button').addEventListener('click', decreaseFontSize);
document.getElementById('font-decrease-button-1').addEventListener('click', decreaseFontSize);
