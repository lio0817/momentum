const frmLogin = document.querySelector("#frmLogin");
const inputLogin = document.querySelector("#frmLogin input");
const hello = document.getElementById("hello");
const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "userName";

function onClickLoginBtn(event){
event.preventDefault();
frmLogin.classList.add(HIDDEN_CLASSNAME);
const userName = inputLogin.value;
localStorage.setItem(KEY_USERNAME, userName);
displayHello(userName);
}

function displayHello(argName){
greeting.innerText = `hello ${argName}`;
greeting.classList.remove(HIDDEN_CLASSNAME);
}

const lsUserName = localStorage.getItem("userName");

if (lsUserName === null){
    frmLogin.classList.remove(HIDDEN_CLASSNAME);
    frmLogin.addEventListener("submit", onClickLoginBtn);
}else{
    displayHello(lsUserName);
}