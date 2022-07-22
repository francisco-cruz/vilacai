for (i in products) {
    for (j in products[i])
        for (k in products[i][j]) {
            let produto = '<div class="product" onclick="openModalRecheio()" data-name="' + products[i][j][k]["name"] +
                 '" data-price="' + 'R$ ' + products[i][j][k]["price"] + ',00' + '" data-qntd-addtionais="' + products[i][j][k]["qntd-additionais"] +
                  '" data-section="'+ products[i][j][k]["section"]+'">' +
                '<img src="' + products[i][j][k]["img"] + '" alt="">' +
                '<div class="info-product">' +
                '<p class="name-product">' + products[i][j][k]["name"] + '</p>' +
                '<p class="obs-product">' + products[i][j][k]["obs-product"] + '</p>' +
                '<p class="price-product">' + 'R$ ' + products[i][j][k]["price"] + ',00' + '</p>' +
                '</div>' +
                '</div>';
            document.getElementById(j).children[1].innerHTML += produto;
        }
}

// salvar em data-attributes os atributos name, price, qntd-addionais, section