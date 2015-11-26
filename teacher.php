<?php

/**
 * author: Michael Annor
 * date: 22nd November, 2015
 * description: Class with queries to access the mwc_quizzine_teacher table
 */

include_once ("adb.php");

class teacher extends adb {

  /**
   * description: The add_parent function adds a parent record
   * @param varchar $username the parent's username for login
   * @param varchar $password the parent's password for login
   */
    function add_teacher($username, $password){
      $str_query="insert into mwc_quizzine_teacher set username='$username',password='$password'";
        return $this->query($str_query);
    }


}


?>
