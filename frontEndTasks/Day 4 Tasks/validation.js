function checkData() {
    let uname = document.myform.fname.value;
    let uedu = document.myform.edu;
    let regName = "^[a-zA-Z]{3,20}$";
    if (uname.trim() === "") {
        window.alert("fullname required");
        document.getElementById("fname").focus();
        return false;
    }
    if (!uname.trim().match(regName)) {
        window.alert("full name must contains characters");
        document.getElementById("fname").focus();
        return false;
    }
    let pass = document.myform.upass.value;
    let regPass = "^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? ]).*$"
    if (pass.trim() === "") {
        window.alert("password Requried");
        document.getElementById("upass").focus();
        return false;
    }

    if (!pass.match(regPass)) {
        window.alert("passoword must contains characters,numbers,special characters");
        document.getElementById("upass").focus();
        return false;
    }
    let email = document.myform.uemail.value;
    let regMail = "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$";
    if (email.trim() === "") {
        window.alert("email Requried");
        document.getElementById("uemail").focus();
        return false;
    }

    if (!email.match(regMail)) {
        window.alert("check your mail ");
        document.getElementById("email").focus();
        return false;
    }

    let contact = document.myform.ucon.value;
    let regCon= "^[7-9]{1}[0-9]{9}$"
    if (contact.trim() === "") {
        window.alert("contact Requried");
        document.getElementById("ucon").focus();
        return false;
    }

    if (!contact.match(regCon)) {
        window.alert("check your phone number ");
        document.getElementById("ucon").focus();
        return false;
    }
    let gender = document.myform.ugen;
    if (gender[0].checked == false && gender[1].checked == false){
        window.alert("Select your gender !");
        return false;
    }
    if (uedu[0].checked == false && uedu[1].checked == false && uedu[2].checked == false && uedu[3].checked == false) {
        window.alert("Please select qualification");
        return false;
    }

}