/*Constantes formulario
-------------------------------------------------------------*/
const nPicos = document.getElementById("nPicos");
const picudo = document.getElementById("picudo");
const color = document.getElementById("color");
const relleno = document.getElementById("relleno");
/*Eventos formulario
-------------------------------------------------------------*/
nPicos.addEventListener("change", actualizaCanvas);
picudo.addEventListener("change", actualizaCanvas);
color.addEventListener("change", actualizaCanvas);
relleno.addEventListener("change", actualizaCanvas);
/*Canvas
-------------------------------------------------------------*/
const canvas = document.getElementById("estrella");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = 'black';
ctx.strokeRect(0,0,400,400);
function actualizaCanvas(){
    let numPicos = nPicos.value;
    let picudez = picudo.value;
    let colorStar = color.vale;
    let rellenoStar = relleno.value;
    alert("Cambie el canvas"+"|"+numPicos+"|"+picudez+"|"+colorStar+"|"+rellenoStar);
    ctx.beginPath();
    ctx.closePath();
}