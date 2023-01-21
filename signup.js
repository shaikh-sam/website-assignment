
function signUp() {
  let name = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let mobile = document.getElementById("mobile").value;
  if (name.length < 8) {
    console.log("username is less than 8 characters");
  }

  if (password.length < 8) {
    console.log("enter minimum 8 characters");
  } else if (password.search(/[0-9]/) == -1) {
    console.log("atleast one numerical value");
    return false;
  } else if (password.search(/[a-z]/) == -1) {
    console.log("atleast one lowerCase");
    return false;
  } else if (password.search(/[A-Z]/) == -1) {
    console.log("atleast one UpperCase");
    return false;
  } else {
    let obj={name, password, mobile}
    localStorage.setItem('testObject', JSON.stringify(obj));
    
    // addUser({name, password, mobile})
  }
}
