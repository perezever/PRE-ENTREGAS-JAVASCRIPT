



// ESTE CODIGO REPRESENTA UN TURNERO PARA EMPRESA DE INSTALACION DE AIRES ACONDICIONADOS
// PERMITE INGRESAR DE 2 FORMAS, 
// MODO ADMINISTRADOR_ NOS DEJA CARGAR FECHAS CON HORARIO LOCAL Y  GUARDARLOS
// PARA LUEGO MOSTRARLO COMO OCPIONES PERMITIENDO QUE ELIJA EL USUARIO
// MODO CLIENTE_ NOS SOLICITA INGRESAR DATOS DEL CLIENTE Y LE SUMA LA FECHA QUE ELIJA DE LAS ANTES CARGADAS

//INTERACTUAMOS ENTRE HTML, JAVASCRIPT Y CCS GENERANDO EVENTOS UTILIZANDO INPUT, BOTONES, GETELEMENT, PREVENTDEFAULT,
//ARREGLOS, INNERHTML Y GUARDANDO DATOS EN NAVEGADOR CON LOCALSTORAGE Y  JSON.


// INICIO COMO ANDMINISTRADOR

const boton1 = document.getElementById("administrador"); //igualo el boton administrador a boton1
boton1.addEventListener("click", function F(event) {  //genero evento para que inicie funcion al hacer click en boton administrador
  console.log("Haz hecho clic en el botón ADMINISTRADOR!");

  event.preventDefault(event);  //Evito que se recargue la pagina al precionar el boton id: administrador

  const fechas = []; //  arreglo de fechas 


  const fecha0 = document.getElementById("valor0");
  const fecha1 = document.getElementById("valor1");
  const fecha2 = document.getElementById("valor2");
  const fecha3 = document.getElementById("valor3");
  const fecha4 = document.getElementById("valor4");

  const fechaboton = document.getElementById("valorboton1");

  fechaboton.addEventListener("click", function Fe(event) {
    event.preventDefault(event); //Evito que se recargue la pagina al precionar el boton id: fechas

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

    console.log(fechas.join("\n"));


  });

});
//-------------------------------------------------------------------------------  

//INICIO COMO CLIENTE
const boton2 = document.getElementById("cliente");  //igualo el boton cliente al boton2
boton2.addEventListener("click", function Fm(event) {  //genero evento para que inicie funcion al hacer click en boton cliente
  console.log("Haz hecho clic en el botón cliente!");
  event.preventDefault(event); // Evito que se recargue la pagina al precionar el boton id: cliente

  const ListaPersona = []; //arreglo que contiene datos personales



  const Nombre = document.getElementById("nombre");
  const Direccion = document.getElementById("direccion");
  const NumerodeTelefono = document.getElementById("numerodetelefono");
  const MarcayTamaño = document.getElementById("marcaytamaño");


  const DatosPersonales = document.getElementById("valorboton2");
  DatosPersonales.addEventListener("click", function Fn(event) {
    event.preventDefault(event); // Evito que se recargue la pagina al precionar el boton id: valorboton2

    ListaPersona.push(Nombre.value);
    console.log(`${Nombre.value}`);
    ListaPersona.push(Direccion.value);
    console.log(`${Direccion.value}`);
    ListaPersona.push(NumerodeTelefono.value);
    console.log(`${NumerodeTelefono.value}`);
    ListaPersona.push(MarcayTamaño.value);
    console.log(`${MarcayTamaño.value}`);
    const FechaDisponible = document.getElementById("fechadisponible"); // llamo a fechadisponible
    const ValorBoton3 = document.getElementById("valorboton3");  // llamo a valorboton3
    ValorBoton3.addEventListener("click", function (event) {  //genero un evento con la accion del boton3
      event.preventDefault(event); // Evito que se recargue la pagina al precionar el boton id: valorboton3
      ListaPersona.push(FechaDisponible.value);
      console.log(`${FechaDisponible.value}`);


      console.log(ListaPersona.join("\n"));



      const DatosP = document.getElementById("DatosP");
      DatosP.innerHTML =
        `<p>${Nombre.value}</p>
         <p>${Direccion.value}</p>
         <p>${NumerodeTelefono.value}</p>
         <p>${MarcayTamaño.value}</p>
         <p>${FechaDisponible.value}</p>`;

      //....................................................   
     
      // Se guarda en localStorage despues de JSON stringificarlo 
      localStorage.setItem('myArray', JSON.stringify(ListaPersona));

      // Obtener el arreglo de localStorage

      var array = localStorage.getItem('myArray');

      // Se parsea para poder ser usado en js con JSON.parse :)
      ListaPersona = JSON.parse(ListaPersona);
     
     
      //.....................................................
      const Agradece = document.getElementById("agradece");
      Agradece.innerHTML =
        `<p>Gracias por confiar en nuestro sistema. Nos estaremos comunicando a la brevedad </p>`;


    });
  });
});