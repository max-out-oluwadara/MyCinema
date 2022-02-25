let user = JSON.stringify(localStorage.allcustomers);
let juser = JSON.parse(localStorage.allcustomers);

    login = () =>      
    {
      var found = juser.find((val, i) =>val.email == email.value && val.password == password.value)
      if (found) {
        window.location = 'http://127.0.0.1:3002/customerhall.html'
      }
      else{
        alert("user not found")
      }
      localStorage.setItem('userId',email.value)
      }