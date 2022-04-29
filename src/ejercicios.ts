//ejercicio 1

let paso1: string = "este es mi paso 1";
let paso2: string = "este es mi paso 2";
let titulo: string = "como hacer una torta";
console.log(titulo);
console.log(paso1);
console.log(paso2);

//ejercicio 2
let base: number = 5;
let altura: number = 10;
let resultado: number = base * altura;

console.log(resultado);

//ejercicio 3
let dato = document.getElementById("dato2document");
let btnEnv = document.getElementById("enviar");

btnEnv.addEventListener("click", () => {
  console.log(dato.value);
  console.log(typeof dato.value);

  let base: number = Number(dato.value);

  console.log(base * 5);
  console.log(typeof base);
});
