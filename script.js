function validate_password(){

    let pass = document.getElementById("password");
    let confirm_pass = document.getElementById("confirm-password");

    if (pass.value != '' && pass.value != confirm_pass.value){
        pass.classList.add('invalid');
        confirm_pass.classList.add('invalid');

        let error_message = document.querySelector('#passwords>p');
        if (error_message == null){   
            let error = document.createElement('p');
            let text = document.createTextNode("*Passwords do not match");
            error.appendChild(text);
            error.classList.add('error');
            document.querySelector('#passwords').appendChild(error);
        }
    }
    else{
        pass.classList.remove('invalid');
        confirm_pass.classList.remove('invalid');
        let error_message = document.querySelector('#passwords>p');
        if (error_message != null){
            error_message.remove();
        }
    }

}


// document.querySelectorAll('.form-control').forEach(item => {
//     item.addEventListener("blur", validate_password)
// })

[document.querySelector('#password'), document.querySelector('#confirm-password')].forEach(item => {
    item.addEventListener("blur", validate_password)
})
