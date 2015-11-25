<?php

/**
 * author: Michael Annor
 * date: 22nd November, 2015
 * description: Class with queries to access the mwc_quizzine_student table
 */

include_once ("adb.php");

class student extends adb {

  /**
   * description: The add_student function adds a student record
   * @param varchar $username the users username for login
   * @param varchar $password the users password for login
   * @param varchar $parent the user's parent's username
   */
    function add_student($username, $password, $parent){
      $str_query="insert into mwc_quizzine_student set username='$username',password='$password',
        parent='$parent'";
        return $this->query($str_query);
    }

    function get_parent($username){
      $str_query="select mwc_quizzine_student.parent, mwc_quizzine_parent.username, mwc_quizzine_parent.phone_number
       from mwc_quizzine_student, mwc_quizzine_parent where mwc_quizzine_student.username='$username'";
        if(!$this->query($str_query)){
            return false;
        }
        return $this->fetch();
    }

    function get_students_by_parent($parent){
      $str_query="select username from mwc_quizzine_student where parent='$parent'";
        if(!$this->query($str_query)){
            return false;
        }
        return $this->fetch();
    }

    function get_parent_phone_by_student($student){
      $str_query="select phone_number from mwc_quizzine_student, mwc_quizzine_parent where mwc_quizzine_student.username='$student'";
        if(!$this->query($str_query)){
            return false;
        }
        return $this->fetch();
    }

}


?>
