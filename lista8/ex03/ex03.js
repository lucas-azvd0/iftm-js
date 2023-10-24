window.addEventListener("load",function(){
    this.document.getElementById("btnMostrar").addEventListener("click", iniciarCronometro);

    function iniciarCronometro(){
        setTimeout(mostrarMsg, 1000)
    }

    function mostrarMsg(){
        document.getElementById("numero").innerHTML = Math.floor(Math.random() * 10) + 1;
    }
})