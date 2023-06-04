


// INICIO COMO ANDMINISTRADOR


const boton1 = document.getElementById("administrador"); //igualo el boton administrador a boton1
  boton1.addEventListener("click", function(){  //genero evento para que inicie funcion al hacer click en boton administrador
    alert("Haz hecho clic en el botón ADMINISTRADOR!");
    
 const fechas = []; //  arreglo de fechas 
 
 
 
 const fecha0 = document.getElementById("valor0");
 const fecha1 = document.getElementById("valor1");
 const fecha2 = document.getElementById("valor2");
 const fecha3 = document.getElementById("valor3");
 const fecha4 = document.getElementById("valor4");
 
 const fechaboton = document.getElementById("valorboton1");
     fechaboton.addEventListener("click", function F(){
       
            fechas.push(fecha0.value);
            console.log(`${fecha0.value}`);
            fechas.push(fecha1.value);  
            console.log(`${fecha1.value}`);
            fechas.push(fecha2.value);  
            console.log(`${fecha2.value}`);
            fechas.push(fecha3.value);  
            console.log(`${fecha3.value}`);
            fechas.push(fecha4.value);  
            console.log(`${fecha4.value}`);
           
       const fechass = document.getElementById("fechass");
        fechass.innerHTML = 
        `<p>${fecha0.value}</p>
         <p>${fecha1.value}</p>
         <p>${fecha2.value}</p>
         <p>${fecha3.value}</p>
         <p>${fecha4.value}</p>`;
      
        alert (fechas.join("\n"))
       
           
     });
    
    });
  


    


//INICIO COMO CLIENTE
const boton2 = document.getElementById("cliente");  //igualo el boton cliente al boton2

boton2.addEventListener("click", function(){  //genero evento para que inicie funcion al hacer click en boton cliente
    alert("Haz hecho clic en el botón cliente!");

    const ListaPersona = []; //arreglo que contiene datos personales
 
 
 
 const Nombre = document.getElementById("nombre");
 const Direccion = document.getElementById("direccion");
 const NumerodeTelefono = document.getElementById("numerodetelefono");
 const MarcayTamaño = document.getElementById("marcaytamaño");
 const FechaDisponible = document.getElementById("fechadisponible");
 
 const DatosPersonales = document.getElementById("valorboton2");
    DatosPersonales.addEventListener("click", function Fn(){
       
            ListaPersona.push(Nombre.value);
              console.log(`${Nombre.value}`);
            ListaPersona.push(Direccion.value);  
              console.log(`${Direccion.value}`);
            ListaPersona.push(NumerodeTelefono.value);  
              console.log(`${NumerodeTelefono.value}`);
            ListaPersona.push(MarcayTamaño.value);  
              console.log(`${MarcayTamaño.value}`);
            ListaPersonas.push(FechaDisponible.value);  
              console.log(`${FechaDisponible.value}`);

              alert (ListaPersona.join("\n"))
           
       const DatosP = document.getElementById("DatosP");
        DatosP.innerHTML = 
        `<p>${Nombre.value}</p>
         <p>${Direccion.value}</p>
         <p>${NumerodeTelefono.value}</p>
         <p>${MarcayTamaño.value}</p>
         <p>${FechaDisponible.value}</p>`;
      
        alert (ListaPersona.join("\n"))
       
           
     });
    
    });
