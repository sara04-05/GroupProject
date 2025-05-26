function validation() {
    var email = document.getElementById('email') ? document.getElementById('email').value : '';
    var emailError = document.getElementById('email_error');
    var valid_email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if(!(email.match(valid_name_regex)) || !(age.match(valid_age_regex)) || (city=="")){

        if(!(emai.match(valid_email_regex))){
            document.getElementById("email_error").style.visibility="visible";
            document.getElementById("email").style.borderColor="red";
        }else{
            document.getElementById("email").style.visibility="hidden";
            document.getElementById("email").style.borderColor="black";
        }
    }
}