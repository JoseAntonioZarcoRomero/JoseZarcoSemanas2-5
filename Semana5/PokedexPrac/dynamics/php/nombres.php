<?php
    require "config.php";
    $con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);
    if(!$con){
        echo "No se pudo conectar a la base de datos";
    }
    else{
        $sql = "SELECT pok_name FROM pokemon";
        $res = mysqli_query($con, $sql);
        $resultados = [];
        while($row = mysqli_fetch_assoc($res)){
            $resultados[] = array("nombre" => $row["pok_name"]);
        }

        echo json_encode($resultados);
    }
?>