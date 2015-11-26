<?php

/**
 * author: Michael Annor
 * date: 22nd November, 2015
 * description: Class with queries to access the mwc_quizzine_score table
 */

include_once ("adb.php");

class score extends adb {

  /**
   * description: The add_parent function adds a parent record
   * @param varchar $username the parent's username for login
   * @param varchar $password the parent's password for login
   */
    function add_score($quiz, $student, $score){
      $str_query="insert into mwc_quizzine_score set quiz_id='$quiz', student_id='$student', score='$score'";
        return $this->query($str_query);
    }

    /**
     * description: The add_parent function adds a parent record
     */
      function get_score_by_quiz_student($quiz, $student){
        $str_query="select * from mwc_quizzine_score where quiz_id='$quiz', student_id='$student'";
          if(!$this->query($str_query)){
              return false;
          }
          return $this->fetch();
      }

      /**
       * description: The add_parent function adds a parent record
       */
        function get_score_quiz_by_student($student){
          $str_query="select score, quiz_id from mwc_quizzine_score where student_id='$student'";
            if(!$this->query($str_query)){
                return false;
            }
            return $this->fetch();
        }




}


?>
