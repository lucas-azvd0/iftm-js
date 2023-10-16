function redirecionar() {
    var nome = document.getElementById("nome").value;
    var palavras = nome.split(" ");

    if (palavras.length >= 2) {
        window.location.href = "menu.html?nome=" + encodeURIComponent(nome);
    } else {
        alert("Nome inválido. Deve conter pelo menos duas palavras para entrar na segunda página.");
    }
}
