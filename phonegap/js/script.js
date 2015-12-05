$.support.cors=true;

$(document).ready(
  initlogin()
);

function initlogin() {
  if (localStorage.getItem("user") != null) {
    currentuser = localStorage.getItem("user");
    initapp();
  } else {
    window.location.assign("index.html");
  }
}

var currentuser;

function initapp() {
  // body...
  var sideslider = $('[data-toggle=collapse-side]');
  var sel = sideslider.attr('data-target');
  var sel2 = sideslider.attr('data-target-2');
  sideslider.click(function(event) {
    $(sel).toggleClass('in');
    $(sel2).toggleClass('out');

  });
  $(".cello").click(function(event) {
    $(sel).toggleClass('in');
    $(sel2).toggleClass('out');

  });

  getcategories();
}


function sendRequest(u) {
  // Send request to server
  //u a url as a string
  //async is type of request
  // alert(u);
  var obj = $.ajax({
    url: u,
    async: false
  });
  //Convert the JSON string to object
  var result = $.parseJSON(obj.responseText);
  return result; //return object
}

// Set 10 on device ready
document.addEventListener('deviceready', function () {
    // cordova.plugins.notification.badge.set(0);
    cordova.plugins.notification.badge.configure({ title: '%d New Quiz Added' });
    cordova.plugins.notification.badge.configure({ autoClear: true });

}, false);

// Increase the badge each time on pause
document.addEventListener('pause', function () {
    // cordova.plugins.notification.badge.increase();
}, false);

function initpagination() {
  $('#pagination-demo').twbsPagination({
    totalPages: 5,
    // visiblePages: 3,
    prev: '<',
    next: '>',
    first: '',
    last: '',
    onPageClick: function(event, page) {
      if (page > 1) {
        addquizfunction($("#qestionnum").text(), $("#qntextArea").val(), $("#inputqn1").val(), $("#inputqn2").val(), $("#inputqn3").val(), $("#inputqn4").val(), $("#radiodiv input[type='radio']:checked").val());
      }

      $('#questiondivs').html(getquestionform(page));
      // if (page > 1){alert("page: "+page);}
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
    }
  });
}

// $(document).ready($('#questiondiv').html(getquestionform(3)));
// $(document).ready(temp());
$("#startaddquiz").click(function() {
  // doneadding();

  temp();
});
// );
$("#addquizbtn").click(function() {
  initarrays();
  donelisting();
  doneadding();
  addquiz();
});

$("#quizcategory").click(function() {
  initarrays();
  doneadding();
  getcategories();
});

$("#liststudents").click(function() {
  initarrays();
  doneadding();
  getstudents();
});

$("#logoutbtn").click(function() {
  localStorage.removeItem("user");
  window.location.assign("index.html");
  // initarrays();
  // doneadding();
  // getstudents();
});

function temp() {
  // body...
  setquizcategory($("#inputcategory").val());
  // alert("$(#inputcategory).gettext()");
  $("#addquizprompt").html("");
  $('#questiondiv').html(getpagination());
  initpagination();
}

function getpagination(question) {
  var formstring = "";

  formstring += "<div class='col-lg-10'>";
  formstring += "<form class='form-horizontal'>";
  formstring += "<fieldset>";
  formstring += "<div class='form-group'>";
  formstring += "<div class='col-lg-10 col-lg-offset-2'>";
  formstring += "<div id='pagination-demo' class='pagination-sm'></div>";
  formstring += "</div>";
  formstring += "</div>";
  formstring += "</fieldset>";
  formstring += "</form>";
  formstring += "</div>";

  // getpagination();


  return formstring;
}

var quizcategory = "";
// question, a, b, c, d, ans
var question1 = ["", "", "", "", "", ""];
var question2 = ["", "", "", "", "", ""];
var question3 = ["", "", "", "", "", ""];
var question4 = ["", "", "", "", "", ""];
var question5 = ["", "", "", "", "", ""];

function initarrays() {
  question1 = ["", "", "", "", "", ""];
  question2 = ["", "", "", "", "", ""];
  question3 = ["", "", "", "", "", ""];
  question4 = ["", "", "", "", "", ""];
  question5 = ["", "", "", "", "", ""];
  quizcategory = "";
}

function addquizfunction(qn, q, a, b, c, d, ans) {
  if (qn == 1) {
    question1 = [q, a, b, c, d, ans];
  } else if (qn == 2) {
    question2 = [q, a, b, c, d, ans];
  } else if (qn == 3) {
    question3 = [q, a, b, c, d, ans];
  } else if (qn == 4) {
    question4 = [q, a, b, c, d, ans];
  } else if (qn == 5) {
    question5 = [q, a, b, c, d, ans];
  }

}

