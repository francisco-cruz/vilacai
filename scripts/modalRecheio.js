function openModalRecheio() {
    let modal = document.querySelector('.bg-modal-recheio');
    modal.style.display = 'flex';
   // tirar scroll da tela
   let scroll = document.querySelector("html");
   scroll.style.overflow = "hidden";
 }
 
 function closedModalRecheio() {
    let modal = document.querySelector('.bg-modal-recheio');
    modal.style.display = 'none';
    // colocar scroll na tela
   let body = document.querySelector("html");
   body.style.overflow = "auto";
   sessionStorage.clear();
 }

 function getInfo(produto){
  // chamando função abrir modal
  openModalRecheio();
  // pegando as informações dos produto
  let section = produto.getAttribute('data-section');
  let name = produto.getAttribute('data-name');
  let price = produto.getAttribute('data-price');
  let additional = produto.getAttribute('data-additional');
  let contAdditional = produto.getAttribute('data-cont-additional');
  // pegando o componente da tela
  let sectionPage = document.querySelector('.section-modal-recheio');
  let namePage = document.querySelector('.name-modal-recheio');
  let pricePage = document.querySelector('.price-modal-recheio');
  sessionStorage.setItem('price', price);
  console.log(sessionStorage.getItem(price));
  let additionalPage = document.querySelector('.obs-modal-recheio');
  let contAdditionalPage = document.querySelector('#cont-additional-fixed');
   // colocando as informaçoes nos componentes
  sectionPage.innerText = section;
  namePage.innerText = name;
  pricePage.innerText = "R$ " + price;
  additionalPage.innerText = additional;
  contAdditionalPage.innerText = contAdditional;
  console.log(price)
  let priceText = document.querySelector('#price-total');
priceText.innerText ="R$ "+ price;
 }
//  botão quantidade footer
let contText = document.querySelector('#text-qtd-footer');
let contTextReal = parseInt(contText.innerText);
let price = sessionStorage.getItem('price');
let priceReal = parseInt(price);
let priceText = document.querySelector('#price-total');
let priceTotal = priceReal;
// somar
 function buttonAddFooter() {
  if(contTextReal === 10) {
    document.querySelector('#btn-add-footer').ddEventListener('click', (event) => {  
      event.preventDefault();  
    });
  } else {
    contTextReal +=1;
    contText.innerText= contTextReal;
    priceTotal = contTextReal * priceReal;
    priceText.innerText ="R$ "+ priceTotal +",00";
  }
 }
//  diminuir
function buttonMinusFooter() {
  if(contTextReal === 1) {
    document.querySelector('#btn-minus-footer').ddEventListener('click', (event) => {  
      event.preventDefault();  
    });
  } else {
    contTextReal -=1;
    contText.innerText= contTextReal;
    priceTotal =contTextReal * priceReal;
    priceText.innerText ="R$ "+ priceTotal +",00";
  }
 }
