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
    # code...
  }
// cmd2
  function get_parent_cmd(){
    # code...
  }
// cmd3
  function get_students_by_parent_cmd(){
    # code...
  }
// cmd4
  function get_parent_phone_by_student_cmd(){
    # code...
  }
  // cmd5
function add_parent_cmd(){
  # code...
}
  // cmd6
  function add_teacher_cmd(){
    # code...
  }
  // cmd7
  function add_category_cmd(){
    # code...
  }
  // cmd8
  function get_category_by_id_cmd(){
    # code...
  }
  // cmd9
  function get_all_categories_cmd(){
    # code...
  }
  // cmd10
  function FunctionName(){
    # code...
  }
  // cmd11
  function add_quiz_cmd(){
    # code...
  }
  // cmd12
  function get_quizzes_by_teacher_cmd(){
    # code...
  }
  // cmd13
  function get_quizzes_by_category_cmd(){
    # code...
  }
  // cmd14
  function get_all_quizes_cmd(){
    # code...
  }
  // cmd15
  function add_question_cmd(){
    # code...
  }
  // cmd16
  function get_questions_by_quiz_cmd(){
    # code...
  }
  // cmd17
  function get_answer_cmd(){
    # code...
  }
  // cmd18
  function add_score_cmd(){
    # code...
  }
  // cmd19
  function get_score_by_quiz_student_cmd(){
    # code...
  }
  // cmd20
  function get_score_quiz_by_student_cmd(){
    # code...
  }
  // cmd21
  function add_s_t_pair_cmd(){
    # code...
  }
  // cmd22
  function get_students_by_teacher_cmd(){
    # code...
  }
  // cmd23
  function get_teachers_by_student_cmd(){
    # code...
  }
  // cmd24
  function get_feedback_by_student_teacher_cmd(){
    # code...
  }
  // cmd25
  function add_feedback_cmd(){
    # code...
  }

?>
