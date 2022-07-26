function openModalRecheio(contentProduto) {

  // variaveis que recebem  data-attributs

  const section = contentProduto.getAttribute("data-section")
  const id = contentProduto.getAttribute("data-id-product")

  let data = products[section][id]

  // função que abre a seção do modal recheio

  openSectionModal (section)

  //chamando função que gera html do cabeçalho

  htmlContentModal(section, id);


  let modal = document.querySelector('.bg-modal-recheio')
  modal.style.display = 'flex'

    // tirar scroll do body

  let scroll = document.querySelector("html");
  scroll.style.overflow = "hidden"

  // preço inicial no botão continuar

  data['value'] = data['qntd'] * data['price']

  document.querySelector('#text-qtd-footer').innerText = data['qntd']
  document.querySelector('#price-total').innerText = 'R$ '+ data['value'] +',00'

}


// função para fechar o modal

function closedModalRecheio() {

  let modal = document.querySelector('.bg-modal-recheio');
  modal.style.display = 'none'

  // colocar scroll no body

  let body = document.querySelector("html");
  body.style.overflow = "auto"

}

// função que retorna a section e id de products

function getContentModal(section, id) {
  return products[section][id];
}

// função para adicionar html no modal com os paramentros section e id

function htmlContentModal(section, id) {

  let data = getContentModal(section, id);

  // criando html da seçao content no modal 

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

// função para incrementar a quantidade no modal

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

// função para decrementar a quantidade no modal

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


function btnContinueDesable (section, id) {
  let data = products[section][id]

  if (data['qntd'] === 0) {
    document.querySelector('.btn-continue').classList.add('btn-continue-disable')
    return
  }
   
   document.querySelector('.btn-continue').classList.remove('btn-continue-disable') 
  
}




// função para abrir seção de recheio conforme a section passada 

function openSectionModal (section) {

  let sectionIceCream = document.getElementById('ice-cream')
  let sectionAcai = document.getElementById('acai')

  if (section == 'acai')
    sectionAcai.classList.add('section-active')

  if (section === 'ice-cream')
    sectionIceCream.classList.add('section-active')
}
