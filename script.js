// const notas = [4, 7, 9, 2, 10];

// const { useCallback } = require("react");

// const aprovados = notas.filter(x => x >= 7);

// const dobrado = aprovados.map(x => x * 2);

// console.log(dobrado);

// 1
// function somar(n1, n2) {
//   return n1 + n2;
// }

// function executarOperacao(a, b, operacaoCallback) {
  
//   return operacaoCallback(a, b);
// }

// console.log(executarOperacao(10, 5, somar));

//2
// function formatarNome(nome) {
//   return "Aluno: " + nome;
// }

// function processarLista(lista, callback) {
//   for (let i = 0; i < lista.length; i++) {
//     console.log(callback(lista[i]));
//   }
// }

// const alunos = ["Ana", "Carlos", "Beatriz"];

// processarLista(alunos, formatarNome);


// //3
// function baixarArquivo(nomeArquivo, callbackFinal) {
//   console.log("Baixando o arquivo " + nomeArquivo + "...");
//   setTimeout(function () {
//     callbackFinal(nomeArquivo); 
//   }, 1000);
// }

// function funcaoFinal(nomeArquivobaixado) {
//   console.log("Notificação: O arquivo " + nomeArquivobaixado + " foi baixado.");
// }

// baixarArquivo("cabeludo.pdf", funcaoFinal);

// 4
// function ePar(num) {
//   return num % 2 === 0;
// }

// function filtrarNumeros(lista, callbackCondicao) {
//   const resultado = [];
//   for (let i = 0; i < lista.length; i++) {
//     if (callbackCondicao(lista[i])) {
//       resultado.push(lista[i]);
//     }
//   }
//   return resultado;
// }


// const numeros = [1,2,3,4,5,6]; 

// console.log(filtrarNumeros(numeros, ePar));

// 5
// const precos = [100, 200, 50, 300];


// const precosComDesconto = precos.map(preco => preco * 0.9);

// console.log(precosComDesconto);

// 6 
// function validarEmail(email, callbackSucesso, callbackErro) {
//   if (email.includes("@")) {
//     callbackSucesso("Email válido!");
//   } else {
//     callbackErro("Email inválido!");
//   }
// }

// function aoSucesso(msg) {
//   console.log("sucesso: " + msg);
// }

// function aoErro(msg) {
//   console.log("erro: " + msg);
// }

// validarEmail("dev@javascript.com", aoSucesso, aoErro);
// validarEmail("emailsemarroba.com", aoSucesso, aoErro);

// 7
// const usuarios = [
//   { id: 1, nome: "Alice" },
//   { id: 2, nome: "Bruno" },
//   { id: 3, nome: "Carla" }
// ];

// const usuarioEncontrado = usuarios.find(u => u.id === 2);

// console.log(usuarioEncontrado);

// 8
// const produtos = [
//   { item: "Teclado", preco: 150 },
//   { item: "Mouse", preco: 80 },
//   { item: "Monitor", preco: 900 }
// ];

// produtos.sort((a, b) => a.preco - b.preco);

// console.log(produtos);

// 9
// const carrinho = [25, 15, 60, 100];

// const total = carrinho.reduce((acc, item) => acc + item, 0);

// console.log("Total do carrinho: R$ " + total);

// 10
// function emCaixaAlta(texto) {
//   return texto.toUpperCase() + "!!!";
// }

// function formatarTexto(frase, callbackFormatador) {
//   return callbackFormatador(frase);
// }

// console.log(formatarTexto("pastelao de chocolate o melhor", emCaixaAlta));