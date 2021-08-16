 function checkForm(form)
  {
    if(form.inputfield.value == "") {
      alert("Error: Input is empty!");
      return false;
    }

    var character = /^[\w ]+$/;
    if(!character.test(form.inputfield.value)) {
      alert("Error: Input contains invalid characters!");
      return false;
    }

    else{
      alert(form.inputfield.value +" " +"has been added");
      return false;
    }

  }
