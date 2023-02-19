

let chave = "c22a275ecd9c4c9893f1759b7b400a40"

function colocaNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C " +
        "Com sensação termica de " + Math.floor(dados.main.feels_like) + "°C "

    document.querySelector(".descricao").innerHTML = dados.weather[0].description

    document.querySelector(".umidade").innerHTML = "Umidade : " + dados.main.humidity + " %"

    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon +
        ".png"
}

async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade + "&appid=" + chave +
        "&lang=pt_br" + "&units=metric").then(resposta => resposta.json())

    colocaNaTela(dados)

}

function cliqueiNoBotao() {

    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
