// Adicionar Sons:

function tocarMusica(seletorAudio){
    const elemento =  document.querySelector(seletorAudio)
    if (elemento /* elemento != null*/ && elemento.localName === 'audio') {
       elemento.play();
    } else {
        console.log("Elemento inválido.");              
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < listaTeclas.length; cont++){
    
    const tecla = listaTeclas[cont];
    const instrumento = tecla.classList[1];
    const somTecla = `#som_${instrumento}`;

    tecla.onclick = function() { 
        tocarMusica(somTecla);
    }

    // Pressionando o botão:
    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}



