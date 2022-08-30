const hamburgerButtonCheckbox = document.getElementById('checkbox');
const navBar = document.getElementById('inner-nav-container');
console.log(navBar);
hamburgerButtonCheckbox.onclick = () => {
    navBar.classList.toggle('show-inner-nav-container');
};
