for ( i in products ) {
    for ( j in products[i] ){
            let produto = '<div class="product" onclick="openModalRecheio(this)" data-section="' + i + '" data-id-product="' + j + '" >'+
                '<img src="' + products[i][j]["img"] + '" alt="">' +
                '<div class="line-product"></div>'+
                '<div class="info-product">' +
                '<p class="name-product">' + products[i][j]["name"] + '</p>' +
                '<p class="obs-product">' + products[i][j]["obs-product"] + '</p>' +
                '<p class="price-product">' + 'R$ ' + products[i][j]["price"] + ',00' + '</p>' +
                '</div>' +
                '</div>';
            document.getElementById(i).children[1].innerHTML += produto;
    }
}

// salvar em data-attributes os atributos name, price, qntd-addionais, section e obs-product