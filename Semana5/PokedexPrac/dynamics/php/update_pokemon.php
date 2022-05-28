<?php
    require "config.php";
    $con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);
    if(!$con){
        echo "No se pudo conectar con la base de datos";
    } else {
        $nombre = (isset($_POST["nombre"]) && $_POST["nombre"] !="") ? $_POST["nombre"] : false;
        $altura = (isset($_POST["altura"]) && $_POST["altura"] !="") ? $_POST["altura"] : false;
        $peso = (isset($_POST["peso"]) && $_POST["peso"] !="") ? $_POST["peso"] : false;
        $exp_base = (isset($_POST["exp_base"]) && $_POST["exp_base"] !="") ? $_POST["exp_base"] : false;
        $tipo = (isset($_POST["tipo"]) && $_POST["tipo"] !="") ? $_POST["tipo"] : false;

        $sql = "UPDATE pokemon SET pok_name='$nombre',pok_height=$altura,pok_weight=$peso,pok_base_experience=$exp_base WHERE pok_id=$id";
        // $res = mysqli_query($con, $sql);
        // if($res === true){
        //     $respuesta = array("ok" => true);
        //     echo json_encode($respuesta);
        // } else {
        //     $respuesta = array("ok" => false, "texto" => "No se pudo ingresar");
        //     echo json_encode($respuesta);
        // }
    }
?>