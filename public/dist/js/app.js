(function () {
    'use strict';
    //? DECLARE VARS
    // this is called type casting
    const form = document.querySelector('.new-item-form');
    const select = form.querySelector('#type');
    const toFrom = form.querySelector('#tofrom');
    const details = form.querySelector('#details');
    const amount = form.querySelector('#amount');
    const list = document.querySelector('.item-list');
    ///? FUNCTIONS
    function submitHandler(event) {
        event.preventDefault();
        const formData = {
            type: select.value,
            toFrom: toFrom.value,
            details: details.value,
            amount: Number(amount.value)
        };
        const addListItem = listDOMElement(formData);
        list.appendChild(addListItem);
    }
    function listDOMElement(item) {
        const listItem = document.createElement('li');
        listItem.classList.add('item');
        const { type, toFrom, details, amount } = item;
        listItem.innerHTML = `
        <h4>${type}</h4>
        <p>${toFrom}</p>
        <span>${details}</span>
        <span>${amount}</span>
    `;
        return listItem;
    }
    //? Events 
    function eventHandlers() {
        form.addEventListener("submit", submitHandler);
    }
    //? Onload
    document.addEventListener("DOMContentLoaded", () => {
        eventHandlers();
    });
})(); // close iffy statement
