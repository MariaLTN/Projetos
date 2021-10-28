/*Dimensão de Tela*/ 
var AlturaAtual=0, LarguraAtual=0;
function AjustaTamanhoJogo(){
    AlturaAtual = window.innerHeight;
    LarguraAtual = window.innerWidth;
    //console.log(AlturaAtual, LarguraAtual);
}
AjustaTamanhoJogo();

/*Cronometragem*/
var Tempo=10;

var Cronometro = setInterval(function(){
    Tempo--;    
    if (Tempo<0) {
        clearInterval(CriaMosquito);
        clearInterval(Cronometro);
        window.location.href = "vitoria.html";
        //Se o tempo acabar e eu tiver vidas, pelo menos uma então você ganhei.
    } else {
        document.getElementById("Cronometro").innerHTML = Tempo;
    }
    
},1000);
//Cronometragem

var Vidas=1;
/*Aleatoriedade do aparecimento do mosquito*/
function AleatoriedadeMosquitinho(){

    //Remover mosquito anterior (caso exista)
    var MosquitoExiste = document.getElementById("Mosquito");
    if (MosquitoExiste){
        MosquitoExiste.remove();

        if (Vidas>3){
            clearInterval(Cronometro);
            window.location.href = "lost.html";
        } else {
            document.getElementById('Vida'+Vidas).src = "Imagens/coracao_vazio.png";
            Vidas++;
        }
    } 

    var PosicaoX = Math.floor(Math.random() * LarguraAtual)-90; 
    var PosicaoY = Math.floor(Math.random() * AlturaAtual)-90;

    PosicaoX = PosicaoX < 0 ? 0 : PosicaoX;
    PosicaoY = PosicaoY < 0 ? 0 : PosicaoY;
    
    /*Mostrar a imagem do mosquitinho de forma aleatoria.*/
    var Mosquitinho = document.createElement('img');
    Mosquitinho.src = "Imagens/mosquito.png";
    Mosquitinho.className = TamanhoAleatorio() + ' ' + LadoAleatorio();
    //Precisa dar um espaço entre as string. 
    //Pois não ele entende concatena os dois comando, não fazendo nenum deles;
    Mosquitinho.style.left = PosicaoX + "px";
    Mosquitinho.style.top = PosicaoY + "px";
    Mosquitinho.style.position = "absolute";

    Mosquitinho.id = "Mosquito";
    //Para remover ou adicionar;

    Mosquitinho.onclick = function(){
        this.remove();
    }//Para remover ao clicado;

    document.body.appendChild(Mosquitinho);

    LadoAleatorio();
    //Cannot read properties of null (reading 'appendChild');
    //Botei o <script> no fim do body e resolver o professor fez um pouco diferente.
}

/*Aleatoriedade do tamanho do mosquito*/
function TamanhoAleatorio(){
    var TamanhoAleatorio = Math.floor(Math.random()*3);

    switch(TamanhoAleatorio){
        case 0:
            return "Mosquito_Tamanho_1";
        case 1:
            return "Mosquito_Tamanho_2";
        case 2:
            return "Mosquito_Tamanho_3";
    }
}

/*Aleatoriedade de lado do mosquito*/
function LadoAleatorio(){
    var LadoAleatorio = Math.floor(Math.random()*2);

    switch(LadoAleatorio) {
        case 0:
            return "Mosquito_Esquerdo";
        case 1:
            return "Mosquito_Direito";
    }
}

var TempoMosquito = 2000;

//Nível do Jogo
var Nivel = window.location.search; /*Recupera o parâmetro junto com o ?*/
Nivel = Nivel.replace("?","");
switch(Nivel){
    case "facil":
        TempoMosquito = 2000;
        break;
    case "medio":
        TempoMosquito = 1500;
        break;
    case "dificil":
        TempoMosquito = 1000;
        break;
    case "chucknorris": 
        TempoMosquito = 800;
        break;
}

/*Criando e Removando mosquitos a cada ciclo de tempo*/
var CriaMosquito = setInterval(function () {
    AleatoriedadeMosquitinho()
}, TempoMosquito);

/*
Criação do cenário
Dentro do .HTML
*/