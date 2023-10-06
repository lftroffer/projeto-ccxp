const ingressos = [];


//Função feita para adicionar um borda vermelha em elementos do HTML usando o querySelector.
//a Borda foi customizada no CSS.
function addRedBorder(id)
{
    element = document.querySelector(`#${id}`);
    element.style.border = "5px solid red";
}
//criei uma função e variavel para mudar a borda do elemento, usando o
// elemente.classList.toggle("card-highlight")
// toggle é uma função que permitar alterar o elemento  pra que fique mais
//visivel
function highlightCard(cardId) {
    var element = document.getElementById(cardId);
    element.classList.toggle("card-highlight");
}
// função para ajuda a saber como vou poder usar no futuro estes códigos.
function checkKeyboardCode() {
    document.addEventListener("keydown", (event) => {
        var name = event.key;
        var code = event.code;
        // Alerta a chave nome e o codigo chave são a tecla pressionada
        alert(`Tecla pressionada ${name} \r\n Key code: ${code}`);
    }, false);
}
// Função para adicionar uma borda ao Card quando as teclas
// 1, 2, 3 ou 4 forem pressionadas
// assim que umas delas for pressionada, todos os outros cards teram
// suas bordas removidas caso algum deles estejam com a mesma.
function addKeyboardEventListeners() {
    document.addEventListener("keydown", (event) => {
        //variaveis criadas para cada card.

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;

        // Nesta sessão ao pressionar a tecla 1, o card quinta
        // tera uma borda 1, enquanto as bordas dos outros cards
        // seram removidas.
        if(code == 'Digit1'){
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

         // Nesta sessão ao pressionar a tecla 2, o card quinta
        // tera uma borda 2, enquanto as bordas dos outros cards
        // seram removidas.
        if(code == 'Digit2'){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

         // Nesta sessão ao pressionar a tecla 3, o card quinta
        // tera uma borda 3, enquanto as bordas dos outros cards
        // seram removidas.
        if(code == 'Digit3'){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");
        } 
        
         // Nesta sessão ao pressionar a tecla 4, o card quinta
        // tera uma borda 4, enquanto as bordas dos outros cards
        // seram removidas.
        if(code == 'Digit4'){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");
        }

    }, false);


}

    selectCard = (selector) =>
    {
        var element = document.querySelector(selector);
        element.classList.toggle("card-selected");
        if(ingressos.incluse(selector)) ingressos.pop(selector);
        else ingressos.push(selector)
    }

   showSelectedCards = () =>
{
    if(ingressos.length > 0) alert(`Ingressos Selecionados:` + ingressos);
}

addKeyboardEventListeners();
