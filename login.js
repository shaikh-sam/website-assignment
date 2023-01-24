// let user = [{ name: "shoeb", password: "shb12345", mobile: "7666739389" }];

// function addUser(userDetails){
//   user.push(userDetails)
//   localStorage.setItem("users", JSON.stringify(user))
// }

function logIn() {
  var userObject = JSON.parse(localStorage.getItem('userObject'));
    console.log('userObject: ',userObject);
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  for (let i = 0; i < userObject.length; i++) {
    if (userObject[i].name == username) {
      if (userObject[i].password == password) {
       
        window.location.assign("dashboard.html");
      } else {
        document.getElementById("msg1").innerHTML="**password is wrong"
      }
    } else {
      document.getElementById("msg").innerHTML="**Username is wrong"
    }
  }
}
