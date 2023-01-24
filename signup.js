
function signUp() {
  let name = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let mobile = document.getElementById("mobile").value;
  if (name.length < 8) {
    document.getElementById("msg").innerHTML="**Username should contain atleast 8 character"
  }else if (password.length < 8) {
    document.getElementById("msg1").innerHTML="**Password should contain atleast 8 character"
  } else if (password.search(/[0-9]/) == -1) {
    document.getElementById("msg1").innerHTML="**Password should contain atleast 1 numerical value"
    return false;
  } else if (password.search(/[a-z]/) == -1) {
    document.getElementById("msg1").innerHTML="**Password should contain atleast 1 smaller case alphabet"
    return false;
  } else if (password.search(/[A-Z]/) == -1) {
    document.getElementById("msg1").innerHTML="**Password should contain atleast 1 upper case alphabet"
    return false;
  } else if(mobile.length <10){
    document.getElementById("msg2").innerHTML="**Number should be 10 digits"
  }
  else {
    let obj={name, password, mobile}
    let users=JSON.parse(localStorage.getItem('userObject'))||[];
    users.push(obj)
    console.log("obj  ",users)
    localStorage.setItem('userObject', JSON.stringify(users));
    window.location.assign("index.html");
    
  }
}
