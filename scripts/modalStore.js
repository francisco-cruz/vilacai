// ABRIR MODAL MAIS INFORMAÇÕES

function openModal() {
   let modal = document.querySelector('.bg-modal-store');
   modal.style.display = 'flex';

   // DESATIVAR SCROLL
   let body = document.querySelector("html");
   body.style.overflow = "hidden";
}

// FECHAR MODAL MAIS INFORMAÇÕES

function closedModal() {
   let modal = document.querySelector('.bg-modal-store');
   modal.style.display = 'none';

   // ATIVAR SCROLL

   let body = document.querySelector("html");
   body.style.overflow = "auto";
}


