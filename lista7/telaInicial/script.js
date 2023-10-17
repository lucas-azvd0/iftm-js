document.getElementById("btn-entrar").addEventListener("click", redirecionar)

function redirecionar() {
    var nome = document.getElementById("txtNome").value.trim(" ");
    var palavras = nome.split(" ");

    if (palavras.length >= 2) {
        nomeSobrenome = `${palavras[0]} ${palavras[palavras.length-1]}`;
        localStorage.setItem("nomeCompleto", nomeSobrenome);
        window.open("menu.html", "_self")
    } else if(nome == ""){
        alert("Insira um nome para prosseguir");
    }
    else {
        alert("O nome informado deve conter nome e sobrenome");
    }
}
