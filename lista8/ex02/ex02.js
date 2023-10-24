window.addEventListener("load", function(){
    btn = document.getElementById("btnMostrar")
    btn.addEventListener("click", iniciarCronometro);

    function iniciarCronometro(){
        setTimeout(mostrarNome, 3000);
    }

    function mostrarNome(){
        document.getElementById("nome").innerHTML = "Lucas";
    }
});