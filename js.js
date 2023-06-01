

/**TURNERO PARA FECHAS DE INSTALACIONES DE AIRES ACONDICIONADOS
   CODIGO PREGUNTA SI QUIERE INGRESAR COMO ADMINISTRADOR O CLIENTE
   MODO ADMINISTRADOR PERMITE INGRESAR 6 FECHAS 
   MODO CLIENTE SOLICITA INGRESAR 5 DATOS DE 3 CLIENTES 
   ARRAYS, METODO PUSH Y JOIN*/

const fechas = []; //  arreglo de fechas

let modo = prompt("SALUDOS. INGRESE 1 SI ES ADMINISTRADOR O CUALQUIER TECLA SI ES CLIENTE ");
if (modo == 1)
   {
      for(let m=1; m<=6; m++)
        {let fecha = prompt("Ingresa la fecha"); 
           
          if (fecha == '') 
            { 
                m-- ; 
              console.log(`SIN DATOS`);
            }
            else
            fechas.push(fecha);  //introduzco el contenido de nombre dentro de el arreglo ListaPersona
            console.log(`${fecha}`);
            alert (fechas.join("\n")) 
        }    
     
    }

 
{  

//solicita 5 datos de 3 personas y le agradece

const ListaPersona = []; //arreglo que contiene nombres

for(let j=1; j<=3; j++) 
{
  for(let i=1; i<=6; i++)
  {

    switch (i)
      {
       case 1: 
          let nombre  = prompt("Ingresa tu Nombre y Apellido"); //solicita nombre y apellido
           
          if (nombre == '') 
            { 
                i-- ; 
              console.log(`SIN DATOS`);
            }
            else
            ListaPersona.push(nombre);  //introduzco el contenido de nombre dentro de el arreglo ListaPersona
            console.log(`${nombre}`);
            alert(`buenos dias ${nombre} a continuacion le haremos unas breves preguntas con el fin de tener datos mas presison para agilizar la llegada del tecnico a su domicilio`);
            
          break
      
       case 2:  
         
          let direccion = prompt("Ingresa tu Direccion"); //solicita direccion
         
          if (direccion == '') 
            {
                i-- ; 
              console.log(`SIN DATOS`);
            }
            else
            ListaPersona.push(direccion); //introduzco el contenido de direccion dentro de el arreglo ListaPersona
            console.log(`${direccion}`);
    
          break
          
       case 3:  
          let numerodetelefono = prompt("Ingresa tu numero de Telefono"); //solicita numero de telefono
          
          if (numerodetelefono == '') 
          { 
            i-- ; 
            console.log(`SIN DATOS`);
          }
            else
            ListaPersona.push(numerodetelefono);  //introduzco el contenido de Telefono dentro de el arreglo ListaPersona
            console.log(`${numerodetelefono}`);
        
          break

        case 4:    
          let marcaytamaño = prompt("Ingresa marca y frigorias del aire acondicionado");  //solicita datos del aire acondicionado
          if (marcaytamaño == '') 
          { 
            i-- ; 
            console.log(`SIN DATOS`);
          }
          else
          ListaPersona.push(marcaytamaño);  //introduzco el contenido de marcayfrigorias dentro de el arreglo ListaPersona

          console.log(`${marcaytamaño}`);
        
          break

        case 5:   
          alert (fechas.join("\n"))
          let fechadisponible = prompt("elige una fechas disponible: ");  //solicita que elija una fecha disponible
           
          if (fechadisponible == '') 
          { 
            i-- ; 
            console.log(`SIN DATOS`);
          }
          else
          ListaPersona.push(fechadisponible); //introduzco el contenido de fechadisponible dentro de el arreglo ListaPersona
          console.log(`${fechadisponible}`);
         
          break

        case 6:
            alert (ListaPersona.join("\n"))   //muestra datos de la persona
      } 
  }
  
  alert("Gracias por confiar en nuestro sistema. Nos estaremos comunicando a la brevedad " );  //agradece por confiar en nuestros servicios
 
}}


 




