function validate()
{
    var nameVal=document.getElementById("name");
    if(nameVal.value=="")
    {
        nameVal.autofocus;
        nameVal.style.border=" 2px solid red";
    }

    if(nameVal.value!="")
    {
        nameVal.autofocus;
        nameVal.style.border=" 2px solid green";
    }

    var emailVal=document.getElementById("Email");

    if(validateEmail()===false)
    {
        emailVal.autofocus;
        emailVal.style.border=" 2px solid red";
    }

    if(validateEmail()===true)
    {
        emailVal.autofocus;
        emailVal.style.border=" 2px solid green";
    }
    return false;
}

function validateEmail()
{
    var emailId=document.getElementById("Email").value;
    var atPos=emailId.indexOf("@");
    var dotPos=emailId.lastIndexOf(".");

    if(atPos<1 || dotPos < atPos+2 || dotPos+2 >= emailId.length)
    {
        return false;
    }

    return true;
}

function vail()
{
    var emailVal=document.getElementById("email");

    if(validEmail()===false)
    {
        emailVal.autofocus;
        emailVal.style.border=" 2px solid red";
    }

    if(validEmail()===true)
    {
        emailVal.autofocus;
        emailVal.style.border=" 2px solid green";
    }
    return false;
}

function validEmail()
{
    var emailId=document.getElementById("email").value;
    var atPos=emailId.indexOf("@");
    var dotPos=emailId.lastIndexOf(".");

    if(atPos<1 || dotPos < atPos+2 || dotPos+2 >= emailId.length)
    {
        return false;
    }

    return true;
}



