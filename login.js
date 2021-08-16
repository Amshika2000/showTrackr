
  function checkOut(){
      var storeEmail = localStorage.getItem('email');
      var storePassword = localStorage.getItem('pw');

      var email = document.getElementById('email');
      var password = document.getElementById('password');

      if(email.value == storeEmail && password.value == storePassword){
          alert('Login Succesful');
      }else{
          alert('Your login input is not correct.Unsuccesful');
      }
  }
