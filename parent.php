<?php

/**
 * author: Michael Annor
 * date: 26th November, 2015
 * description: Class with queries to access the mwc_quizzine_parent table
 */

include_once ("adb.php");

class student extends adb {

  /**
   * description: The add_parent function adds a parent record
   * @param varchar $username the parent's username for login
   * @param varchar $password the parent's password for login
   * @param varchar $phone_number the parent's phone number
   */
    function add_parent($username, $password, $phone_number){
      $str_query="insert into mwc_quizzine_parent set username='$username',password='$password',
        phone_number='$phone_number'";
        return $this->query($str_query);
    }


}


?>
