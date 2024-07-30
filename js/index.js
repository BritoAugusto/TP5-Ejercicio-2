/*2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación. */

class Persona  {
constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento){
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;

}
mostrarDatos(){
    document.write(`<ul>
        <li>${this.nombre}</li>
        <li>${this.edad}</li>
        <li>${this.dni}</li>
        <li>${this.sexo}</li>
        <li>${this.peso}</li>
        <li>${this.altura}</li>
        <li>${this.añoNacimiento}</li>
        </ul>`)
}
}
const formulario = document.querySelector('form');
const nombrePersona = document.querySelector('#nombreIngresado');

const mostrarNombre = (e)=>{
    e.preventDefault();
 const inputNombre = document.querySelector('#nombre').value;
nombrePersona.innerHTML= `Hola ${inputNombre}`;
}
// console.log(inputNombre);
const ricardo = new Persona('Ricardo', 24, 41817427, 'Masculino', 75, 1.75, 1999);
formulario.addEventListener('submit', mostrarNombre)