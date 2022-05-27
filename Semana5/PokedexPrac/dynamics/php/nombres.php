<?php
    require "config.php";
    $con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);
    if(!$con){
        echo "No se pudo conectar a la base de datos";
    }
    else{
        $nombreExist = false;
        $nombreIntroducido = (isset($_POST["name"]) && $_POST["name"] != "") ? $_POST["name"] : false;
        $sql = "SELECT pok_name FROM pokemon";
        $res = mysqli_query($con, $sql);
        $resultados = [];
        while($row = mysqli_fetch_assoc($res)){
            $resultados[] = $row["pok_name"];
        }
        for($i=0; $i<count($resultados) ;$i++){
            if($nombreIntroducido == $resultados[$i]){
                $nombreExist = true;
            }
        }
        if($nombreExist === true){
            $respuesta = array("ok" => false);
        } else {
            $respuesta = array("ok" => true);
        }
        echo json_encode($respuesta);
    }
?>