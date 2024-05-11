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


// Task 3.5 - Menu Keyboard Interaction
// Automatically close the submenu when the user presses the ESC key and focus on the menu header
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        var openSubmenus = document.querySelectorAll('.dropdown-menu.show');
        if (openSubmenus.length > 0) {
            openSubmenus.forEach(function(submenu) {
                submenu.classList.remove('show');
                var menuHeader = submenu.parentNode.querySelector('.nav-link.dropdown-toggle');
                if (menuHeader) {
                    menuHeader.focus();
                }
            });
        }
    }
});

// Allow activation of menu items using the SPACE key in addition to the ENTER key
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('keydown', function(event) {
        if (event.key === ' ' || event.key === 'Spacebar') {
            event.preventDefault();
            this.click();
        }
    });
});

// Close inactive menus when navigating outside using the TAB key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        // Check if any submenu is open
        var openSubmenus = document.querySelectorAll('.dropdown-menu.show');
        if (openSubmenus.length > 0) {
            // Close the submenu
            openSubmenus.forEach(function(submenu) {
                submenu.classList.remove('show');
            });
        }
    }
});
