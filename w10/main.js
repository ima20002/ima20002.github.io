const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("e-mail address must be filled out");
  } else {
    email.setCustomValidity("");
  }
});
/* setCustomValidity(message) adds a custom error message to the element */

const number = document.getElementById("number");

number.addEventListener("input", function (event) {
  if (number.validity.rangeUnderflow) {
    number.setCustomValidity("Please type a number more than 1")
  }else if (number.validity.rangeOverflow) {
    number.setCustomValidity("Please type a number less than 10")
  } else{
    number.setCustomValidity("Good");
  }
})
/*rangeOverflow: Returns true if the value is greater than the maximum 
rangeUnderflow: Returns true if the value is less than the minimum */