function setquizcategory(cat) {
  quizcategory = cat;
}


function addquiz() {
  // body...
  var formstring = "";
  formstring += "<div class='col-lg-10'><form class='form-horizontal'><fieldset><legend>Add New Quiz</legend><div class='form-group'><label for='textArea' class='col-lg-2 control-label'></label><div class='col-lg-10'>";
  formstring += "<span class='help-block'>The following form is to be used to add a quiz for students to take. To start off, let's specify a category i.e. a subject area to help students easily identify quizes. Once you're done click Next to continue or cancel to do this another time.</span></div></div><div class='form-group'><label for='inputcategory' class='col-lg-2 control-label'>Category</label><div class='col-lg-10'><input type='text' class='form-control' id='inputcategory' placeholder='e.g. Mathematics, English, Science'></div></div>";
  formstring += "</div>";
  formstring += "</div>";
  formstring += "<div class='form-group'>";
  formstring += "<div class='col-lg-10'>";
  formstring += "</div>";
  formstring += "</div>";
  formstring += "</fieldset>";
  formstring += "</form>";
  formstring += "</div>";

  formstring += "<div class='col-lg-10'>";
  formstring += "<form class='form-horizontal'>";
  formstring += "<fieldset>";
  formstring += "<div class='form-group'>";
  formstring += "<div class='col-lg-10 col-lg-offset-2'>";
  formstring += "<button type='' class='btn btn-default'>Cancel</button>";
  formstring += "<button id='startaddquiz' onclick='temp()' class='btn btn-primary'>Next</button>";
  formstring += "</div>";
  formstring += "</div>";
  formstring += "</fieldset>";
  formstring += "</form></div>";

  $("#addquizprompt").html(formstring);


}

function getquestionform(question) {

  var localquestionarray = ["", "", "", "", "", ""];

  if (question == 1) {
    localquestionarray = question1;
  } else if (question == 2) {
    localquestionarray = question2;
  } else if (question == 3) {
    localquestionarray = question3;
  } else if (question == 4) {
    localquestionarray = question4;
  } else if (question == 5) {
    localquestionarray = question5;
  }



  var formstring = "";
  formstring += "<div class='col-lg-10'><form class='form-horizontal'><fieldset><legend>Question <span id=qestionnum>" + question + "</span></legend><div class='form-group'><label for='textArea' class='col-lg-2 control-label'>Question</label><div class='col-lg-10'><textarea class='form-control' rows='3' id='qntextArea'>" + localquestionarray[0] + "</textarea>";
  formstring += "<span class='help-block'>Type the question here and provide possible answers below.</span></div></div><div class='form-group'><label for='inputqn1' class='col-lg-2 control-label'>Option A</label><div class='col-lg-10'><input type='text' class='form-control' id='inputqn1' value='" + localquestionarray[1] + "' placeholder='Answer Goes Here'></div></div><div class='form-group'>";
  formstring += "<label for='inputqn2' class='col-lg-2 control-label'>Option B</label><div class='col-lg-10'><input type='text' class='form-control' id='inputqn2' value='" + localquestionarray[2] + "'placeholder='Answer Goes Here'></div></div><div class='form-group'><label for='inputqn3' class='col-lg-2 control-label'>Option C</label><div class='col-lg-10'>";
  formstring += "<input type='text' class='form-control' id='inputqn3' value='" + localquestionarray[3] + "' placeholder='Answer Goes Here'></div></div>";
  formstring += "<div class='form-group'><label for='inputqn4' class='col-lg-2 control-label'>Option D</label><div class='col-lg-10'>";
  formstring += "<input type='text' class='form-control' id='inputqn4' value='" + localquestionarray[4] + "' placeholder='Answer Goes Here'>";
  formstring += "</div>";
  formstring += "</div>";
  formstring += "<div class='form-group'>";
  formstring += "<label class='col-lg-2 control-label'>Answer</label>";
  formstring += "<div class='col-lg-10'>";
  formstring += "<div id='radiodiv' class='radio'>";
  formstring += "<label>";
  // if (localquestionarray[5]=='a'){
  formstring += "<input type='radio' name='optionsRadios' id='optionsRadiosa' value='a' checked=''>";
  // }
  // else {
  //   formstring += "<input type='radio' name='optionsRadios' id='optionsRadiosa' value='a'>";
  // }
  formstring += "A";
  formstring += "</label> &nbsp; &nbsp;";
  formstring += "<label>";
  if (localquestionarray[5] == 'b') {
    formstring += "<input type='radio' name='optionsRadios' id='optionsRadiosb' value='b' checked>";
  } else {
    formstring += "<input type='radio' name='optionsRadios' id='optionsRadiosb' value='b'>";
  }
  formstring += "B";
  formstring += "</label> &nbsp; &nbsp;";
  formstring += "<label>";
  if (localquestionarray[5] == 'c') {
    formstring += "<input type='radio' name='optionsRadios' id='optionsRadiosc' value='c' checked>";
  } else {
    formstring += "<input type='radio' name='optionsRadios' id='optionsRadiosc' value='c'>";
  }
  formstring += "C";
  formstring += "</label> &nbsp; &nbsp;";
  formstring += "<label>";
  if (localquestionarray[5] == 'd') {
    formstring += "<input type='radio' name='optionsRadios' id='optionsRadiosd' value='d' checked>";
  } else {
    formstring += "<input type='radio' name='optionsRadios' id='optionsRadiosd' value='d'>";
  }
  formstring += "D";
  formstring += "</label>";
  formstring += "</div>";
  formstring += "</div>";
  formstring += "</div>";
  formstring += "</fieldset>";
  formstring += "</form>";
  formstring += "</div>";

  getbuttons(question);

  return formstring;
}


