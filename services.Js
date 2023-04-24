const controls = document.querySelectorAll("#control");
// querySelectorAll seleciona todos os elementos que possuam determinado elemento, no caso a id "control"

let contador = 0;


const itens = document.querySelectorAll(".itm");
// Para saber quantos itens(Imagens) existem... seleciona todos os elementos "item"

const maxItems = itens.length;
// o número de total de itens é igual a item.length
/*A propriedade length tem como responsabilidade retornar 
a quantidade de caracteres de uma string ou o tamanho de um array*/


// forEach percorre todos os itens de um array
controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        btn_esq = e.target.classList.contains("btnesquerda");
        // console.log("control", btn_esq, contador) //confirma se o evento o botão apertado é esquerdo.

        if (btn_esq) {
            contador -= 1;
        } else {
            contador += 1;
        }

        if (contador >= maxItems) {
            contador = 0
        }
        // Se o contador for maior que o número de itens máximo, zera o contador...contador igual a zero.


        if (contador < 0) {
            contador = maxItems - 1
        }
        //Se o contador for menor que 0, contador vai para o ultimo item, como se fosse um carrossel mesmo
        console.log(contador)

        itens.forEach((itm) => itm.classList.remove("contador"));



        itens[contador].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"

        });

        itens[contador].classList.add("contador");


    });


});

