let user = [{ name: "shoeb", password: "shb12345", mobile: "7666739389" }];

function addUser(userDetails){
  user.push(userDetails)
  localStorage.setItem("users", JSON.stringify(user))
}
function logIn() {
  var retrievedObject = localStorage.getItem('testObject');
    console.log('retrievedObject: ',JSON.parse( retrievedObject));
  let a = document.getElementById("user").value;
  let b = document.getElementById("passs").value;
  for (let i = 0; i < user.length; i++) {
    if (user[i].name === a) {
      if (user[i].password === b) {
        alert("you are logged in");
        localStorage.setItem("userDetails");
        window.location.assign("");
      } else {
        console.log("password is wrong");
      }
    } else {
      console.log("username is wrong");
    }
  }
}
