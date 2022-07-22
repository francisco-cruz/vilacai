
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
 }
 
 function getInfo(produto){ 
  // pegando as informações dos produto
  let section = produto.getAttribute('data-section');
  let name = produto.getAttribute('data-name');

  let qntd = produto.getAttribute('data-qntd-produto');
  let qntdProduto = parseInt(qntd);
  sessionStorage.setItem('qntd-produto', qntdProduto);

  let price = produto.getAttribute('data-price');
  let priceReal = parseInt(price);
  sessionStorage.setItem('price', priceReal);

  let additional = produto.getAttribute('data-additional');
  let contAdditional = produto.getAttribute('data-cont-additional');

  // pegando o componente da tela
  let sectionPage = document.querySelector('.section-modal-recheio');
  let namePage = document.querySelector('.name-modal-recheio');
  let pricePage = document.querySelector('.price-modal-recheio');
  let additionalPage = document.querySelector('.obs-modal-recheio');
  let contAdditionalPage = document.querySelector('#cont-additional-fixed');
   // colocando as informaçoes nos componentes
  sectionPage.innerText = section;
  namePage.innerText = name;
  pricePage.innerText = "R$ " + price;
  additionalPage.innerText = additional;
  contAdditionalPage.innerText = contAdditional;
  let priceText = document.querySelector('#price-total');
  priceText.innerText ="R$ "+ price;
 // chamando função abrir modal
  openModalRecheio();
 }

let qntdProdutoReal = sessionStorage.getItem('qntd-produto');
let price2 = sessionStorage.getItem('price');

let priceText = document.querySelector('#price-total');
priceText.innerText ="R$ "+ price2 +",00";
// somar
 function buttonAddFooter() {

  if(qntdProdutoReal === 10) {
    document.querySelector('#btn-add-footer').ddEventListener('click', (event) => {  
      event.preventDefault();  
    });
  } else {
    qntdProdutoReal +=1;
    price2 = qntdProdutoReal * price2;
    priceText.innerText ="R$ "+ price2 +",00";
  }
 }
//  diminuir
function buttonMinusFooter() {
  if(qntdProdutoReal=== 0) {
    document.querySelector('#btn-minus-footer').ddEventListener('click', (event) => {  
      event.preventDefault();  
    });
  } else {
    qntdProdutoReal -=1;
    price2 = qntdProdutoReal * price2;
    priceText.innerText ="R$ "+ price2 +",00";
  }
 }
