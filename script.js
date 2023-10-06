// Foram criadas constantes de acordo com as div do html, dia, hora, 
// minuto e seguno.
const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

// constante importante para o timer funcionar
// é baseado nesta const chamada inicio que o programa ira fazer
// uma redução de tempo.
// a data desta constando sera usado como parametro para que o restante
// do codigo saida que o tempo vai ser reduzido te acordo com os dias
const Inicio = "2 dec 2023"

// Essa função pega a data limite e contabiliza quantos segundos
// ela tem a partir do dia de hoje, até essa data chegar.
function countDown(){
    // const dataIinicio ela vai transformar a string "2 dec 2023"
    // em uma nova data e ela ficara guardada dentro a const.
    const dataInicio = new Date(Inicio)
    // essa constante não precisa ser declarada como a const a cima
    // quando colocamos a tag "date" o js já entende que é a data de
    // hoje.
    const hoje = new Date()
    // nesta parte do código defimos os segundos que temos
    // entre as constando dataInicio e a const hoje
    // e para descobrir, só precisar ser feito a subtração
    // dataInicio - hoje.
    // para transformar mili-segundos em segundos basta dividir por
    // mil.
    const segTotal = (dataInicio - hoje)/1000;
    // nesta constant os segundos totais são dividos por 60
    // depois 60 de novo, então dividido por 24, isso é feito
    // para obter os dias totais.
    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    // nesta const os segundos totais são dividos por 60 depois 
    // 60 de novo, e então é tirado a 24 %, para pode trabalhar 
    // com o resto da divisão, esse resto se tornara as horas.
    const finalHoras = Math.floor(segTotal / 60 / 60 ) % 24;
    // nesta const o restante da const a cima são transformados em
    // minutos com a divisão dos restante da horas divido por 60
    // então é tirado 60 % para se transformar em segundos.
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    // o mesmo procedimento é feito nessa const
    //  os restante dos minutos são transformados em segundos
    // tirando 60 % dos minutos.
    const finalSegundos = Math.floor(segTotal) % 60;

    // nesta sessão os elementos dia, hora, minuto e segundo
    // são selecionados para que sejando alterado de acordo com o
    // código a cima.
    dia.innerHTML = `${finalDias}D`
    hora.innerHTML = formatoTempo(`${finalHoras}H`)
    minuto.innerHTML = formatoTempo(`${finalMinutos}M`)
    segundo.innerHTML = formatoTempo(`${finalSegundos}S`)
}
// essa função serve para formatar o programa
// sempre que o valor for menor que de 10 ele ira acrescentar 
// na frente do numero.
function formatoTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}
// a função é chamada para pode ser executada.
countDown();
// essa função já existe no JS, ela diz que a função countDown
// sera executada, então determino em quanto tempo usando o 1000
// como 1000 milisegundos.
setInterval(countDown, 1000)