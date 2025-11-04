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


  

  
///? FUNCTIONS
  function submitHandler(event: Event) : Submission{
    event.preventDefault();

     const formData: Submission = {
      type: select.value,
      toFrom: toFrom.value,
      details: details.value,
      amount: Number(amount.value)
     }
     console.log(formData);


     return formData;
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