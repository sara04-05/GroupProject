function validation() {
    var email = document.getElementById('email').value;
    var email_error = document.getElementById('email_error');
    var valid_email_regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

    if(!(email.match(valid_email_regex))){
    if (!valid_email_regex.test(email)) {
      document.getElementById("email_error").style.visibility="visible";
            document.getElementById("email").style.borderColor="red";
    }
}else{
        document.getElementById("email_error").style.visibility="hidden";
            document.getElementById("email").style.borderColor="black";
    return true;       
}
}