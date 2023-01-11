const tabItems = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');


function selectItem(e) {
    removeBorder();
    removeShow();
    //Adding Border to tab

    this.classList.add('tab-border');

    //Get the conteny by ID
    const tabContentItem = document.querySelector(`#${this.id}-content`)

    //Show

    tabContentItem.classList.add('show');



}
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeShow() {
    tabContentItem.forEach(item => item.classList.remove('show'))
}

tabItems.forEach(item => item.addEventListener('click', selectItem));
