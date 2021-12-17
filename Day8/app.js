const username = document.querySelector('.username input')
const email = document.querySelector('.email input')
const password = document.querySelector('.password input')
const confirmPassword = document.querySelector('.confirm-password input')

const form = document.querySelector(".form-control");

const inputField = [
  {
    type:username,
    error: "Username is required",
  },
  {
    type:email,
    error: "Email is required",
  },
  {
    type:password,
    error: "Password is required",
  },
  {
    type:confirmPassword,
    error: "Password2 is required",
  },
];


function emptyInput(input){
    // input.value == input.value.trim();
    if (!input) return true;
    return false;
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    for (let i = 0; i<inputField.length; i++){
        var parent =  inputField[i].type.parentElement
        if (emptyInput(inputField[i].type.value))
          {
            parent.classList.add("error");
            parent.lastElementChild.innerText = inputField[i].error;
          }
        else{
            parent.lastElementChild.innerText = "";
            parent.classList.remove("error");
            parent.classList.add("success");
        }
    }
})


