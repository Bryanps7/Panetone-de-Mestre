const menu = document.getElementById('menu')
const menuPG = document.getElementById('menuPG')

menu.addEventListener("click", () => {
    menuPG.style.display = "block"
})

const closeMenu = document.getElementById('closeMenu')
closeMenu.addEventListener("click", () => {
    menuPG.style.display = "none"
})


document.getElementById("calcular").addEventListener("click", () => {

    if (document.querySelector(".box")) return

    let box = document.createElement("div")
    box.classList.add("box")

    let volume = document.createElement("p")
    volume.textContent = "Volume Resposta"

    let preco = document.createElement("p")
    preco.textContent = "Preço Final"

    let massa = document.createElement("p")
    massa.textContent = "Massa Específica"

    box.appendChild(volume);
    box.appendChild(preco);
    box.appendChild(massa);

    document.getElementById("resposta").appendChild(box);
})



