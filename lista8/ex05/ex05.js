window.addEventListener("load",function(){
    this.document.getElementById("btnPlay").addEventListener("click", iniciarCronometro);
    this.document.getElementById("btnPause").addEventListener("click", pararCronometro);

    var cronometro;

    function iniciarCronometro(){
        cronometro = setInterval(mostrarMsg, 500)
    }
    function pararCronometro(){
        clearInterval(cronometro)
    }

    function mostrarMsg(){
        document.getElementById("numero").innerHTML = Math.floor(Math.random() * 1000) + 1;
    }

})