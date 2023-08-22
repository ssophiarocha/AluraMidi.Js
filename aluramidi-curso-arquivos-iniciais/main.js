/*uma lista e que o que tem dentro dessa lista são teclas. 
E é possível fazer isso com o JavaScript, usando um recurso
 da linguagem chamado referências. As referências no 
 JavaScript devem ser criadas ou declaradas com base no valor 
 que elas vão receber e ter que guardar.*/

 function TocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    // console.log(idAudio);

    tecla.onclick= function () {
        TocaSom(idAudio);
    }

    contador = contador + 1;

    console.log (contador);
}


/*---------------------------------------------*/
/* desafio:como pegar o botão do HTML e chama-lo 
dentro do Js e executar alguma ação.

-- Função que é capaz de buscar o elemento em HTML
e chamar no Js

Nome da classe: (.tecla_pom)
Nome do ID: (#som_tecla_pom)*/
/*---------------------------------------------*/
/* Acessar a tecla juntamente à função de dar play
à mídia*/

/*function TocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
Vai acessar o documento HTML e retornar  a classe
selecionada
document.querySelector('.tecla_pom').onclick= TocaSomPom;

function TocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick= TocaSomClap;

function TocaSomTim() {
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_tim').onclick= TocaSomTim;

function TocaSomPuff() {
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector('.tecla_puff').onclick= TocaSomPuff;

function TocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector('.tecla_splash').onclick= TocaSomSplash;

function TocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector('.tecla_toim').onclick= TocaSomToim;

function TocaSomPsh() {
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector('.tecla_psh').onclick= TocaSomPsh;

function TocaSomTic() {
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector('.tecla_tic').onclick= TocaSomTic;

function TocaSomTom() {
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_tom').onclick= TocaSomTom;*/