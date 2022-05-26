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

        $sql = "INSERT INTO pokemon VALUES(null,'$nombre',$altura,$peso,$exp_base)";
        $res = mysqli_query($con, $sql);
        if($res === true){
            $id = mysqli_insert_id($con);//devuelve id del último registro insertado

            $sql="INSERT INTO pokemon_types VALUES($id,$tipo,1)";
            mysqli_query($con, $sql);

            $respuesta = array("ok" => true, "id" => $id, "texto" => "No se pudo ingresar");
            echo json_encode($respuesta);
        } else {
            $respuesta = array("ok" => false, "texto" => "No se pudo ingresar");
            echo json_encode($respuesta);
        }
    }
?>