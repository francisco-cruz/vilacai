function pegarHora(){
    const date = new Date().toLocaleTimeString();
    if (date <='18' || date > '22'){
        let open = document.getElementById("store-status");
        open.innerText="● Fechado";
        open.className += " closed";
        open.removeAttribute('id');
    } 
}
pegarHora();

