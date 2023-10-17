window.addEventListener("load", function() {
    var nomeCompleto = localStorage.getItem("nomeCompleto");

    if (nomeCompleto) {
        var palavras = nomeCompleto.split(" ");

        if (palavras.length >= 2) {

            document.getElementById("mensagem").textContent = nomeCompleto + ", seja bem-vindo ao jogo dos felinos!";
        } else {

            alert("Erro: nome inválido detectado. Redirecionando...");
            window.location.href = "erro.html";
        }
    } else {

        alert("Erro: nenhum nome encontrado. Redirecionando...");
        window.location.href = "erro.html";
    }

    var botao = document.getElementById("entrarComoConvidado");
    botao.addEventListener("click", function() {
        window.location.href = "felinos.html";
    });
});
