<?php

    define("DBUSER","");
    define("DBHOST","");
    define("PASSWORD","");
    define("DB","");

    function connect()
    {
        $con=mysqli_connect(DBHOST,DBUSER, PASSWORD, DB);
        
        if(!$con){
            mysqli_connect_error();
            mysqli_connect_errno();
            echo "No se pudo acceder a la base de datos";
        }
        return $con;
    }

?>