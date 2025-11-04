(function () {
    'use strict';
    //? DECLARE VARS
    // this is called type casting
    const form = document.querySelector('.new-item-form');
    const select = form.querySelector('#type');
    const toFrom = form.querySelector('#tofrom');
    const details = form.querySelector('#details');
    const amount = form.querySelector('#amount');
    ///? FUNCTIONS
    function submitHandler(event) {
        event.preventDefault();
        const formData = {
            type: select.value,
            toFrom: toFrom.value,
            details: details.value,
            amount: Number(amount.value)
        };
        console.log(formData);
        return formData;
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
