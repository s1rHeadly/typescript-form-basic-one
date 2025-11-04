import randomID from './utils/randomNumber';
(function () {
    'use strict';
    class Submission {
        constructor(type, toFrom, details, amount, id) {
            this.id = id || randomID();
            this.type = type;
            this.toFrom = toFrom;
            this.details = details;
            this.amount = amount;
        }
        format() {
            return `ID: ${this.id} - ${this.type}: ${this.toFrom} - ${this.details} - ${this.amount}`;
        }
        getId() {
            return this.id;
        }
    }
    const invoiceOne = new Submission('invoice', 'John Doe', 'Work', 100);
    const invoiceTwo = new Submission('invoice', 'Jane Doe', 'Work', 200);
    let invoices = []; // create new array that accepts only Submission objects
    invoices.push(invoiceOne); // push test object to array
    invoices.push(invoiceTwo); // push test object to array
    console.log(invoices); // log array to console
})();
