function pegarHora(){
    const date = new Date().toLocaleTimeString();

    if (date <='18' || date > '22'){
        let estado = document.getElementById("lbEstado");
        estado.innerText="Fechado";
        estado.className += " fechado";
        estado.removeAttribute('id');

    } else {
        let estado = document.querySelectorById("lbEstado").innerText="Aberto";
    }
}
pegarHora()

