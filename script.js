// =========================
// LIKE
// =========================

function curtir(botao) {

    const numero = botao.querySelector("span");

    let valor = Number(numero.textContent);

    valor++;

    numero.textContent = valor;
}


// =========================
// DISLIKE
// =========================

function descurtir(botao) {

    const numero = botao.querySelector("span");

    let valor = Number(numero.textContent);

    valor++;

    numero.textContent = valor;
}


// =========================
// MODO ESCURO / CLARO
// =========================

function alternarTema() {

    const body = document.body;
    const botao = document.getElementById("themeButton");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        botao.textContent = "☀️ Modo claro";

    } else {

        botao.textContent = "🌙 Modo escuro";

    }
}
