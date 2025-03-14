import Panetone from "../model/Panetone.js"


let calcular = document.getElementById("calcular")


calcular.addEventListener("click", () => {
    let raio = document.getElementById("raio").value
    let altura = document.getElementById("altura").value
    let quantidade = document.getElementById('quantidade').value
    let tamanho = document.getElementById('tamanho').value

    const panetoneScript  = new Panetone(raio, altura, quantidade , tamanho)

    let medida = panetoneScript.calcularMedidaQuantidade()
    let res = document.getElementById("resposta")
    res.innerHTML = ""
    
    const table = document.createAttribute('table')
    table.classList.add('styled-table')

    const header = document.createAttribute('tr')
    header.innerHTML = '<th>Nome</th><th>Quantidade</th>'
    table.appendChild(header)

    Object.entries(medida).forEach(item => {
        const row = document.crea
    })
})

