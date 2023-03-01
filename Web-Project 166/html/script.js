const form = document.getElementById("registration-form");

form.addEventListener("submit", (event) => {
   event.preventDefault();
   
   const registrationData = {
      first_name: form.elements["first_name"].value,
      last_name: form.elements["last_name"].value,
      date: form.elements["date"].value,
      cell_phone: form.elements["cell_phone"].value,
      school_name: form.elements["school_name"].value
   };
   
   console.log(registrationData);
});
let registrations = [];

function submitForm() {

  const registrationInfo =
  for (let i = 1; i <= 10; i++) {
    const registrationData = {
       first_name: "First " + i,
       last_name: "Last " + i,
       date: "2022-03-15",
      
 
