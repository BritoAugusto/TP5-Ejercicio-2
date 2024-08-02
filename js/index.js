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
      alert(`Pertenece a la Generacion Z. Un rasgo característico de ésta generación es la 'Irreverencia 😋`);
    } else if (this.añoNacimiento <= 1993 && this.añoNacimiento >= 1981) {
      alert("Perteneces a la generacion Y (millennials). Un rasgo característico de ésta generación es la 'Frustración 😖'");
    } else if (this.añoNacimiento <= 1980 && this.añoNacimiento >= 1969) {
      alert(
        "Perteneces a la Generacion X. Un rasgo característico de ésta generación es la 'Obsesión al Éxito 😎'"
      );
    } else if (this.añoNacimiento <= 1968 && this.añoNacimiento >= 1949) {
      alert(
        "Perteneces a la Generacion Baby Boom. Un rasgo característico de ésta generación es la 'Ambición 🤑'"
      );
    } else if (this.añoNacimiento <= 1948 && this.añoNacimiento >= 1930) {
      alert(
        "Perteneces a la generacion Silent Generation(Los Niños de la posguerra). Un rasgo característico de ésta generación es la 'Austeridad 😐'"
      );
    }
  }
  mostrarDatos() {
    salidaNombre.innerHTML = `<strong>NombreyApellido: ${this.nombre}</strong>`;
    salidaEdad.innerHTML = `<strong>Edad: ${this.edad}</strong>`;
    salidaDni.innerHTML = `<strong>DNI: ${this.dni}</strong>`;
    salidaSexo.innerHTML = `<strong>Sexo: ${this.sexo}`;
    salidaPeso.innerHTML = `<strong>Peso: ${this.peso} Kg</strong>`;
    salidaAltura.innerHTML = `<strong>Altura: ${this.altura} Cm</strong>`;
    salidaAñoNacimiento.innerHTML = `<strong>Año de Nacimiento: ${this.añoNacimiento}</strong>`;
  }

  mayorEdad(){
    if (this.añoNacimiento > 2006) {
        alert('La persona ingresada No es Mayor de Edad');
    }else if (this.añoNacimiento <= 2006) {
         alert("La persona ingresada es Mayor de Edad");
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


