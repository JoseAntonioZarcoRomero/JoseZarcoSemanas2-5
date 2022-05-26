<?php
    require "config.php";
    $con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);
    if(!$con){
        echo "No se pudo conectar con la base de datos";
    } else {
        $id = (isset($_POST["id"]) && $_POST["id"] !="") ? $_POST["id"] : false;
        $sql = "DELETE FROM pokemon_types WHERE pok_id=$id";
        $res = mysqli_query($con, $sql);
        if($res === true){
            $sql = "DELETE FROM pokemon WHERE pok_id=$id";
            $res = mysqli_query($con, $sql);
            if($res === true){
                $respuesta = array("ok" => true);
                echo json_encode($respuesta);
            } else {
                // echo mysqli_error($con);
                $respuesta = array("ok" => false, "texto" => "No se pudo ingresar");
                echo json_encode($respuesta);
            } 
        } else {
            $respuesta = array("ok" => false, "texto" => "No se pudo ingresar");
            echo json_encode($respuesta);
        }
    }
?>