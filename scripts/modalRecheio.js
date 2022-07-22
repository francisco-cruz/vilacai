function openModalRecheio(contentProduto) {
  // variaveis com a section e id que estão no data-attributs do html
  const section = contentProduto.getAttribute("data-section")
  const id = contentProduto.getAttribute("data-id-product")

  //chamando função que pede dois paramentos com as variáveis criadas
  htmlContentModal(section, id);

  let modal = document.querySelector('.bg-modal-recheio');
  modal.style.display = 'flex';
  // tirar scroll do body
  let scroll = document.querySelector("html");
  scroll.style.overflow = "hidden";

}

function closedModalRecheio() {
  let modal = document.querySelector('.bg-modal-recheio');
  modal.style.display = 'none';
  // colocar scroll no body
  let body = document.querySelector("html");
  body.style.overflow = "auto";

}

// função que retorna a section e id de products
function getContentModal(section, id) {
  return products[section][id];
}

// função para adicionar html no modal com os paramentros section e id
function htmlContentModal(section, id) {
  // variavel que chama função que retorna o objeto
  let data = getContentModal(section, id);
  // função que pega as informações
  let content = '<img class="img-modal-recheio" src="' + data["img"] + '" alt="">' +
    '<div class="info-modal-recheio">' +
    '<p class="section-modal-recheio">' + data["section"] + '</p>' +
    '<h1 class="name-modal-recheio">' + data["name"] + '</h1>' +
    '<p class="price-modal-recheio">'+'R$ ' + data["price"] + ',00'+'</p>' +
    '<p class="obs-modal-recheio">' + data["obs-product"] + '</p>' +
    '</div>'+
    '<div class="qtd-recheio-geral">'+
    '<div class="items-qtd-recheio">'+
    '<p class="title-qtd-recheio">Adicionais</p>'+
    '<div class="items-cont-recheio">'+
    '<p class="cont-qtd-recheio">0 de ' + data['qntd-additionais'] + '</p>'+
    '</div>'+
    '</div>'+
    '</div>';
  document.getElementById('content-product').innerHTML = content;
}

































// conteudo do modal
function contentModal() {
  for (i in products)
    console.log(i);
}
// somar
function buttonAddFooter() {

  if (qntdProdutoReal === 10) {
    document.querySelector('#btn-add-footer').ddEventListener('click', (event) => {
      event.preventDefault();
    });
  } else {
    qntdProdutoReal += 1;
    price2 = qntdProdutoReal * price2;
    priceText.innerText = "R$ " + price2 + ",00";
  }
}
//  diminuir
function buttonMinusFooter() {
  if (qntdProdutoReal === 0) {
    document.querySelector('#btn-minus-footer').ddEventListener('click', (event) => {
      event.preventDefault();
    });
  } else {
    qntdProdutoReal -= 1;
    price2 = qntdProdutoReal * price2;
    priceText.innerText = "R$ " + price2 + ",00";
  }
}