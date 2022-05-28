<?php
    require "config.php";
    $con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);
    if(!$con){
        echo "No se pudo conectar con la base de datos";
    } else {
        $id = (isset($_POST["id"]) && $_POST["id"] != "") ? $_POST["id"] : false;

        $todobien=0;
        // PLANTILLA
        // $sql = "DELETE FROM . WHERE pok_id=$id";
        // $res = mysqli_query($con, $sql);
        // if($res === true){

        // } else {
        //     $respuesta = array("ok" => false, "texto" => "No se pudo ingresar");
        //     echo json_encode($respuesta);
        // }

        // PETICIONES
        $peticion[0] = "DELETE FROM base_stats WHERE pok_id=$id";
        // $peticion[1] = "DELETE FROM habitat_view WHERE pok_id=$id";
        // $peticion[2] = "DELETE FROM pok_abilities WHERE pok_id=$id";
            // $peticion[1] = "DELETE FROM pokemon_total WHERE pok_id=$id";
            // $peticion[2] = "DELETE FROM top_10_view WHERE pok_id=$id";
        $peticion[1] = "DELETE FROM pokemon_abilities WHERE pok_id=$id";
        $peticion[2] = "DELETE FROM pokemon_moves WHERE pok_id=$id";
        $peticion[3] = "DELETE FROM pokemon_evolution_matchup WHERE pok_id=$id";
        // $peticion[8] = "DELETE FROM att_def_hp WHERE pok_id=$id";
        $peticion[4] = "DELETE FROM pokemon_types WHERE pok_id=$id";
        $peticion[5] = "DELETE FROM pokemon WHERE pok_id=$id";

        // Elimina registros de tablas
        for($i=0; $i<count($peticion);$i++){
            $res = mysqli_query($con, $peticion[$i]);
            if($res === true){
                $todobien++;
            } else {
                echo mysqli_error($con);
                $respuesta = array("ok" => false, "texto" => "No se pudo ingresar");
                echo json_encode($respuesta).$i;
            }
        }
        if($todobien == 6){
            $respuesta = array("ok" => true);
            echo json_encode($respuesta);
        }
        // $sql = "DELETE FROM . WHERE pok_id=$id";
        // $res = mysqli_query($con, $sql);
        // if($res === true){

        // } else {
        //     $respuesta = array("ok" => false, "texto" => "No se pudo ingresar");
        //     echo json_encode($respuesta);
        // }


        // $sql = "DELETE FROM pokemon_types WHERE pok_id=$id";
        // $res = mysqli_query($con, $sql);
        // if($res === true){
        //     $sql = "DELETE FROM pokemon WHERE pok_id=$id";
        //     $res = mysqli_query($con, $sql);
        //     if($res === true){
        //         $respuesta = array("ok" => true);
        //         echo json_encode($respuesta);
        //     } else {
        //         echo mysqli_error($con);
        //         $respuesta = array("ok" => false, "texto" => "No se pudo ingresar");
        //         echo json_encode($respuesta);
        //     } 
        // } else {
        //     $respuesta = array("ok" => false, "texto" => "No se pudo ingresar");
        //     echo json_encode($respuesta);
        // }
    }
?>