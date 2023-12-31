// DOMHandler.js

const homeListener = function(event) {
    document.querySelector('.main-subtitle').textContent = event.target.textContent;
};

const addHomeListeners = function() {
    const homeLis = document.querySelectorAll('.chronological > li');
    homeLis.forEach((li) => {
        li.addEventListener('click', homeListener);
    });
};






export { addHomeListeners };