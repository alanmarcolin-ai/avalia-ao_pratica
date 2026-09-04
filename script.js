// ================================
// BOTÃO LIKE
// ================================

function curtir(botao) {

    const numero = botao.querySelector("span");

    let quantidade = Number(numero.textContent);

    quantidade++;

    numero.textContent = quantidade;
}


// ================================
// BOTÃO DISLIKE
// ================================

function descurtir(botao) {

    const numero = botao.querySelector("span");

    let quantidade = Number(numero.textContent);

    quantidade++;

    numero.textContent = quantidade;
}


// ================================
// MODO ESCURO / CLARO
// ================================

function alternarTema() {

    document.body.classList.toggle("dark");

    const botao = document.getElementById("themeButton");

    if (document.body.classList.contains("dark")) {

        botao.textContent = "☀️ Modo claro";

    } else {

        botao.textContent = "🌙 Modo escuro";

    }
}
