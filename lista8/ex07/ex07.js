window.addEventListener("load", function () {

    var imgBoy = Math.floor(Math.random() * 4) + 1;

    function exibirPersonagem() {
        this.document.getElementById("img-boy").src = `img/boy0${imgBoy}.png`
        imgBoy++;
        if(imgBoy > 4){
            imgBoy = 1;
        }
    }

    this.setInterval(exibirPersonagem,10)
})