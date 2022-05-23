/*Constantes formulario
-------------------------------------------------------------*/
const formcambie = document.getElementById("cambie");//Contenedor
const nPicos = document.getElementById("nPicos");
const picudo = document.getElementById("picudo");
const color = document.getElementById("color");
const relleno = document.getElementById("relleno");
/*Eventos formulario
-------------------------------------------------------------*/
// formcambie.addEventListener("change",actualizaCanvas);//Si altero datos del formulario actualizo canvaas
/*Canvas
-------------------------------------------------------------*/
const canvas = document.getElementById("estrella");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = 'black';
ctx.strokeRect(0,0,canvas.width,canvas.height);
// function actualizaCanvas(){
    let numPicos = nPicos.value;
    // if(numPicos == ""){
    //     alert("Por favor ingresa un número de picos")
    // } else if (numPicos < 4 || numPicos > 30){
    //     alert("El número de picos ingresado es inválido");
    // } else {
        let picudez = picudo.value;
        let colorStar = color.value;
        let rellenoStar = relleno.checked;
        // alert("Cambie el canvas"+"|"+numPicos+"|"+picudez+"|"+colorStar+"|"+rellenoStar);
        /*Estrella
        ----------------------------------------------------------------*/
        numPicos = 10;
        picudez = 100;
        let xNueva = 200;
        let yNueva = 0;
        let angulo = 360/numPicos;
        ctx.beginPath();

        ctx.moveTo(200,0);

        let angulo3 = ((angulo)*(3/4)+(angulo)*0)*Math.PI/180;
        let angulo1 = ((angulo)*(1/4)+(angulo)*0)*Math.PI/180;

        for(let i=0; i<numPicos; i++){
            let anguloR = ((angulo)*(3/4)+(angulo)*i)*Math.PI/180;
            let desplazarX = 50 * Math.cos(anguloR);
            let desplazarY = 50 * Math.sin(anguloR);
            xNueva += desplazarX;
            yNueva +=desplazarY;
            ctx.lineTo(xNueva,yNueva);
            
            anguloR = ((angulo)*(1/4)+(angulo)*i)*Math.PI/180;
            desplazarX = 50 * Math.cos(anguloR);
            desplazarY = 50 * Math.sin(anguloR);
            xNueva += desplazarX;
            yNueva +=desplazarY;
            ctx.lineTo(xNueva,yNueva);



            // let anguloR = ((3/4 + i)*2*Math.PI/numPicos);
            // let desplazarX = 50 * Math.cos(anguloR);
            // let desplazarY = 50 * Math.sin(anguloR);
            // ctx.lineTo(desplazarX,desplazarY);
            
            // // anguloR = ((angulo)*(1/4)+(angulo)*i)*Math.PI/180;
            // anguloR = ((1/4 + i)*2*Math.PI/numPicos);
            // desplazarX = 50 * Math.cos(anguloR);
            // desplazarY = 50 * Math.sin(anguloR);
            // ctx.lineTo(desplazarX,desplazarY);
        }



        /*dibujo
        ----------------------------------------------------------------*/
        










        ctx.stroke();
        /*Agrega colores
        -------------------------------------------------------------*/
        // ctx.fillStyle = 'aliceblue';
        // if(rellenoStar == true){
        //     ctx.fillStyle = color.value;
        // }
        // ctx.fill();
        // ctx.strokeStyle = color.value;
        // ctx.stroke();
        // ctx.closePath();
    // }
// }