console.log("Now we're talking!!!\n\n");

let loginForm = document.querySelector('#login');

loginForm.addEventListener('submit', function getLoginInfo(e){
  e.preventDefault();
  // console.log('Username/email address:', e.target.identifier.value);
  verifyAccount(e.target)
})

function verifyAccount(loginForm){
  fetch(loginForm.action,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      identifier: loginForm.identifier.value
    })
  })
    .then(res => res.json())
    .then(console.log)
}