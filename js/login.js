$(document).ready(function (){
  $("#submitbtn").click(function (){
    var userEmail= $("#userEmail").val().trim();
    var userPassword = $("#userPassword").val().trim();
    console.log(userEmail)
    if(userEmail !="" && userPassword !=""){
      $.ajax({
       data:{userEmail:userEmail,userPassword:userPassword},
       successfull:function(res){
        alert(res);
        localStorage.setItem("mail",userEmail);
        localStorage.setItem("password",userPassword);
       },
      });
    }
  });
});