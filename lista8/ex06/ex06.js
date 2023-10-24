window.addEventListener("load",function(){
    this.document.getElementById("btnPlay").addEventListener("click", iniciarCronometro);
    this.document.getElementById("btnPause").addEventListener("click", pararCronometro);


    var cronometro;

    function iniciarCronometro(){
        controlarBtns(true, false);
        cronometro = setInterval(mostrarMsg, 500);
    }
    function pararCronometro(){
        controlarBtns(false, true);
        clearInterval(cronometro)
    }

    function controlarBtns(play, pause){
        this.document.getElementById("btnPlay").disabled = play;
        this.document.getElementById("btnPause").disabled = pause;
    }

    function mostrarMsg(){
        document.getElementById("numero").innerHTML = Math.floor(Math.random() * 1000) + 1;
    }

    controlarBtns(false, true);    
})