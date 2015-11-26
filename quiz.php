<?php

/**
 * author: Michael Annor
 * date: 26th November, 2015
 * description: Class with queries to access the mwc_quizzine_quiz table
 */

include_once ("adb.php");

class quiz extends adb {

  /**
   * description: The add_parent function adds a parent record
   * @param varchar $category the parent's username for login
   */
    function add_quiz($quiz, $teacher, $category){
      $str_query="insert into mwc_quizzine_quiz set quiz_id='$quiz', teacher_id='$teacher', category_id='$category'";
        return $this->query($str_query);
    }

    /**
     * description: The add_parent function adds a parent record
     * @param varchar $category the parent's username for login
     */
      function get_quizzes_by_teacher($teacher){
        $str_query="select * from mwc_quizzine_quiz where teacher_id='$teacher'";
          if(!$this->query($str_query)){
              return false;
          }
          return $this->fetch();
      }

      /**
       * description: The add_parent function adds a parent record
       * @param varchar $category the parent's username for login
       */
        function get_quizzes_by_category($category){
          $str_query="select * from mwc_quizzine_quiz where category_id='$category'";
            if(!$this->query($str_query)){
                return false;
            }
            return $this->fetch();
        }


      /**
       * description: The add_parent function adds a parent record
       */
        function get_all_quizes(){
          $str_query="select * from mwc_quizzine_quiz";
            if(!$this->query($str_query)){
                return false;
            }
            return $this->fetch();
        }


}


?>
