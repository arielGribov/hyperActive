const hamburgerButtonCheckbox = document.getElementById('checkbox');
const navBar = document.getElementById('inner-nav-container');
hamburgerButtonCheckbox.onclick = () => {
    navBar.classList.toggle('show-inner-nav-container');
};
const careers = document.getElementById('careers');
const careersDropDown = document.getElementById('careers-dropdown');
console.log(careersDropDown);
careers.onclick = () => {
    careers.classList.toggle('show-careers-dropdown');
};