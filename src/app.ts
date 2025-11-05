(function(){

  'use strict';


  // the bang denotes to let typescript know this is ont null and the element exists
  // This is called non-null assertion
  // const testForm = document.querySelector('form')!;
  //console.log(testForm);



  //? DECLARE TYPES
  interface Submission {  
    type: string;
    toFrom: string;
    details: string;  
    amount: number;
  }



  //? DECLARE VARS
// this is called type casting
  const form = document.querySelector('.new-item-form') as HTMLFormElement;
  const select = form.querySelector('#type') as HTMLSelectElement;
  const toFrom = form.querySelector('#tofrom') as HTMLInputElement;
  const details = form.querySelector('#details') as HTMLInputElement;
  const amount = form.querySelector('#amount') as HTMLInputElement;

  const list = document.querySelector('.item-list') as HTMLUListElement;


  

  
///? FUNCTIONS
  function submitHandler(event: Event){
    event.preventDefault();

     const formData: Submission = {
      type: select.value,
      toFrom: toFrom.value,
      details: details.value,
      amount: Number(amount.value)
     }


     const addListItem = listDOMElement(formData);

     list.appendChild(addListItem);
    


  }




  function listDOMElement(item: Submission) : HTMLLIElement{
    const listItem = document.createElement('li');
    listItem.classList.add('item');

    const {type, toFrom, details, amount} = item;

    listItem.innerHTML = `
        <h4>${type}</h4>
        <p>${toFrom}</p>
        <span>${details}</span>
        <span>$${amount}</span>
    `;
    return listItem;
  }


 

//? Events 

function eventHandlers(){
  form.addEventListener("submit", submitHandler);
}



//? Onload
  document.addEventListener("DOMContentLoaded", () => {
    eventHandlers();
  });


  

})(); // close iffy statement