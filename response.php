<?php

/**
 * author: Michael Annor
 * date: 26th November, 2015
 * description: ajax-action page, interfaces with javascript to process commands from the frontend
 */

  $cmd = $_REQUEST['cmd'];
  switch ($cmd) {
    case 1:
      add_student_cmd();
      break;
    case 2:
      get_parent_cmd();
      break;
    case 3:
      get_students_by_parent_cmd();
      break;
    case 4:
      get_parent_phone_by_student_cmd();
      break;
    case 5:
      add_parent_cmd();
      break;
    case 6:
      add_teacher_cmd();
      break;
    case 7:
      add_category_cmd();
      break;
    case 8:
      get_category_by_id_cmd();
      break;
    case 9:
      get_all_categories_cmd();
      break;
    case 11:
      add_quiz_cmd();
      break;
    case 12:
      get_quizzes_by_teacher_cmd();
      break;
    case 13:
      get_quizzes_by_category_cmd();
      break;
    case 14:
      get_all_quizes_cmd();
      break;
    case 15:
      add_question_cmd();
      break;
    case 16:
      get_questions_by_quiz_cmd();
      break;
    case 17:
      get_answer_cmd();
      break;
    case 18:
      add_score_cmd();
      break;
    case 19:
      get_score_by_quiz_student_cmd();
      break;
    case 20:
      get_score_quiz_by_student_cmd();
      break;
    case 21:
      add_s_t_pair_cmd();
      break;
    case 22:
      get_students_by_teacher_cmd();
      break;
    case 23:
      get_teachers_by_student_cmd();
      break;
    case 24:
      get_feedback_by_student_teacher_cmd();
      break;
    case 25:
      add_feedback_cmd();
      break;
    default:
      # code...
      break;
  }

// cmd1
  function add_student_cmd(){
    include ("student.php");
    $user = $_REQUEST['user'];
    $password = $_REQUEST['pass'];
    $parent = $_REQUEST['parent'];
    $obj = new student();

    if($obj->add_student($user, $password, $parent)){
        echo '{"result":1,"message": "added successfully"}';
    }else{
        echo '{"result":0,"message": "student not added."}';
    }
  }
// cmd2
  function get_parent_cmd(){
    include ("student.php");
    $user = $_REQUEST['user'];
    $obj = new student();

    $row = $obj->get_parent($user);
    //return a JSON string to browser when request comes to get description

    if($row){
    //generate the JSON message to echo to the browser
      echo '{"result":1,"parent":[';	//start of json object
      echo json_encode($row);			//convert the result array to json object
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "parent not in database."}';
    }
  }
// cmd3
  function get_students_by_parent_cmd(){
    $parent=$_REQUEST['parent'];
    include ("student.php");
    $obj = new student();

    $row = $obj->get_students_by_parent($parent);
    if ($row){
    //return a JSON string to browser when request comes to get description
    //generate the JSON message to echo to the browser
      echo '{"result":1,"student":[';	//start of json object
      while($row){
      echo json_encode($row);			//convert the result array to json object
      $row=$obj->fetch();
      if ($row){
        echo ",";
      }
    }
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "students not got."}';
    }
  }
// cmd4
  function get_parent_phone_by_student_cmd(){
    include ("student.php");
    $user = $_REQUEST['user'];
    $obj = new student();

    $row = $obj->get_parent_phone_by_student_cmd($user);
    //return a JSON string to browser when request comes to get description

    if($row){
    //generate the JSON message to echo to the browser
      echo '{"result":1,"parentphone":[';	//start of json object
      echo json_encode($row);			//convert the result array to json object
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "parentphone not in database."}';
    }
  }
  // cmd5
