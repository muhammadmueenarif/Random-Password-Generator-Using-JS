  //code to generate random password
  const passwordBox = document.getElementById("password");
  const button = document.getElementById("btn");
  const copyButton = document.getElementById("copy");
  
  const generatePassword = ()=> {
      //chars variable will store all the values that need to use in generating random password.
      const chars = 
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+}{|\/<>=-`~[]";
      
      const passwordLength = 8;
      // if we don't want to use this passwordlength variable then we can directly length in loop
      // instead of passwordlength variable.
  
      let password = " ";
      for (let i = 0; i < passwordLength; i++) {
          password += chars.charAt(Math.floor(Math.random() * chars.length));
          // we used charAt function to print the value present at that index because the math.floor 
          // function will return the integer value and we need to print the value present at that index.
  
          // console.log(password);
          }
          passwordBox.value = password;
      };        
          // now we will add logic to copy the password when we click button. if no password is written, 
          // then it will show alert message that no password found, please generate a password.
          // if password is written, then it will copy the password.
          copyButton.addEventListener("click", () => {
              const password = passwordBox.value;
              if (!password) {
                  // we can also write if(password=== " ")
                  alert("No password found, please generate a password");
                  } else {
                      navigator.clipboard.writeText(password);
                      alert("Password copied to clipboard");
                      }
                  })
  button.addEventListener("click", generatePassword);
                  
  
  // we can also do the same project in following way. 
  
  /*    button.addEventListener("click", generatePassword);
          copyButton.addEventListener("click", ()=>{
              const passwordCopy = passwordBox.value.trim();
  
              if (!passwordCopy) {
                  alert("No password to copy! please generate a password");
                  return;
                  } 
                      navigator.clipboard.writeText(passwordCopy)
                  .then(()=> {
                      alert("Password copied to clipboard");
                  })   
                  .catch((error)=> {
                      alert("Error in copying password", error);
                      })
              });
  */