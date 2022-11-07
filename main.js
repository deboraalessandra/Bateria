// EXEMPLO 1
//  function tocaSomPom () {
//      document.querySelector('#som_tecla_pom').play();
//  }
//  document.querySelector('.tecla_pom');


// EXEMPLO 2 
  function tocaSomPom () {
     document.querySelector('#som_tecla_pom').play();
 }
//  document.querySelector('.tecla_pom').onClick = tocaSomPom; 


// EXEMPLO 3 
const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onCLick = tocaSomPom;
listaDeTeclas[1].onCLick = tocaSomClap;
listaDeTeclas[2].onCLick = tocaSomTim;
listaDeTeclas[3].onCLick = tocaSomPush;
listaDeTeclas[4].onCLick = tocaSomSplash;