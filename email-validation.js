function ValidateEmail(inputText)
{
var mailformat = "sathishssathishs02@gmail.com";
if(inputText.value.match(mailformat))
{
alert("valid email address");
location.replace("transaction.html")
return true;
}
else
{
alert("Invalid email address");
return false;
}
}
