function validate(){
    if(document.myForm.employeeID.value==""){
        document.getElementById("employeeIDErr"). innerHTML = "Please Enter Employee ID";
        return false;
    }

    if(document.myForm.firstname.value==""){
        document.getElementById("firstnameErr"). innerHTML = "Please Enter First Name";
        return false;
    }

    if(document.myForm.lastname.value==""){
        document.getElementById("lastnameErr"). innerHTML = "Please Enter Last Name";
        return false;
    }

    if(document.myForm.department.value==""){
        document.getElementById("departmentErr"). innerHTML = "Please Enter Department";
        return false;
    }

if(document.myForm.email.value==""){
    document.getElementById("emailErr").innerHTML="Please Enter your Email";
    return false;
}else{
    var ragex = /^\S+$+@\$+\.\$+$/;
    if (ragex.test(document.myForm.email.value)==false)
    {
        alert("please enter a valid email address");
        return false;
    }
}

if(document.myForm.contact.value==""){
    document.getElementById("contactErr"). innerHTML = "Please Enter Contact Nummber";
    return false;
}
if(document.myForm.username.value==""){
    document.getElementById("usernameErr"). innerHTML = "Please Enter Username";
    return false;
}

}



