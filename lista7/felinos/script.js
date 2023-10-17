document.addEventListener("DOMContentLoaded", function() {
    var carinhos = 0;
    document.getElementById("carinhos").innerHTML = carinhos;

    var gato01 = document.getElementById("gato01");
    gato01.addEventListener("click", function() {
        var nome = localStorage.getItem("nomeCompleto");
        var nomeDividido = nome.split(" ");
        alert(`Oi, ${nomeDividido[0]}! Tudo bem com você?`);
    });

    var gato02 = document.getElementById("gato02");
    gato02.addEventListener("click", function() {
        carinhos++;
        document.getElementById("carinhos").innerHTML = carinhos;
    });

    var gato03 = document.getElementById("gato03");
    gato03.addEventListener("mouseover", function() {
        gato03.src = "felinos/Imagens/gato06.gif";
    });

    gato03.addEventListener("mouseout", function() {
        gato03.src = "felinos/Imagens/gato03.gif";
    });

    var gato04 = document.getElementById("gato04");
    gato04.addEventListener("mouseover", function() {
        gato04.innerHTML = "Ai! Ai! Ai! Pare de fazer cócegas!";
    });

    gato04.addEventListener("mouseout", function() {
        gato04.innerHTML = "lá lá lá lá lá lá";
    });

    var gato05 = document.getElementById("gato05");
    var btnRandom = document.getElementById("btn-random");
    var nmRandom = document.getElementById("nm-random");

    btnRandom.addEventListener("click", function() {
        var random = Math.floor(Math.random() * 100 + 1);
        nmRandom.value = random;
    });
});