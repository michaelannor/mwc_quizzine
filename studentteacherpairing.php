<?php

/**
 * author: Michael Annor
 * date: 22nd November, 2015
 * description: Class with queries to access the mwc_quizzine_student_teacher table
 */

include_once ("adb.php");

class score extends adb {

  /**
   * description: The add_parent function adds a parent record
   * @param varchar $username the parent's username for login
   * @param varchar $password the parent's password for login
   */
    function add_stp($student, $teacher){
      $str_query="insert into mwc_quizzine_student_teacher set student_id='$student', teacher_id='$teacher'";
        return $this->query($str_query);
    }

    /**
     * description: The add_parent function adds a parent record
     */
      function get_students_by_teacher($teacher){
        $str_query="select student_id from mwc_quizzine_student_teacher where teacher_id='$teacher'";
          if(!$this->query($str_query)){
              return false;
          }
          return $this->fetch();
      }

      /**
       * description: The add_parent function adds a parent record
       */
        function get_teachers_by_student($student){
          $str_query="select teacher_id from mwc_quizzine_student_teacher where student_id='$student'";
            if(!$this->query($str_query)){
                return false;
            }
            return $this->fetch();
        }

      /**
       * description: The add_parent function adds a parent record
       */
        function get_feedback_by_student_teacher($student, $teacher){
          $str_query="select feedback from mwc_quizzine_student_teacher where student_id='$student', teacher_id='$teacher'";
            if(!$this->query($str_query)){
                return false;
            }
            return $this->fetch();
        }

        /**
         * description: The add_parent function adds a parent record
         * @param varchar $username the parent's username for login
         * @param varchar $password the parent's password for login
         */
          function add_feedback($student, $teacher, $feedback){
            $str_query="update mwc_quizzine_student_teacher set feedback='$feedback' where student_id='$student', teacher_id='$teacher'";
              return $this->query($str_query);
          }

}


?>
