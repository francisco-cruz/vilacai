let products = [{
        "acai-section": [{
                "nome": "copo 900 ml",
                "obs-product": "Até 8 adicionais",
                "img": "./imagens/hamburgueira.jpeg",
                "price": 20,
                "valor": 0,
                "qntd": 0
            },
            {
                "nome": "copo 400 ml",
                "obs-product": "Até 10 adicionais",
                "img": "./imagens/copo.jpeg",
                "price": 15,
                "valor": 0,
                "qntd": 0
            },
            {
                "nome": "copo 600 ml",
                "obs-product": "Até 15 adicionais",
                "img": "./imagens/copo.jpeg",
                "price": 15,
                "valor": 0,
                "qntd": 0
            },
        ]
    },
    {
        "icecream-section": [{
                "nome": "copo 900 ml",
                "obs-product": "Até 8 adicionais",
                "img": "./imagens/hamburgueira.jpeg",
                "price": 20,
                "valor": 0,
                "qntd": 0
            },
            {
                "nome": "copo 400 ml",
                "obs-product": "Até 10 adicionais",
                "img": "./imagens/copo.jpeg",
                "price": 15,
                "valor": 0,
                "qntd": 0
            },
            {
                "nome": "copo 600 ml",
                "obs-product": "Até 15 adicionais",
                "img": "./imagens/copo.jpeg",
                "price": 15,
                "valor": 0,
                "qntd": 0
            },
        ]
    },
    {
        "snaks-section": [{
                "nome": "copo 900 ml",
                "obs-product": "Até 8 adicionais",
                "img": "./imagens/hamburgueira.jpeg",
                "price": 20,
                "valor": 0,
                "qntd": 0
            },
            {
                "nome": "copo 400 ml",
                "obs-product": "Até 10 adicionais",
                "img": "./imagens/copo.jpeg",
                "price": 15,
                "valor": 0,
                "qntd": 0
            },
            {
                "nome": "copo 600 ml",
                "obs-product": "Até 15 adicionais",
                "img": "./imagens/copo.jpeg",
                "price": 15,
                "valor": 0,
                "qntd": 0
            },
        ]
    },
    {
        "drinks-section": [{
                "nome": "DRINK 900 ml",
                "obs-product": "Até 8 adicionais",
                "img": "./imagens/hamburgueira.jpeg",
                "price": 20,
                "valor": 0,
                "qntd": 0
            },
            {
                "nome": "copo 400 ml",
                "obs-product": "Até 10 adicionais",
                "img": "./imagens/copo.jpeg",
                "price": 15,
                "valor": 0,
                "qntd": 0
            },
            {
                "nome": "copo 600 ml",
                "obs-product": "Até 15 adicionais",
                "img": "./imagens/copo.jpeg",
                "price": 15,
                "valor": 0,
                "qntd": 0
            },
        ]
    },
]

for (i in products) {
    for (j in products[i]) // pega o tipo do produto
        for (k in products[i][j]) {
            let produto = '<div class="product" onclick="getInfo(this)">' +
                '<img src="' + products[i][j][k]["img"] + '" alt="">' +
                '<div class="info-product">' +
                '<p class="name-product">' + products[i][j][k]["nome"] + '</p>' +
                '<p class="obs-product">' + products[i][j][k]["obs-product"] + '</p>' +
                '<p class="price-product">'+"R$" + products[i][j][k]["price"] +",00"+ '</p>' +
                '</div>' +
                '</div>';
            document.getElementById(j).children[1].innerHTML += produto;
        }

}