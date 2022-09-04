const hamburgerButtonCheckbox = document.getElementById('checkbox');
const navBar = document.getElementById('inner-nav-container');
const headerContainer = document.getElementById('header');
const careers = document.getElementById('careers');
const careersDropDown = document.getElementById('careers-dropdown');

hamburgerButtonCheckbox.onclick = () => {
    navBar.classList.toggle('show-inner-nav-container');
};
careers.onclick = () => {
    if (window.innerWidth < 925) {
        careersDropDown.classList.toggle('show-careers-dropdown');
    }
};
