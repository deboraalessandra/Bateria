// EXEMPLO 7
//Função que reproduz o som dos instrumentos musicais que estão armazenados 
//dentro de um elemento áudio
function tocaSom(seletorAudio) {

  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === 'audio'){
      elemento.play();
  }
  else {
    alert('Elemento não encontrado ou seletor inválido');  
  }

}

const listaDeTeclas = document.querySelectorAll(".tecla");

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

  const tecla = listaDeTeclas[contador];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`; //template string

  tecla.onclick = function () {

    tocaSom(idAudio);

  };

  tecla.onkeydown = function (event) {

    // console.log(event.code == 'Space')

    if (event.code === 'Space' || event.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  
  }
  
  tecla.onkeyup = function (){
    tecla.classList.remove('ativa');
  }

}
// // EXEMPLO 6
// function tocaSom(idElementoAudio) {
//   document.querySelector(idElementoAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll(".tecla");

// //para
// for (let contador = 0; contador < listaDeTeclas.length; contador++) {

//   const tecla = listaDeTeclas[contador];

//   const instrumento = tecla.classList[1];

//   const idAudio = `#som_${instrumento}`; //template string

//   tecla.onclick = function () {

//     tocaSom(idAudio);

//   };

//   tecla.onkeydown = function (event) {

//     // console.log(event.code == 'Space')

//     if (event.code === 'Space' || event.code === 'Enter') {
//       tecla.classList.add('ativa');
//     }
  
//   }
  
//   tecla.onkeyup = function (){
//     tecla.classList.remove('ativa');
//   }

// }

// EXEMPLO 1
//  function tocaSomPom () {
//      document.querySelector('#som_tecla_pom').play();
//  }
//  document.querySelector('.tecla_pom');

// EXEMPLO 2
//   function tocaSomPom () {
//      document.querySelector('#som_tecla_pom').play();
//  }
//  document.querySelector('.tecla_pom').onClick = tocaSomPom;

// EXEMPLO 3
// const listaDeTeclas = document.querySelectorAll('.tecla');
// listaDeTeclas[0].onCLick = tocaSomPom;
// listaDeTeclas[1].onCLick = tocaSomClap;
// listaDeTeclas[2].onCLick = tocaSomTim;
// listaDeTeclas[3].onCLick = tocaSomPush;
// listaDeTeclas[4].onCLick = tocaSomSplash;

// EXEMPLO 4
// function tocaSom(idElementAudio) {
//   document.querySelector(idElementAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll(".tecla");

// let contador = 0;

// while (contador < listaDeTeclas.length) {

//   listaDeTeclas[contador].onCLick = function () {
//     tocaSom('#som_tecla_pom');
//   }

//   contador = contador + 1;

//   console.log(tocaSom);
// }

// EXEMPLO 5
// function tocaSom(idElementAudio) {
//   document.querySelector(idElementAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;

// while (contador < listaDeTeclas.length) {

//   const tecla = listaDeTeclas[contador];

//   const instrumento = tecla.classList[1];

//   // template string
//   const idAudio = `#som_${instrumento}`;

//   console.log(idAudio);

//   tecla.onCLick = function () {
//     tocaSom(idAudio);
//   }

//   contador = contador + 1;

//   console.log(tocaSom);
// }
