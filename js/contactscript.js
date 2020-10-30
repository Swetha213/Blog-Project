function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}
function validateForm(){

    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;

    var nameErr = true;
    //validate name
    if(name==""){
        printError("nameErr","Please enter your name");
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false){
            printError("nameErr","Please Enter a valid name");
        }
        else{
            printError("nameErr","");
            nameErr=false;
        }
    }

    var emailErr = true;
    //validate email
    if(email==""){
        printError("emailErr","Please enter your Email");
    }
    else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false){
            printError("emailErr","Please Enter a valid Email");
        }
        else{
            printError("emailErr","");
            emailErr=false;
        }
    }

    var mobileErr = true;
    //validate mobile number
    if(mobile==""){
        printError("mobileErr","Please enter your number");
    }
    else {
        var regex = /^\d{10}$/;
        if(regex.test(mobile) === false){
            printError("mobileErr","Please enter a valid number");
        }
        else {
            printError("mobileErr","");
            mobileErr=false;
        }
    }

    if(nameErr || emailErr || mobileErr == true){
        return false;
    } else {
        alert("you have submitted the form..")
    }
    //alert("submit.")
}