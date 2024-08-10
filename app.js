// ? SELECT DOM ELEMENTS TO INTEREACT
const userPassword = document.getElementById("pass-input");
const hideAndShow = document.querySelector(".container img");
const strengthCheck = document.getElementById("strength");

window.addEventListener('load',() => {
   setTimeout(() => {
      hideAndShow.classList.toggle('toggle')
   }, 1300);
})

userPassword.addEventListener("input", () => {
  let userPassowordValue = userPassword.value;

  if (userPassowordValue.length == 0) {
    setTimeout(() => {
      userPassword.style.borderColor = "red";
      strengthCheck.innerHTML = "Enter password";
      strengthCheck.style.color = "red";
      userPassword.classList.add("animate__headShake");
    }, 200);
  } else if (userPassowordValue.length == 1) {
    setTimeout(() => {
      userPassword.style.borderColor = "gold";
      strengthCheck.innerHTML = "Password is too Weak";
      strengthCheck.style.color = "gold";
    }, 200);
  } else if (userPassowordValue.length == 5) {
    setTimeout(() => {
      userPassword.style.borderColor = "tomato";
      strengthCheck.innerHTML = "Password is too Medium";
      strengthCheck.style.color = "tomato";
    }, 200);
  } else if (userPassowordValue.length == 8) {
    setTimeout(() => {
      userPassword.style.borderColor = "#5bea5b";
      strengthCheck.innerHTML = "Password is Strong";
      strengthCheck.style.color = "#5bea5b";
    }, 200);
  } else if (userPassowordValue.length > 8) {
    setTimeout(() => {
      userPassword.style.borderColor = "red";
      strengthCheck.innerHTML = "Password must be 8 characters only";
      strengthCheck.style.color = "red";
    }, 200);
  }
  
});

hideAndShow.addEventListener("click", () => {
  if (userPassword.type === "password") {
    userPassword.type = "text";
    hideAndShow.src = "images/eye.svg";
  } else {
    userPassword.type = "password";
    hideAndShow.src = "images/eye-off.svg";
  }
});

