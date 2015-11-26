<?php

/**
 * author: Michael Annor
 * date: 26th November, 2015
 * description: Class with queries to access the mwc_quizzine_categories table
 */

include_once ("adb.php");

class category extends adb {

  /**
   * description: The add_parent function adds a parent record
   * @param varchar $category the parent's username for login
   */
    function add_category($category){
      $str_query="insert into mwc_quizzine_categories set category_name='$category'";
        return $this->query($str_query);
    }

    /**
     * description: The add_parent function adds a parent record
     * @param varchar $category the parent's username for login
     */
      function get_category_by_id($category){
        $str_query="select * from mwc_quizzine_categories where category_id='$category'";
          if(!$this->query($str_query)){
              return false;
          }
          return $this->fetch();
      }

      /**
       * description: The add_parent function adds a parent record
       */
        function get_all_categories(){
          $str_query="select * from mwc_quizzine_categories";
            if(!$this->query($str_query)){
                return false;
            }
            return $this->fetch();
        }


}


?>
