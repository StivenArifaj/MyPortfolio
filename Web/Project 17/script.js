const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const navLinks = document.querySelectorAll('.nav-link');
const tabs = document.querySelectorAll('.form-box');

// Tab navigation for Home, About, Services, Contact
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tabId = link.getAttribute('data-tab');
        wrapper.classList.add('active-popup');
        tabs.forEach((tab) => {
            if (tab.classList.contains(tabId)) {
                tab.style.display = 'block';
            } else {
                tab.style.display = 'none';
            }
        });
    });
});

// Show register tab
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    tabs.forEach((tab) => {
        if (tab.classList.contains('register')) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
});

// Show login tab from the register page
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active'); // Removes the active class for registration
    tabs.forEach((tab) => {
        if (tab.classList.contains('login')) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
});

// Show login popup when clicking the login button
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    tabs.forEach((tab) => {
        if (tab.classList.contains('login')) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
});

// Close the popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    tabs.forEach((tab) => {
        tab.style.display = 'none';
    });
});
