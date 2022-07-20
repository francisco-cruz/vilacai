function openModalRecheio() {
    let modal = document.querySelector('.bg-modal-recheio');
    modal.style.display = 'flex';
    showInfo();
   // tirar scroll da tela
   let body = document.querySelector("html");
   body.style.overflow = "hidden";
 }
 
 function closedModalRecheio() {
    let modal = document.querySelector('.bg-modal-recheio');
    modal.style.display = 'none';
    // colocar scroll na tela
   let body = document.querySelector("html");
   body.style.overflow = "auto";
 }

 function showInfo(produto){
 
 }