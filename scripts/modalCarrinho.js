function openModalCarrinho() {
    let modal= document.querySelector('.bg-modal-carrinho')
    modal.style.display = 'flex'

    // DESATIVAR SCROLL
  let scroll = document.querySelector("html");
  scroll.style.overflow = "hidden"
}


function closedModalCarrinho() {
    let modal = document.querySelector('.bg-modal-carrinho');
    modal.style.display = 'none'
  
    // COLOCAR SCROLL 
    let body = document.querySelector("html");
    body.style.overflow = "auto"
  
  }
  
  
  