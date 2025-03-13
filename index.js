import Panetone from "../model/Panetone.js"


let calcular = document.getElementById("calcular")
let res = document.getElementById("resposta")



document.getElementById("calcular").addEventListener("click", () => {
    let raio = document.getElementById("raio").value
    let altura = document.getElementById("altura").value
    let quantidade = document.getElementById('quantidade').value
    let tamanho = document.getElementById('tamanho').value

    const panetoneScript  = new Panetone(raio, altura, quantidade , tamanho)

    let medida = panetoneScript.calcularMedida()

    Object.entries(medida).forEach(item => {
        
    })
})

