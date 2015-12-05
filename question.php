<?php

/**
 * author: Michael Annor
 * date: 26th November, 2015
 * description: Class with queries to access the mwc_quizzine_questions table
 */

include_once ("adb.php");

class question extends adb {

  /**
   * description: The add_parent function adds a parent record
   * @param varchar $username the parent's username for login
   * @param varchar $password the parent's password for login
   */
    function add_question($quiz, $questiontext, $a, $b, $c, $d, $answer){
      $str_query="insert into mwc_quizzine_questions set quiz_id='$quiz', question_text='$questiontext', option_a='$a',
       option_b='$b', option_c='$c', option_d='$d', answer='$answer'";
        return $this->query($str_query);
    }

    /**
     * description: The add_parent function adds a parent record
     */
      function get_questions_by_quiz($quiz){
        $str_query="select * from mwc_quizzine_questions where quiz_id='$quiz'";
          if(!$this->query($str_query)){
              return false;
          }
          return $this->fetch();
      }

      /**
       * description: The add_parent function adds a parent record
       */
        function get_answer($question){
          $str_query="select answer from mwc_quizzine_questions where question_id='$question'";
            if(!$this->query($str_query)){
                return false;
            }
            return $this->fetch();
        }




}


?>
