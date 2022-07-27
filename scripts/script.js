// HTML DOS PRODUTOS

for ( i in products ) {
    for ( j in products[i] ){
        let produto ='<div class="product" onclick="openModalRecheio(this)" data-section="' + i + '" data-id-product="' + j + '" >'+
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

// HTML DOS RECHEIOS AÇAI

function gerarRecheiosFruits(recheio) {
    let recheiosDaSecao = recheios[recheio]
    for ( j in  recheiosDaSecao) {
        let recheio =`<div class="item-recheio">
            <p>${recheiosDaSecao[j]['name']}</p>
            <div class="btn-quantidade">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
                            
            <p>0</p>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-minus">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            </div>
            </div>`

            document.getElementById('items-recheios-fruits').innerHTML += recheio;
            console.log(recheiosDaSecao[j]['section'])
    }

}

function gerarRecheiosCreams(recheio) {
    let recheiosDaSecao = recheios[recheio]
    for ( j in  recheiosDaSecao) {
        let recheio =`<div class="item-recheio">
            <p>${recheiosDaSecao[j]['name']}</p>
            <div class="btn-quantidade">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
                            
            <p>0</p>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-minus">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            </div>
            </div>`

            document.getElementById('items-recheios-creams').innerHTML += recheio;
            console.log(recheiosDaSecao[j]['section'])
    }

}

function gerarRecheiosFillings(recheio) {
    let recheiosDaSecao = recheios[recheio]
    for ( j in  recheiosDaSecao) {
        let recheio =`<div class="item-recheio">
            <p>${recheiosDaSecao[j]['name']}</p>
            <div class="btn-quantidade">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
                            
            <p>0</p>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-minus">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            </div>
            </div>`

            document.getElementById('items-recheios-fillings').innerHTML += recheio;
            console.log(recheiosDaSecao[j]['section'])
    }

}

gerarRecheiosFruits('fruits')
gerarRecheiosCreams('creams')
gerarRecheiosFillings('fillings')

// HTML DOS RECHEIOS DOS SORVETES

function gerarRecheiosFlavors(recheio) {
    let recheiosDaSecao = recheiosIceCream[recheio]
    for ( j in  recheiosDaSecao) {
        let recheio =`<div class="item-recheio">
            <p>${recheiosDaSecao[j]['name']}</p>
            <div class="btn-quantidade">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
                            
            <p>0</p>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-minus">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            </div>
            </div>`

            document.getElementById('items-recheios-flavors').innerHTML += recheio;
            console.log(recheiosDaSecao[j]['section'])
    }

}

function gerarRecheiosFillingsIceCream(recheio) {
    let recheiosDaSecao = recheios[recheio]
    for ( j in  recheiosDaSecao) {
        let recheio =`<div class="item-recheio">
            <p>${recheiosDaSecao[j]['name']}</p>
            <div class="btn-quantidade">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
                            
            <p>0</p>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-minus">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            </div>
            </div>`

            document.getElementById('items-recheios-fillings-icecream').innerHTML += recheio;
            console.log(recheiosDaSecao[j]['section'])
    }

}

function gerarRecheiosToppings(recheio) {
    let recheiosDaSecao = recheiosIceCream[recheio]
    for ( j in  recheiosDaSecao) {
        let recheio =`<div class="item-recheio">
            <p>${recheiosDaSecao[j]['name']}</p>
            <div class="btn-quantidade">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
                            
            <p>0</p>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-minus">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            </div>
            </div>`

            document.getElementById('items-recheios-toppings').innerHTML += recheio;
            console.log(recheiosDaSecao[j]['section'])
    }

}

gerarRecheiosFlavors('flavors')
gerarRecheiosFillingsIceCream('fillings')
gerarRecheiosToppings('toppings')
