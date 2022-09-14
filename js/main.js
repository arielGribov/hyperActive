const hamburgerButtonCheckbox = document.getElementById('checkbox');
const navBar = document.getElementById('inner-nav-container');
const headerContainer = document.getElementById('header');
const careers = document.getElementById('careers');
const careersDropDown = document.getElementById('careers-dropdown');
const question = document.getElementsByClassName('question');
const answer = document.getElementsByClassName('answer');
const categories = document.getElementsByClassName('category-container');
const catAns = document.getElementsByClassName('category-inner-menu');
const pluses = document.getElementsByClassName('fa-plus');
const mainModal = document.getElementById('main-modal');
const closeMainModal = document.getElementsByClassName('close-button')[0];
const talkToMeButton = document.getElementById('sumbit-contact');
const emailModal = document.getElementsByClassName('email-modal')[0];
const closeEmailModal = document.getElementById('close-email-modal');
const mainModalButton = document.getElementsByClassName('modal-button')[0];

setTimeout(() => {
    mainModal.classList.add('show-main-modal');
}, 2000);
closeMainModal.onclick = () => {
    mainModal.classList.add('hide-main-modal');
};
hamburgerButtonCheckbox.onclick = () => {
    navBar.classList.toggle('show-inner-nav-container');
};
careers.onclick = () => {
    if (window.innerWidth < 925) {
        careersDropDown.classList.toggle('show-careers-dropdown');
    }
};
talkToMeButton.onclick = () => {
    emailModal.style.display = 'flex';
};
mainModalButton.onclick = () => {
    mainModal.classList.add('hide-main-modal');
    emailModal.style.display = 'flex';
};
closeEmailModal.onclick = () => {
    emailModal.style.display = 'none';
};
for (let i = 0; i < question.length; i++) {
    question[i].onclick = () => {
        answer[i].classList.toggle('show-answer');
        if (question[i].lastElementChild.classList.contains('fa-arrow-circle-down')) {
            question[i].lastElementChild.classList.remove('fa-arrow-circle-down');
            question[i].lastElementChild.classList.add('fa-arrow-circle-up');
        } else if (question[i].lastElementChild.classList.contains('fa-arrow-circle-up')) {
            question[i].lastElementChild.classList.remove('fa-arrow-circle-up');
            question[i].lastElementChild.classList.add('fa-arrow-circle-down');
        }
    };
}
for (let i = 0; i < categories.length; i++) {
    categories[i].onclick = () => {
        catAns[i].classList.toggle('show-category');
        pluses[i].classList.toggle('rotate-to-x');
    };
}
