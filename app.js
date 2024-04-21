let listaNumerosGerados = []; 
let quantidadeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});

}

function textoInicial() {
    exibirTextoNaTela("h1", "Bem vindo ao jogo do número secreto!");
    exibirTextoNaTela("p", "Escolha número entre 1 e 10");
    console.log(numeroSecreto);
}

textoInicial();

let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela("h1", "Parabéns!");
        exibirTextoNaTela("p", mensagemTentativas);
        habilitarBotao();
        console.log(`tentativa de número: ${tentativas}`);

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("h1", "Você errou...");
            exibirTextoNaTela("p", "O número digitado é maior que o número secreto. Digite um número menor!");
            limparCampo();
            console.log(`tentativa de número: ${tentativas}`);
        } else {
            exibirTextoNaTela("h1", "Você errou...");
            exibirTextoNaTela("p", "O número digitado é menor que o número secreto. Digite um número maior!");
            limparCampo();
            console.log(`tentativa de número: ${tentativas}`);
        }
        tentativas++;
    }

}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    textoInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function gerarNumeroAleatorio() {
    let numeroGerado = parseInt(Math.random() * quantidadeNumeros + 1);

    if (quantidadeNumeros == listaNumerosGerados.length) {
        listaNumerosGerados = [];  
    }

    if (listaNumerosGerados.includes(numeroGerado) ) {
       return gerarNumeroAleatorio();
    } else{
        listaNumerosGerados.push(numeroGerado);
        console.log(listaNumerosGerados);
        return numeroGerado;
    }
}

function habilitarBotao() {
    let botaoNovoJogo = document.getElementById("reiniciar").removeAttribute("disabled");
}






//>>>>>>>>>>>>>>>>INICIO DOS DESAFIOS<<<<<<<<<<<<<<<<<<<<






//RETORNA A MÉDIA DOS 3
// let num1 = parseInt(prompt("Digite um número"));
// let num2= parseInt(prompt("Digite um número"));
// let num3 = parseInt(prompt("Digite um número"));
// console.log(verificarChute(num1, num2, num3));
// alert(verificarChute(num1, num2, num3));
// console.log(saudacao(nome1));
// function verificarChute(num1, num2, num3) {
//     let media = parseInt((num1 + num2 + num3) / 3);
//     return `A média dos tres números é: ${media}`;
// }

// SAUDAÇÃO
// let nome1 = prompt("Por favor, digite o seu nome.");
// function saudacao(nome) {
//     return `Olá: [${nome}]!`;
// }

//RETORNA O DOBRO DO NÚMERO
// numero = parseInt(prompt("Digite um número"));
// console.log(dobroDoNome(numero));

// function dobroDoNome(numero) {
//     return numero * 2;
// }
// let num1 = parseInt(prompt("Digite um número"));
// let num2 = parseInt(prompt("Digite o segundo número"));

// console.log(retornaMaior(num1, num2));

// RETORNA NÚMERO MAIOR
// function retornaMaior (num1, num2){
//     return num1 > num2 ? num1 : num2;
// }

//CALCULAR IMC
// alert(calculaImc(1.70, 65));

// function calculaImc(altura, peso){
//     let imc = peso / altura / altura;
//     return `O seu IMC é: ${imc}`;
// }

// NÚMERO FATORIAL
// let numero = 8  ;

// let resultado = numeroFatorial(numero);

// console.log(`O fatorial de ${numero} é ${resultado}`);

// function numeroFatorial (numero){
//     if (numero == 0 || numero == 1) {
//         return 1;
//     }

//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//         fatorial *= i;
//         console.log(fatorial);
//     }
//     return fatorial;
// }

//CONVERTER DOLAR REM REAIS
// let dolar = 10;
// let conversao = converteDolar(dolar);

// let palavraDolar = dolar == 1 ? "dolar" : "dolares";
// console.log(`$${dolar.toFixed(2)} ${palavraDolar}, equivale a R$${conversao} reais` );

// function converteDolar(numero) {

//     let dolar = 5.20;
//     let resultadoConversao = numero * dolar;
//     return resultadoConversao.toFixed(2);

// }

// CALCULO DE ÁREA E PERÍMETRO DE UMA SALA RETANGULAR
// let largura = 30;
// let altura = 12;

// let calculoDoTerreno = calculoAreaEPerimetro(altura, largura);

// console.log(`Com base nas informações inseridas a área e o perimetro do terreno é: ${calculoDoTerreno}`);

// function calculoAreaEPerimetro(altura, largura) {
//     let area = largura * altura;
//     let perimetro = (largura * 2) + (altura * 2);
//     return `Área: ${area}, Perímetro: ${perimetro}`;
// }


//
/*CALCULO DA AREA CIRCULAR
pi vezes o raio elevado ao quadrado
(A = π r²)
*/

/* CALCULO DO PERÍMETRO CIRCULAR
 C = 2 * π * r, onde:
 C = comprimento da circunferência ou perímetro.
 π = 3,14 (aproximadamente)
 r = raio da circunferência (medida do centro à extremidade)*/

//  let raio = 5;
//  let pegarAreaEPerimetro = calculoAreaEPerimetroCircular(raio);
//  console.log(pegarAreaEPerimetro);

// function calculoAreaEPerimetroCircular (raio){

//     let area = (Math.PI * (raio * raio)).toFixed(2);
//     let perimetro = (2 * Math.PI * raio).toFixed(2);
//     return `Área: ${area}, Perímetro: ${perimetro}`;
// }


//TABUADA
// let numero = 5;
// tabuada(numero);

// function tabuada (numero){
//     console.log(`A tabuada do número ${numero} é:\n`);
//     for(let i = 0; i <= 10; i++){
//         console.log(`${numero} x ${i} = ${numero * i}`); 
//     }
// }


// let listaGenerica = [];
// let linguagensDeProgramacao = ["Javascript","C", "C++", "Kotlin", "python"];
// linguagensDeProgramacao.push("Java");
// linguagensDeProgramacao.push("Ruby");
// linguagensDeProgramacao.push("Golang")
// exibirItensDaLista();

// function exibirItensDaLista(){
//     for (let i = 0; i < linguagensDeProgramacao.length; i++) {
//         console.log(linguagensDeProgramacao[i]);
        
//     }
// }

// console.log(linguagensDeProgramacao[0]);
// console.log(linguagensDeProgramacao[1]);
// console.log("Útimo item: "+linguagensDeProgramacao[linguagensDeProgramacao.length-1]);
