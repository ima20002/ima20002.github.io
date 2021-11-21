function validateForm() {
    let x = document.forms["myForm"]["eMail"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  } 
