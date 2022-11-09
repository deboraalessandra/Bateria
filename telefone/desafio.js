// document.alert('olá');
let listaNumeros = document.querySelectorAll('input[type=button]');
let numDisplay = document.querySelector('input[type="tel"]');

for (let i=0; i<listaNumeros.length; i++) {
     const numeros = listaNumeros[i]

  numeros.onclick = function () {
      numDisplay.value += numeros.value
  }
}