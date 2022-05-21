const nuevaTarea = document.getElementById("nuevaTarea");
const selectMateria = document.getElementById("materia");
const nuevaMateria = document.getElementById("nuevaMateria");
const btnAgregar = document.getElementById("btn-agregar");
const contLista = document.getElementById("contLista");
const listaTareas = document.getElementById("listaTareas");
const contador = document.getElementById("contador");
let materias = [];
let tareas = [];
let tareasAcabadas = 0;
let tareasTotales = 0;
let id_Tarea = 0;
selectMateria.addEventListener("click",()=>{
    if(selectMateria.value == "Otra"){
        nuevaMateria.style.display = "flex";
    } else {
        nuevaMateria.style.display = "none";
    }
});
btnAgregar.addEventListener("click",()=>{
    if(nuevaTarea.value != ""){
        let tExistente=0;
        for(let i=0; i<tareas.length; i++){
            if(nuevaTarea.value == tareas[i]){
                tExistente = 1;
            }
        }
        if(tExistente==0){
            if(selectMateria.value == "Otra"){
                if(nuevaMateria.value==""){
                    alert("No se ha ingresado una materia");
                } else {
                    let mExistente=0;
                    for(let i=0; i<materias.length; i++){
                        if(nuevaMateria.value == materias[i]){
                            mExistente = 1;
                        }
                    }
                    if(mExistente==0){
                        selectMateria.innerHTML += "<option value='"+nuevaMateria.value+"'>"+nuevaMateria.value+"</option>";
                        materias.push(nuevaMateria.value);
                        tareas.push(nuevaTarea.value);
                        nuevaTarea.style.borderBlockColor="black";
                        nuevaMateria.style.display = "none";
                        contLista.style.display = "flex";
                        contador.style.display = "block";
                        let divTarea = document.createElement("div");
                        divTarea.innerHTML = "<button class='boton' id='Completada'>Completada</button><button class='boton' id='Borrar'>Eliminar</button>"+nuevaMateria.value+": "+nuevaTarea.value;
                        divTarea.dataset.tarea = id_Tarea;
                        divTarea.dataset.nameTarea = nuevaTarea.value;
                        divTarea.addEventListener("click", btnPresionado);
                        id_Tarea++;
                        divTarea.classList.add("tarea");
                        listaTareas.appendChild(divTarea);
                        tareasTotales++;
                        actuarizaTareas();
                    } else {
                        alert("La materia ya existe");
                    }
                }
            } else {
                tareas.push(nuevaTarea.value);
                nuevaTarea.style.borderBlockColor="black";
                nuevaMateria.style.display = "none";
                contLista.style.display = "flex";
                contador.style.display = "block";
                let divTarea = document.createElement("div");
                divTarea.innerHTML = "<button class='boton' id='Completada'>Completada</button><button class='boton' id='Borrar'>Eliminar</button>"+selectMateria.value+": "+nuevaTarea.value;
                divTarea.dataset.tarea = id_Tarea;
                divTarea.dataset.nameTarea = nuevaTarea.value;
                divTarea.addEventListener("click", btnPresionado);
                id_Tarea++;
                divTarea.classList.add("tarea");
                listaTareas.appendChild(divTarea);
                tareasTotales++;
                actuarizaTareas();
            }
        } else {
            alert("La tarea ya existe");
        }
    } else {
        alert("No se ha ingresado una tarea");
        nuevaTarea.style.borderBlockColor="blue";
    }
});
function actuarizaTareas(){
    if(tareasTotales!=0){
        contador.innerHTML = tareasAcabadas+" tarea(s) completadas de "+tareasTotales;
    } else {
        contador.style.display = "none";
        contLista.style.display = "none";
    }
}
function btnPresionado(evento){
    let boton = evento.target;
    if(boton.id == "Completada"){
        if(boton.parentElement.style.backgroundColor == 'rgb(0, 95, 95)'){
            boton.parentElement.style.backgroundColor = 'darkcyan';
            tareasAcabadas--;
        } else{
            boton.parentElement.style.backgroundColor = 'rgb(0, 95, 95)';
            tareasAcabadas++;
        }
    } else if(boton.id == "Borrar"){
        boton.parentElement.outerHTML = "";
        let nameTarea = evento.currentTarget.dataset.nameTarea;
        let posicionTarea = tareas.indexOf(nameTarea);
        tareas.splice(posicionTarea,1);
        if(boton.parentElement.style.backgroundColor == 'rgb(0, 95, 95)'){
            tareasAcabadas--;
        }
        tareasTotales--;
    }
    actuarizaTareas();
}