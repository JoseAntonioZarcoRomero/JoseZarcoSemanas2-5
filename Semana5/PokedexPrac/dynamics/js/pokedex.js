window.addEventListener("load", ()=>{
  const btnAgregar = document.getElementById("btn-agregar");
  const divAgregar = document.getElementById("contenedor-agregar");
  const btnEnviar = document.getElementById("btn-enviar");
  const buscador = document.getElementById("buscador");
  const divDatos = document.getElementById("contenedor-mostrar");
  const divResultados = document.getElementById("contenedor-resultados");
  const formNuevo = document.getElementById("form-nuevo");

  function verifDatos(){
    let todobien;
    if(formNuevo.nombre.value != ""){
      let datosForm = new FormData();
      datosForm.append("name",formNuevo.nombre.value);
      fetch("dynamics/php/nombres.php",{
        method:"POST",
        body:datosForm,
      })
        .then((response)=>{
          return response.json();
        })
        .then((datosJSON)=>{
          console.log(datosJSON);
          if(datosJSON.ok == true){
            todobien = true;
          } else {
            todobien = false;
            alert("Ya existe un pokemon con ese nombre");
          }
        });
    }
    if(formNuevo.altura.value < 1 || formNuevo.peso.value < 1 || (formNuevo.exp_base.value%1 != 0) || formNuevo.exp_base.value == "" || formNuevo.nombre.value == ""){
      if(formNuevo.nombre.value == "")
        alert("No se ingreso un nombre");
      if(formNuevo.altura.value < 1)
        alert("La altura debe ser un valor numerico positivo");
      if(formNuevo.peso.value < 1)
        alert("El peso debe ser un valor numerico positivo");
      if((formNuevo.exp_base.value % 1 != 0) || formNuevo.exp_base.value == "")
        alert("La experiencia debe ser un valor entero");
      todobien = false;
    } 
    return todobien;
  }

  btnAgregar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "block";
    divResultados.style.display = "none";
    divDatos.style.display = "none";
  });

  btnEnviar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "none";
    evento.preventDefault();
    let todobien = verifDatos();
    if(todobien === true){
      console.log(verifDatos());
      let datosForm = new FormData(formNuevo);
      fetch("dynamics/php/crear_pokemon.php",{
        method:"POST",
        body:datosForm,
      })
        .then((response)=>{
          return response.json();
        })
        .then((datosJSON)=>{
          if(datosJSON.ok == true){
            alert("Todo bien");
          } else {
            alert(datosJSON.texto);
          }
        });
    } else {      
      divAgregar.style.display = "block";
      divResultados.style.display = "none";
      divDatos.style.display = "none";
    }
  });

  fetch("dynamics/php/tipos.php")
    .then((response)=>{
      return response.json();
    })
    .then((datosJSON)=>{
      console.log(datosJSON);
      let selectTipos = document.getElementById("select-tipos");
      for(tipo of datosJSON){
        selectTipos.innerHTML+="<option value='"+tipo.id+"'>"+tipo.nombre+"</option>";
      }
    });

  buscador.addEventListener("focus",()=>{
    divDatos.style.display = "none";
    divResultados.style.display = "block";
    divAgregar.style.display = "none";
  });
  buscador.addEventListener("keyup", (evento) => {
    let termino = buscador.value;
    divResultados.innerHTML="";
    if(termino.length>=3){
      fetch("dynamics/php/pokemon.php?q="+termino)
      .then((response)=>{
        return response.json();
      })
      .then((datosJSON)=>{
        //Mostrar resultados
        console.log(datosJSON);
        for(pokemon of datosJSON){
          let div = document.createElement("div");
          div.innerHTML = pokemon.pok_name;
          div.dataset.id = pokemon.pok_id;
          div.classList.add("coincidencia");
          divResultados.appendChild(div);
        }
        if(datosJSON.length == 0){
          let div = document.createElement("div");
          div.innerHTML = "No se encontraron resultados";
          div.dataset.id = "vacio";
          div.classList.add("coincidencia");
          divResultados.appendChild(div);
        }
      });
    }
  });

  divResultados.addEventListener("click", (evento) =>{
    if(evento.target.classList.contains("coincidencia")){
      let id = evento.target.dataset.id;
      if(id != "vacio"){
        fetch("dynamics/php/pokemon.php?id="+id)
          .then((response)=>{
            return response.json();
          })
          .then((datosJSON)=>{
            if(datosJSON.ok == true){
              console.log(datosJSON);
              divDatos.innerHTML = "<div class='dato'><strong>Nombre</strong>"+datosJSON.datos.nombre+"</div>";
              divDatos.innerHTML += "<div class='dato'><strong>Altura</strong>"+datosJSON.datos.altura+"</div>";
              divDatos.innerHTML += "<div class='dato'><strong>Peso</strong>"+datosJSON.datos.peso+"</div>";
              divDatos.innerHTML += "<div class='dato'><strong>Tipo</strong>"+datosJSON.datos.tipo+"</div>";
              divDatos.innerHTML += "<button data-id="+id+" id='btn-eliminar'>Eliminar pokemon</button>";
              divDatos.innerHTML += "<button data-id="+id+" id='btn-actualizar'>Actualizar pokemon</button>";
              divDatos.style.display = "flex";
            }
          });
      }
    }
  });

  divDatos.addEventListener("click",(evento)=>{
    if(evento.target.id == "btn-eliminar"){
      let datosForm = new FormData();
      datosForm.append("id",evento.target.dataset.id);
      fetch("dynamics/php/borrar_pokemon.php",{
        method:"POST",
        body:datosForm,
      })
        .then((response)=>{
          return response.json();
        })
        .then((datosJSON)=>{
          if(datosJSON.ok == true){
            alert("Se elimino el pokemon");
            divDatos.style.display = "none";
          } else {
            alert("No se pudo eliminar");
          }
        });
    }
    if(evento.target.id == "btn-actualizar"){
      divAgregar.style.display = "block";
      divResultados.style.display = "none";
    }
  });

});