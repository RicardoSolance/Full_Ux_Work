let username = document.getElementById('fName');
let userNameErrMessage = document.getElementById('username-error');

let surname = document.getElementById('sName');
let userSurnameErrMessage = document.getElementById('surname-error');

let email = document.getElementById('email');
let emailErrMessage = document.getElementById('email-error');


let pass = document.getElementById('password2');
let passwordErrMessage = document.getElementById('password-error');

let telephone = document.getElementById('numtelfono');
let telephoneErrMessage = document.getElementById('telephone-error');

console.log(pass);
pass.addEventListener('onkeyup', (event) => {
    // event.target.style.color = 'pink';
    let password1 = document.querySelector('#password').value;
    let password2 = document.getElementById('password2').value;
    console.log(password1);
    // if (password1 === password2) {
    //     console.log("correcto");
    // }

});

function verifyPassword() {
    console.log("hola");
    
    // console.log(password1);
    // var nameValue = "test";

//      // the typeof operator returns a string.
//      if(typeof nameValue !== "string"){
//         window.alert("Please re-enter your name")
//     // we use strict validation ( !== ) because it's a good practice.
//     }else if(password1 !== password2) {
//        window.alert("Passwords do not match!")
//     }
// //    if (password1!=password2) {
//        passwordErrMessage.style.display = 'block';
//    }else{
//     passwordErrMessage.style.display = 'none';
//    }
}

username.addEventListener('input', function(e){
    console.log(e.target.value);
    let pattern = /^[\w]{4,8}$/;
    let currentValue = e.target.value;
    let valid = pattern.test(currentValue);

    if(valid){
        userNameErrMessage.style.display ='none'
    }else{
        userNameErrMessage.style.display ='block'
    }
    console.log();
})

surname.addEventListener('input', function(e){
    console.log(e.target.value);
    let pattern = /^[\w]{4,8}$/;
    let currentValue = e.target.value;
    let valid = pattern.test(currentValue);

    if(valid){
        userSurnameErrMessage.style.display ='none'
    }else{
        userSurnameErrMessage.style.display ='block'
    }
    console.log();
})

telephone.addEventListener('input',function(e){
    console.log(e.target.value);
    let pattern = /^[679]{1}[0-9]{8}$/;
    let currentValue = e.target.value;
    let valid = pattern.test(currentValue);

    if(valid){
        telephoneErrMessage.style.display ='none'
    }else{
        telephoneErrMessage.style.display ='block'
    }
    console.log();
})


email.addEventListener('input', function(e){
    console.log(e.target.value);
    let pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    let currentValue = e.target.value;
    let valid = pattern.test(currentValue);

    if(valid){
        emailErrMessage.style.display ='none'
    }else{
        emailErrMessage.style.display ='block'
    }
    console.log();
})


