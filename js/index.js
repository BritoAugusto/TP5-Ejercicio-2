/*2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación. 
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

*/

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }
  mostrarGeneracion() {
    if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      alert(`pertenece a la Generacion Z`);
    } else if (this.añoNacimiento <= 1993 && this.añoNacimiento >= 1981) {
      alert("Perteneces a la generacion Y (millennials)");
    } else if (this.añoNacimiento <= 1980 && this.añoNacimiento >= 1969) {
      alert("Perteneces a la Generacion X");
    } else if (this.añoNacimiento <= 1968 && this.añoNacimiento >= 1949) {
      alert("Perteneces a la Generacion Baby Boom");
    } else if (this.añoNacimiento <= 1948 && this.añoNacimiento >= 1930) {
      alert(
        "Perteneces a la generacion Silent Generation(Los Niños de la posguerra)"
      );
    }
  }
  mostrarDatos() {
    salidaNombre.innerHTML = `Nombre: ${this.nombre}`;
    salidaEdad.innerHTML = `Edad: ${this.edad}`;
    salidaDni.innerHTML = `DNI: ${this.dni}`;
    salidaSexo.innerHTML = `Sexo: ${this.sexo}`;
    salidaPeso.innerHTML = `Peso: ${this.peso}`;
    salidaAltura.innerHTML = `Altura: ${this.altura}`;
    salidaAñoNacimiento.innerHTML = `Año de Nacimiento: ${this.añoNacimiento}`;
  }

  mayorEdad(){
    if (this.añoNacimiento > 2006) {
        alert('No es Mayor de Edad');
    }else if (this.añoNacimiento <= 2006) {
         alert("Es Mayor de Edad");
    }
  }
}
const formulario = document.querySelector("form");
const salidaNombre = document.querySelector("#salidaNombre");
const salidaEdad = document.querySelector("#salidaEdad");
const salidaDni = document.querySelector("#salidaDni");
const salidaSexo = document.querySelector("#salidaSexo");
const salidaPeso = document.querySelector("#salidaPeso");
const salidaAltura = document.querySelector("#salidaAltura");
const salidaAñoNacimiento = document.querySelector("#salidaAñoNacimiento");
const btnGeneracion = document.querySelector("#btnGeneracion");
const btnEdad = document.querySelector('#btnEdad');
const botonesMostrar = document.querySelector('#articleBotones');
const btnGenerarPersona = document.querySelector("#btnGenerarPersona");



const obtenerDatosFormulario = ()=>{
const inputNombre = document.querySelector("#inputNombre").value;
const inputEdad = document.querySelector("#inputEdad").value;
const inputDni = document.querySelector("#inputDni").value;
const inputSexo = document.querySelector("#inputSexo").value;
const inputPeso = document.querySelector("#inputPeso").value;
const inputAltura = document.querySelector("#inputAltura").value;
const inputAñoNacimiento = document.querySelector("#inputAñoNacimiento").value;
return new Persona(
  inputNombre,
  inputEdad,
  inputDni,
  inputSexo,
  inputPeso,
  inputAltura,
  inputAñoNacimiento
);
}


const mostrarNombre = (e) => {
  e.preventDefault();
  const personaRandom = obtenerDatosFormulario();
  personaRandom.mostrarDatos();
   botonesMostrar.classList.remove('d-none');
  botonesMostrar.classList.add('d-block');
 
};

const mostrarGeneracion = () => {
  const personaRandom = obtenerDatosFormulario();
  personaRandom.mostrarGeneracion();
  
};

const mayorEdad = ()=>{
    const personaRandom = obtenerDatosFormulario();
    personaRandom.mayorEdad();
}

const resetForm = ()=> {
  formulario.reset();
   formulario.reset();
   salidaNombre.innerHTML = "";
   salidaEdad.innerHTML = "";
   salidaDni.innerHTML = "";
   salidaSexo.innerHTML = "";
   salidaPeso.innerHTML = "";
   salidaAltura.innerHTML = "";
   salidaAñoNacimiento.innerHTML = "";
   botonesMostrar.classList.remove("d-block");
   botonesMostrar.classList.add("d-none");
}


formulario.addEventListener("submit", mostrarNombre);
btnGeneracion.addEventListener("click", mostrarGeneracion);
btnEdad.addEventListener('click', mayorEdad);


