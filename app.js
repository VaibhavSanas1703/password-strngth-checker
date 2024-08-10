
// ? SELECT DOM ELEMENTS TO INTEREACT
const userPassword = document.getElementById('pass-input');
const hideAndShow = document.querySelector('.container img');
const strengthCheck = document.getElementById('strength');


userPassword.addEventListener('input',() => {

   let userPassowordValue = userPassword.value;

   if(userPassowordValue.length == 0){
      userPassword.style.borderColor = 'red';
      strengthCheck.innerHTML = 'Enter password';
      strengthCheck.style.color = 'red'
      userPassword.classList.toggle('animate__headShake')
   }
   else if(userPassowordValue.length == 1){
      userPassword.style.borderColor = 'gold';
      strengthCheck.innerHTML = 'Password is too Weak';
      strengthCheck.style.color = 'gold'
   }
   else if(userPassowordValue.length == 5){
      userPassword.style.borderColor = '#7C00FE';
      strengthCheck.innerHTML = 'Password is too Medium';
      strengthCheck.style.color = '#7C00FE'
   }
   else if(userPassowordValue.length == 8){
      userPassword.style.borderColor = '#5bea5b';
      strengthCheck.innerHTML = 'Password is Strong';
      strengthCheck.style.color = '#5bea5b'
   }
   else if(userPassowordValue.length > 8){
      userPassword.style.borderColor = 'red';
      strengthCheck.innerHTML = 'Password must be 8 Characters only';
      strengthCheck.style.color = 'red'
   }

})

hideAndShow.addEventListener('click',() => {
   if(userPassword.type === 'password'){
      userPassword.type = 'text'
      hideAndShow.src = "images/eye.svg"
   }
   else{
      userPassword.type = 'password'
      hideAndShow.src = "images/eye-off.svg"
   }
})

