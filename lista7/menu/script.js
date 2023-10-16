document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    const nomeInserido = urlParams.get("nome");

    document.getElementById("mensagem").textContent = nomeInserido + ", seja bem-vindo ao jogo dos felinos!";

    document.getElementById("entrarComoConvidado").addEventListener("click", function() {
        window.location.href = "felinos.html";
    });
});
