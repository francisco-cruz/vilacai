function openModalRecheio(contentProduto) {
  //contentProduto.getAttribute
  const section = contentProduto.getAttribute("data-section")
  const id = contentProduto.getAttribute("data-id-product")
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



// pegando as informações
function getContentModal(section, id) {
  console.log(products[section][id])
  return products[section][id];
}

function htmlContentModal(section, id) {
  let data = getContentModal(section, id);
  // função que pega as informações
  let content = '<img class="img-modal-recheio" src="' + data["img"] + '" alt="">' +
    '<div class="info-modal-recheio">' +
    '<p class="section-modal-recheio">' + data["section"] + '</p>' +
    '<h1 class="name-modal-recheio">' + data["name"] + '</h1>' +
    '<p class="price-modal-recheio">'+'R$ ' + data["price"] + ',00'+'</p>' +
    '<p class="obs-modal-recheio">' + data["obs-product"] + '</p>' +
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