function getbuttons(truecheck) {
  var buttonstring = "";
  if (truecheck == 5) {
    buttonstring += "<div class='col-lg-10'>";
    buttonstring += "<form class='form-horizontal'>";
    buttonstring += "<fieldset>";
    buttonstring += "<div class='form-group'>";
    buttonstring += "<div class='col-lg-10 col-lg-offset-2'>";
    buttonstring += "<button type='' class='btn btn-default'>Cancel</button>";
    buttonstring += "<button id='submitquiz' onclick='doneaddingbtn()' class='btn btn-primary'>Done</button>";
    buttonstring += "</div>";
    buttonstring += "</div>";
    buttonstring += "</fieldset>";
    buttonstring += "</form></div>";
  }
  $("#buttondiv").html(buttonstring);
}

function doneaddingbtn() {
  addquizfunction($("#qestionnum").text(), $("#qntextArea").val(), $("#inputqn1").val(), $("#inputqn2").val(), $("#inputqn3").val(), $("#inputqn4").val(), $("#radiodiv input[type='radio']:checked").val());
  addquiztodb();
  doneadding();
  getcategories();
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function shownotification(msg) {
  // body...
  var status = "";
  status += "<div class='alert alert-dismissible alert-warning'>";
  status +=   "<button type='button' class='close' data-dismiss='alert'> x</button>";
    status += "<h4>Warning!</h4>";
    status += "<p>"+msg+"</p>";
  status += "</div>";

  $("#divstatus").html(status);
}



function addquiztodb() {
  var id = makeid();
  // body...
  // INSERT CODE TO ADD ARRAY CONTENT TO DB
  // add quiz
  var theUrl1 = "http://cs.ashesi.edu.gh/class2016/michael-annor/mwcfinal/response.php?cmd=11&quiz=" + id + "&teacher=" + currentuser + "&cat=" + quizcategory;
  // add questions
  var theUrl2 = "http://cs.ashesi.edu.gh/class2016/michael-annor/mwcfinal/response.php?cmd=15&quiz=" + id + "&questiontext=" + question1[0] + "&a=" + question1[1] + "&b=" + question1[2] + "&c=" + question1[3] + "&d=" + question1[4] + "&ans=" + question1[5];
  var theUrl3 = "http://cs.ashesi.edu.gh/class2016/michael-annor/mwcfinal/response.php?cmd=15&quiz=" + id + "&questiontext=" + question2[0] + "&a=" + question2[1] + "&b=" + question2[2] + "&c=" + question2[3] + "&d=" + question2[4] + "&ans=" + question2[5];
  var theUrl4 = "http://cs.ashesi.edu.gh/class2016/michael-annor/mwcfinal/response.php?cmd=15&quiz=" + id + "&questiontext=" + question3[0] + "&a=" + question3[1] + "&b=" + question3[2] + "&c=" + question3[3] + "&d=" + question3[4] + "&ans=" + question3[5];
  var theUrl5 = "http://cs.ashesi.edu.gh/class2016/michael-annor/mwcfinal/response.php?cmd=15&quiz=" + id + "&questiontext=" + question4[0] + "&a=" + question4[1] + "&b=" + question4[2] + "&c=" + question4[3] + "&d=" + question4[4] + "&ans=" + question4[5];
  var theUrl6 = "http://cs.ashesi.edu.gh/class2016/michael-annor/mwcfinal/response.php?cmd=15&quiz=" + id + "&questiontext=" + question5[0] + "&a=" + question5[1] + "&b=" + question5[2] + "&c=" + question5[3] + "&d=" + question5[4] + "&ans=" + question5[5];

  // question, a, b, c, d, ans

  // var theUrl="../ajax-action.php?cmd=5&prodid="+product_id+"&name="+product_name+"&price="+product_price+"&qty="+product_quantity;
  var obj1 = sendRequest(theUrl1); //send request to the above url
  if (obj1.result == 1) {
    window.plugins.toast.showLongBottom('Quiz Added Successfully', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
    // cordova.plugins.notification.badge.set(1);
    cordova.plugins.notification.badge.increase();

  } else {
    //show error message
    // shownotification("error: quiz not added"); //err
    window.plugins.toast.showLongBottom('Unable To Add Quiz', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
  }

  var obj2 = sendRequest(theUrl2); //send request to the above url
  if (obj2.result == 1) {} else {
    //show error message
    //shownotification("error: quiz not added"); //err
    window.plugins.toast.showLongBottom('Unable To Add Question', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});

  }

  var obj3 = sendRequest(theUrl3); //send request to the above url
  if (obj3.result == 1) {} else {
    //show error message
    // shownotification("error: quiz not added"); //err
    window.plugins.toast.showLongBottom('Unable To Add Question', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
  }

  var obj4 = sendRequest(theUrl4); //send request to the above url
  if (obj4.result == 1) {} else {
    //show error message
    // shownotification("error: quiz not added"); //err
    window.plugins.toast.showLongBottom('Unable To Add Question', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
  }

  var obj5 = sendRequest(theUrl5); //send request to the above url
  if (obj5.result == 1) {} else {
    //show error message
    // shownotification("error: quiz not added"); //err
    window.plugins.toast.showLongBottom('Unable To Add Question', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
  }

  var obj6 = sendRequest(theUrl6); //send request to the above url
  if (obj6.result == 1) {} else {
    //show error message
    // shownotification("error: quiz not added"); //err
    window.plugins.toast.showLongBottom('Unable To Add Question', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
  }

  initarrays();
}

function doneadding() {
  $("#questiondivs").html("");
  $("#questiondiv").html("");
  $("#buttondiv").html("");
  $("#addquizprompt").html("");
}

function donelisting() {
  $("#listdiv").html("");
}

function getcategories() {


  var theUrl = "http://cs.ashesi.edu.gh/class2016/michael-annor/mwcfinal/response.php?cmd=10&teacher=" + currentuser;
  var obj = sendRequest(theUrl); //send request to the above url
  if (obj.result == 1) { //check result

    var categorystring;
    // if(obj.result==1){					//check result
    categorystring = "";
    for (var i = 0; i < obj.category.length; i++) {
      var category = obj.category[i].category_id;
      // obj.product_name[i]
      categorystring += "<a href='#' onclick=listquizzes('" + category + "') class='list-group-item'>";
      categorystring += "<h4 class='list-group-item-heading'>" + category + "</h4>";
      categorystring += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
      categorystring += "</a>";
    }

    $("#listdiv").html(categorystring);

    // $("#simulateClick").trigger("click");
  } else {
    //show error message
    // shownotification("error: couldn't fetch categories"); //err
    window.plugins.toast.showLongBottom('Unable To Fetch Categories', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
  }


  // var categorystring = "";
  // categorystring += "<a href='#' onclick='listquizzes()' class='list-group-item'>";
  // categorystring += "<h4 class='list-group-item-heading'>Mathematics</h4>";
  // categorystring += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
  // categorystring += "</a>";

  // $("#listdiv").html(categorystring);
}

function getstudents() {
  var categorystring = "";
  categorystring += "<a href='#' class='list-group-item'>";
  categorystring += "<h4 class='list-group-item-heading'>Araba Wilson</h4>";
  categorystring += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
  categorystring += "</a>";

  $("#listdiv").html(categorystring);
}

function getquiz(quiz) {

  var theUrl = "http://cs.ashesi.edu.gh/class2016/michael-annor/mwcfinal/response.php?cmd=16&quiz=" + quiz;
  var obj = sendRequest(theUrl); //send request to the above url

  if (obj.result == 1) { //check result
    // alert(theUrl);
    var quizstring = "";
    quizstring += "<h2>Quiz ID: " + quiz + "</h2>";
    quizstring += "<h3>Category: Geography</h3>";
    quizstring += "<hr>";
    console.log("id is: " + obj.result);
    for (var i = 0; i < obj.question.length; i++) {

      var qn = i + 1;
      var questionid = obj.question[i].question_id;
      // var teacherid = obj.quiz[i].teacher_id;
      // obj.product_name[i]
      // quizlist += "<a href='#' onclick='getquiz()' class='list-group-item'>";
      // quizlist += "<h4 class='list-group-item-heading'>Quiz "+quizid+"</h4><h5>By: "+ teacherid+"</h5><h5>Number of Questions: "+ 5+"</h5>";
      // quizlist += "</a>";
      var ans = obj.question[i].answer;
      if (ans == "a") {
        quizstring += "<div class='panel panel-default'>";
        quizstring += "<div class='panel-body'>";
        quizstring += "<span>" + qn + ". " + obj.question[i].question_text + "</span><br>";
        quizstring += "<span><b>a. " + obj.question[i].option_a + " </b></span><br>";
        quizstring += "<span>b. " + obj.question[i].option_b + " </span><br>";
        quizstring += "<span>c. " + obj.question[i].option_c + " </span><br>";
        quizstring += "<span>d. " + obj.question[i].option_d + " </span><br>";
        quizstring += "</div></div>";
      } else if (ans == "b") {
        quizstring += "<div class='panel panel-default'>";
        quizstring += "<div class='panel-body'>";
        quizstring += "<span>" + qn + ". " + obj.question[i].question_text + "</span><br>";
        quizstring += "<span>a. " + obj.question[i].option_a + " </span><br>";
        quizstring += "<span><b>b. " + obj.question[i].option_b + " </b></span><br>";
        quizstring += "<span>c. " + obj.question[i].option_c + " </span><br>";
        quizstring += "<span>d. " + obj.question[i].option_d + " </span><br>";
        quizstring += "</div></div>";
      } else if (ans == "c") {
        quizstring += "<div class='panel panel-default'>";
        quizstring += "<div class='panel-body'>";
        quizstring += "<span>" + qn + ". " + obj.question[i].question_text + "</span><br>";
        quizstring += "<span>a. " + obj.question[i].option_a + " </span><br>";
        quizstring += "<span>b. " + obj.question[i].option_b + " </span><br>";
        quizstring += "<span><b>c. " + obj.question[i].option_c + " </b></span><br>";
        quizstring += "<span>d. " + obj.question[i].option_d + " </span><br>";
        quizstring += "</div></div>";
      } else if (ans == "d") {
        quizstring += "<div class='panel panel-default'>";
        quizstring += "<div class='panel-body'>";
        quizstring += "<span>" + qn + ". " + obj.question[i].question_text + "</span><br>";
        quizstring += "<span>a. " + obj.question[i].option_a + " </span><br>";
        quizstring += "<span>b. " + obj.question[i].option_b + " </span><br>";
        quizstring += "<span>c. " + obj.question[i].option_c + " </span><br>";
        quizstring += "<span><b>d. " + obj.question[i].option_d + " </b></span><br>";
        quizstring += "</div></div>";
      }



    }

    quizstring += "</div>";
    $("#listdiv").html(quizstring);

    // $("#simulateClick").trigger("click");
  } else {
    //show error message
    // shownotification("error: couldn't fetch quiz questions"); //err
    window.plugins.toast.showLongBottom('Unable To Fetch Questions', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
  }


  $("#listdiv").html(quizstring);
}

function listquizzes(category) {
  // body...

  var theUrl = "http://cs.ashesi.edu.gh/class2016/michael-annor/mwcfinal/response.php?cmd=26&teacher=" + currentuser + "&category=" + category;
  var obj = sendRequest(theUrl); //send request to the above url
  if (obj.result == 1) { //check result

    var quizlist = "";
    quizlist += "<h2>" + category + " Quizzes</h2><hr>"
    quizlist += "<div class='list-group'>";

    for (var i = 0; i < obj.quiz.length; i++) {
      var quizid = obj.quiz[i].quiz_id;
      var teacherid = obj.quiz[i].teacher_id;
      // obj.product_name[i]

      quizlist += "<a href='#' onclick=getquiz('" + quizid + "') class='list-group-item'>";
      quizlist += "<h4 class='list-group-item-heading'>Quiz " + quizid + "</h4><h5>By: " + teacherid + "</h5><h5>Number of Questions: " + 5 + "</h5>";
      quizlist += "</a>";
    }

    quizlist += "</div>";
    $("#listdiv").html(quizlist);

    // $("#simulateClick").trigger("click");
  } else {
    //show error message
    // shownotification("error: couldn't fetch quizzes"); //err
    window.plugins.toast.showLongBottom('Unable To Fetch Quizzes', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
  }
}
