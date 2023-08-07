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

function TocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
/* Vai acessar o documento HTML e retornar  a classe
selecionada*/
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
document.querySelector('.tecla_tom').onclick= TocaSomTom;