function add_parent_cmd(){
  include ("parent.php");
  $user = $_REQUEST['user'];
  $password = $_REQUEST['pass'];
  $phone = $_REQUEST['phone'];
  $obj = new parents();

  if($obj->add_student($user, $password, $phone)){
      echo '{"result":1,"message": "added successfully"}';
  }else{
      echo '{"result":0,"message": "parent not added."}';
  }
}
  // cmd6
  function add_teacher_cmd(){
    include ("teacher.php");
    $user = $_REQUEST['user'];
    $password = $_REQUEST['pass'];
    $obj = new teacher();

    if($obj->add_teacher($user, $password)){
        echo '{"result":1,"message": "added successfully"}';
    }else{
        echo '{"result":0,"message": "teacher not added."}';
    }
  }
  // cmd7
  function add_category_cmd(){
    include ("category.php");
    $category = $_REQUEST['cat'];
    $obj = new category();

    if($obj->add_teacher($category)){
        echo '{"result":1,"message": "added successfully"}';
    }else{
        echo '{"result":0,"message": "category not added."}';
    }
  }
  // cmd8
  function get_category_by_id_cmd(){
    include ("category.php");
    $category = $_REQUEST['cat'];
    $obj = new category();

    $row = $obj->get_category_by_id($category);
    //return a JSON string to browser when request comes to get description

    if($row){
    //generate the JSON message to echo to the browser
      echo '{"result":1,"category":[';	//start of json object
      echo json_encode($row);			//convert the result array to json object
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "category not in database."}';
    }
  }
  // cmd9
  function get_all_categories_cmd(){
    include ("category.php");
    $obj = new category();

    $row = $obj->get_all_categories();
    if ($row){
    //return a JSON string to browser when request comes to get description
    //generate the JSON message to echo to the browser
      echo '{"result":1,"category":[';	//start of json object
      while($row){
      echo json_encode($row);			//convert the result array to json object
      $row=$obj->fetch();
      if ($row){
        echo ",";
      }
    }
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "categories not got."}';
    }
  }
  // cmd10
  function FunctionName(){
    # code...
  }
  // cmd11
  function add_quiz_cmd(){
    include ("quiz.php");
    $quiz = $_REQUEST['quiz'];
    $teacher = $_REQUEST['teacher'];
    $category = $_REQUEST['cat'];
    $obj = new quiz();

    if($obj->add_teacher($quiz, $teacher, $category)){
        echo '{"result":1,"message": "added successfully"}';
    }else{
        echo '{"result":0,"message": "quiz not added."}';
    }
  }
  // cmd12
  function get_quizzes_by_teacher_cmd(){
    $teacher=$_REQUEST['teacher'];
    include ("quiz.php");
    $obj = new quiz();

    $row = $obj->get_quizzes_by_teacher($teacher);
    if ($row){
    //return a JSON string to browser when request comes to get description
    //generate the JSON message to echo to the browser
      echo '{"result":1,"quiz":[';	//start of json object
      while($row){
      echo json_encode($row);			//convert the result array to json object
      $row=$obj->fetch();
      if ($row){
        echo ",";
      }
    }
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "quizzes not got."}';
    }
  }
  // cmd13
  function get_quizzes_by_category_cmd(){
    $category=$_REQUEST['category'];
    include ("quiz.php");
    $obj = new quiz();

    $row = $obj->get_quizzes_by_category($category);
    if ($row){
    //return a JSON string to browser when request comes to get description
    //generate the JSON message to echo to the browser
      echo '{"result":1,"quiz":[';	//start of json object
      while($row){
      echo json_encode($row);			//convert the result array to json object
      $row=$obj->fetch();
      if ($row){
        echo ",";
      }
    }
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "quizzes not got."}';
    }
  }
  // cmd14
  function get_all_quizes_cmd(){
    include ("quiz.php");
    $obj = new quiz();

    $row = $obj->get_all_quizes();
    if ($row){
    //return a JSON string to browser when request comes to get description
    //generate the JSON message to echo to the browser
      echo '{"result":1,"quiz":[';	//start of json object
      while($row){
      echo json_encode($row);			//convert the result array to json object
      $row=$obj->fetch();
      if ($row){
        echo ",";
      }
    }
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "quizzes not got."}';
    }
  }
  // cmd15
  function add_question_cmd(){
    include ("question.php");
    $quiz = $_REQUEST['quiz'];
    $questiontext = $_REQUEST['questiontext'];
    $a = $_REQUEST['a'];
    $b = $_REQUEST['b'];
    $c = $_REQUEST['c'];
    $d = $_REQUEST['d'];
    $answer = $_REQUEST['ans'];
    $obj = new question();

    if($obj->add_question($quiz, $questiontext, $a, $b, $c, $d, $answer)){
        echo '{"result":1,"message": "added successfully"}';
    }else{
        echo '{"result":0,"message": "question not added."}';
    }
  }
  // cmd16
  function get_questions_by_quiz_cmd(){
    $quiz=$_REQUEST['quiz'];
    include ("question.php");
    $obj = new question();

    $row = $obj->get_questions_by_quiz($quiz);
    if ($row){
    //return a JSON string to browser when request comes to get description
    //generate the JSON message to echo to the browser
      echo '{"result":1,"question":[';	//start of json object
      while($row){
      echo json_encode($row);			//convert the result array to json object
      $row=$obj->fetch();
      if ($row){
        echo ",";
      }
    }
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "questions not got."}';
    }
  }
  // cmd17
  function get_answer_cmd(){
    $question=$_REQUEST['question'];
    include ("question.php");
    $obj = new question();

    $row = $obj->get_answer($question);
    if($row){
    //generate the JSON message to echo to the browser
      echo '{"result":1,"answer":[';	//start of json object
      echo json_encode($row);			//convert the result array to json object
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "answer not got."}';
    }

  }
  // cmd18
  function add_score_cmd(){
    include ("score.php");
    $quiz = $_REQUEST['quiz'];
    $student = $_REQUEST['student'];
    $score = $_REQUEST['score'];
    $obj = new score();

    if($obj->add_score($quiz, $student, $score)){
        echo '{"result":1,"message": "added successfully"}';
    }else{
        echo '{"result":0,"message": "score not added."}';
    }
  }
  // cmd19
  function get_score_by_quiz_student_cmd(){
    $quiz=$_REQUEST['quiz'];
    $student=$_REQUEST['student'];
    include ("score.php");
    $obj = new score();

    $row = $obj->get_score_quiz_by_student($quiz, $student);
    if($row){
    //generate the JSON message to echo to the browser
      echo '{"result":1,"answer":[';	//start of json object
      echo json_encode($row);			//convert the result array to json object
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "score not got."}';
    }
  }
  // cmd20
  function get_score_quiz_by_student_cmd(){
    $student=$_REQUEST['student'];
    include ("score.php");
    $obj = new score();

    $row = $obj->get_score_quiz_by_student($student);
    if ($row){
    //return a JSON string to browser when request comes to get description
    //generate the JSON message to echo to the browser
      echo '{"result":1,"scorequiz":[';	//start of json object
      while($row){
      echo json_encode($row);			//convert the result array to json object
      $row=$obj->fetch();
      if ($row){
        echo ",";
      }
    }
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "scorequiz not got."}';
    }
  }
  // cmd21
  function add_s_t_pair_cmd(){
    include ("studentteacherpairing.php");
    $student = $_REQUEST['student'];
    $teacher = $_REQUEST['teacher'];
    $obj = new stp();

    if($obj->add_s_t_pair($student, $teacher)){
        echo '{"result":1,"message": "added successfully"}';
    }else{
        echo '{"result":0,"message": "student teacher pair not added."}';
    }
  }
  // cmd22
  function get_students_by_teacher_cmd(){
    $teacher=$_REQUEST['teacher'];
    include ("studentteacherpairing.php");
    $obj = new score();

    $row = $obj->get_students_by_teacher($teacher);
    if ($row){
    //return a JSON string to browser when request comes to get description
    //generate the JSON message to echo to the browser
      echo '{"result":1,"students":[';	//start of json object
      while($row){
      echo json_encode($row);			//convert the result array to json object
      $row=$obj->fetch();
      if ($row){
        echo ",";
      }
    }
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "students not got."}';
    }
  }
  // cmd23
  function get_teachers_by_student_cmd(){
    $student=$_REQUEST['student'];
    include ("studentteacherpairing.php");
    $obj = new stp();

    $row = $obj->get_teachers_by_student($student);
    if ($row){
    //return a JSON string to browser when request comes to get description
    //generate the JSON message to echo to the browser
      echo '{"result":1,"teachers":[';	//start of json object
      while($row){
      echo json_encode($row);			//convert the result array to json object
      $row=$obj->fetch();
      if ($row){
        echo ",";
      }
    }
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "teachers not got."}';
    }
  }
  // cmd24
  function get_feedback_by_student_teacher_cmd(){
    $teacher=$_REQUEST['teacher'];
    $student=$_REQUEST['student'];
    include ("studentteacherpairing.php");
    $obj = new stp();

    $row = $obj->get_feedback_by_student_teacher($student, $teacher);
    if($row){
    //generate the JSON message to echo to the browser
      echo '{"result":1,"feedback":[';	//start of json object
      echo json_encode($row);			//convert the result array to json object
      echo "]}";							//end of json array and object
    }
    else{
      echo '{"result":0,"message": "feedback not got."}';
    }
  }
  // cmd25
  function add_feedback_cmd(){
    include ("studentteacherpairing.php");
    $student = $_REQUEST['student'];
    $teacher = $_REQUEST['teacher'];
    $feedback = $_REQUEST['feedback'];
    $obj = new stp();

    if($obj->add_feedback($student, $teacher, $feedback)){
        echo '{"result":1,"message": "added successfully"}';
    }else{
        echo '{"result":0,"message": "feedback not added."}';
    }
  }

?>
