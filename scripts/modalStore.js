function openModal() {
   let modal = document.querySelector('.bg-modal-store');
   modal.style.display = 'flex';
   // tirar scroll da tela
   let body = document.querySelector("html");
   body.style.overflow = "hidden";
}

function closedModal() {
   let modal = document.querySelector('.bg-modal-store');
   modal.style.display = 'none';
   // colocar scroll na tela
   let body = document.querySelector("html");
   body.style.overflow = "auto";
}