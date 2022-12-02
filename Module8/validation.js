function validate(){
    if(document.myForm.fullname.value==""){
        document.getElementById("nameErr"). innerHTML = "Please Enter Name";
        return false;
    }


if(document.myForm.email.value==""){
    document.getElementById("emailErr").innerHTML="Please Enter your Email";
    return false;
}else{
    var ragex = /^\$+@\$+\.\$+$/;
    if (ragex.test(document.myForm.email.value)==false)
    {
        alert("please enter a valid email address");
        return false;
    }
}
}



