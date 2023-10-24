window.addEventListener("load",function(){
    this.document.getElementById("btnMostrar").addEventListener("click", iniciarCronometro);

    function iniciarCronometro(){
        setInterval(mostrarMsg, 10)
    }

    function mostrarMsg(){
        document.getElementById("numero").innerHTML = Math.floor(Math.random() * 10000000000000) + 1;
    }
})