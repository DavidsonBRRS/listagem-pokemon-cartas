const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaotrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }


});

