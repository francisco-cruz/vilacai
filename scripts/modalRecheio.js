function openModalRecheio(contentProduto) {

  // DATA-ATTRIBUTS DOS PRODUTOS

  const section = contentProduto.getAttribute("data-section")
  const id = contentProduto.getAttribute("data-id-product")

  // RECEBE O OBJETO PRODUCTS

  let data = products[section][id]

  // SETAR A QAUNTIDADE DO PRODUTO NA FUNÇÃO DESATIVAR BOTÃO QUANTIDADE DO MODAL RECHEIO

  btnContinueDesable (section, id)

  // ABRE A SEÇÃO NO MODAL RECHEIO

  getSectionModal (section, id)

  //GERA HTML DO CABEÇALHO DO MODAL RECHEIO

  htmlContentModal(section, id);

  // MOSTRA MODAL RECHEIO
  let modal = document.querySelector('.bg-modal-recheio')
  modal.style.display = 'flex'

    // DESATIVAR SCROLL

  let scroll = document.querySelector("html");
  scroll.style.overflow = "hidden"

  // PREÇO INICIAL DO BOTÃO CONTINUAR

  data['value'] = data['qntd'] * data['price']

  document.querySelector('#text-qtd-footer').innerText = data['qntd']
  document.querySelector('#price-total').innerText = 'R$ '+ data['value'] +',00'

}


// FECHAR MODAL

function closedModalRecheio() {

  let modal = document.querySelector('.bg-modal-recheio');
  modal.style.display = 'none'

  // COLOCAR SCROLL 

  let body = document.querySelector("html");
  body.style.overflow = "auto"

}

// RETORNA A SEÇÃO E O ID DE CADA PRODUTO

function getContentModal(section, id) {
  return products[section][id];
}

// GERA HTML DO MODAL RECHEIO

function htmlContentModal(section, id) {

  let data = getContentModal(section, id);

  // GERA HTML DA DIV CONTENT DO MODAL RECHEIO

  let content = '<img class="img-modal-recheio" src="' + data["img"] + '" alt="">' +
    '<div class="line-product"> </div>'+
    '<div class="info-modal-recheio">' +
    '<p class="section-modal-recheio">' + data["section"] + '</p>' +
    '<h1 class="name-modal-recheio">' + data["name"] + '</h1>' +
    '<p class="price-modal-recheio">' + 'R$ ' + data["price"] + ',00' + '</p>' +
    '<p class="obs-modal-recheio">' + data["obs-product"] + '</p>' +
    '</div>' +
    '<div class="qtd-recheio-geral">' +
    '<div class="items-qtd-recheio">' +
    '<p class="title-qtd-recheio">Adicionais</p>' +
    '<div class="items-cont-recheio">' +
    '<p class="cont-qtd-recheio">0 de ' + data['qntd-additionais'] + '</p>' +
    '</div>' +
    '</div>' +
    '</div>'

  document.getElementById("btn-add-footer").setAttribute("onclick", `incrementQntd("${section}", ${id})`)
  document.getElementById("btn-minus-footer").setAttribute("onclick", `decrementQntd("${section}", ${id})`)
  
  document.getElementById('content-product').innerHTML = content

}

// INCREMENTAR VALOR EM BOTÃO CONTINUE

function incrementQntd (section, id) {

  let data = products[section][id]

  if (data['qntd'] >= 0 && data['qntd'] < 10){
    data['qntd']++
    data['value'] = data['qntd'] * data['price']
    btnContinueDesable (section, id)
    document.querySelector('#text-qtd-footer').innerText = data['qntd']
    document.querySelector('#price-total').innerText = 'R$ '+ data['value'] +',00'
   
  }
}

// DECREMENTAR VALOR EM BOTÇAO CONTINUE

function decrementQntd (section, id) {

  let data = products[section][id]

  if (data['qntd'] > 0){
    data['qntd']--
    data['value'] = data['qntd'] * data['price']

    console.log(data['qntd'])

    btnContinueDesable (section, id)

    document.querySelector('#text-qtd-footer').innerText = data['qntd']
    document.querySelector('#price-total').innerText ='R$ '+ data['value'] +',00'
    

  }
}

// DESABILITA O BOTÃO CONTINUE 

function btnContinueDesable (section, id) {
  let data = products[section][id]

  if (data['qntd'] === 0) {
    document.querySelector('.btn-continue').classList.add('btn-continue-disable')
    return
  }
   
   document.querySelector('.btn-continue').classList.remove('btn-continue-disable') 
  
}


// ABRIR SEÇÃO DE RECHEIO

function getSectionModal (section, id) {
  let data = products[section][id]
  console.log(data['section'])

  if (data['section'] === 'Açaí') {
    document.querySelector('#modal-acai').classList.add('section-active')
    document.querySelector('#modal-ice-cream').classList.remove('section-active')

  }

  else if (data['section'] === 'Sorvetes') {
    document.querySelector('#modal-acai').classList.remove('section-active')
    document.querySelector('#modal-ice-cream').classList.add('section-active')

  }

}