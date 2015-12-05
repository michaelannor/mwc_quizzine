
$(document).ready(
  initlogin()
);

function initlogin() {
  if (localStorage.getItem("user")==null){
    getloginpage();
  }
  else {
    window.location.assign("app.html");
  }

}

function shownotification(msg) {
  // body...
  var status = "";
  status += "<div class='alert alert-dismissible alert-danger'>";
  status +=   "<button type='button' class='close' data-dismiss='alert'> x</button>";
    status += "<h4>Warning!</h4>";
    status += "<p>"+msg+"</p>";
  status += "</div>";

  $("#divstatus").html(status);
}

function getloginpage() {
  // body...
  var loginstring = "";
  loginstring += "<div class='row'>";
  loginstring += "<div class='well-lg'>";
  loginstring += "<form class='form-horizontal'>";
  loginstring += "<fieldset>";
  loginstring += "<legend>Quizzine For Teachers</legend>";
  loginstring += "<div class='form-group'>";
  loginstring += "<label for='inputuser' class='col-lg-2 control-label'>Username</label>";
  loginstring += "<div class='col-lg-10'>";
  loginstring += "<input id='usernameinput' type='text' class='form-control' id='inputuser' placeholder='Username'>";
  loginstring += "</div>";
  loginstring += "</div>";
  loginstring += "<div class='form-group'>";
  loginstring += "<label for='inputPassword' class='col-lg-2 control-label'>Password</label>";
  loginstring += "<div class='col-lg-10'>";
  loginstring += "<input id='passwordinput' type='password' class='form-control' id='inputPassword' placeholder='Password'>";
  loginstring += "<div class='checkbox'>";
  loginstring += "<label>";
  loginstring += "<input type='checkbox'> Stay Signed In";
  loginstring += "</label>";
  loginstring += "</div>";
  loginstring += "</div>";
  loginstring += "</div>";
  loginstring += "<div class='form-group'>";
  loginstring += "<div class='col-lg-10 col-lg-offset-2'>";
  loginstring += "<input type='button' class='btn btn-primary btn-block' onclick='login()' value='Login'>";
  loginstring += "<br>";
  loginstring += "<a onclick='getsignuppage()'>Not on Quizzine? Sign up now</a>";
  loginstring += "</div>";
  loginstring += "</div>";
  loginstring += "</fieldset></form>";
  loginstring += "</div></div>";

  $("#maincontent").html(loginstring);
}

function sendRequest(u){
    // Send request to server
    //u a url as a string
    //async is type of request
    // alert(u);
    var obj=$.ajax({url:u,async:false});
    //Convert the JSON string to object
    var result=$.parseJSON(obj.responseText);
    return result;	//return object
}

function login() {
  var theUrl="../response.php?cmd=27&username="+usernameinput.value+"&password="+passwordinput.value;
    var obj=sendRequest(theUrl);		//send request to the above url
    if(obj.result==1){					//check result
      // add to local STORAGE
      // alert(obj.username);
      localStorage.setItem("user", obj.username);
      window.location.assign("app.html");
          // for (var i = 0; i < obj.category.length; i++) {
            // var category = obj.category[i].category_id;}
      // $("#simulateClick").trigger("click");
    }else{
        //show error message
        shownotification("error");//err
    }
}

function signup() {
  var theUrl="../response.php?cmd=6&user="+addnewusername.value+"&pass="+addnewpassword.value;
var obj1=sendRequest(theUrl);  //send request to the above url
if(obj1.result==1){
  // add to local STORAGE
  localStorage.setItem("user", addnewusername.value);

  window.location.assign("app.html");
}else {
  //show error message
  shownotification("error: user not added");//err
}

}

function getsignuppage() {
  // body...
  var loginstring = "";
  loginstring += "<div class='row'>";
  loginstring += "<div class='well-lg'>";
  loginstring += "<form class='form-horizontal'>";
  loginstring += "<fieldset>";
  loginstring += "<legend>Quizzine For Teachers</legend>";
  loginstring += "<div class='form-group'>";
  loginstring += "<label for='inputuser' class='col-lg-2 control-label'>Username</label>";
  loginstring += "<div class='col-lg-10'>";
  loginstring += "<input id='addnewusername' type='text' class='form-control' id='inputuser' placeholder='Username'>";
  loginstring += "</div>";
  loginstring += "</div>";
  loginstring += "<div class='form-group'>";
  loginstring += "<label for='inputPassword' class='col-lg-2 control-label'>Password</label>";
  loginstring += "<div class='col-lg-10'>";
  loginstring += "<input id='addnewpassword' type='password' class='form-control' id='inputPassword' placeholder='Password'>";
  loginstring += "</div>";
  loginstring += "</div>";
  loginstring += "<div class='form-group'>";
  loginstring += "<div class='col-lg-10 col-lg-offset-2'>";
  loginstring += "<input onclick='signup()' type='button' class='btn btn-primary btn-block' value='Sign Up'>";
  loginstring += "<br>";
  loginstring += "<a onclick='getloginpage()'>Already on Quizzine? Just Login</a>";
  loginstring += "</div>";
  loginstring += "</div>";
  loginstring += "</fieldset></form>";
  loginstring += "</div></div>";

  $("#maincontent").html(loginstring);
}
