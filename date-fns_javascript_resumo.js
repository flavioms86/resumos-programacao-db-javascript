/*
Instalar com npm ou yarn
npm install date-fns
# ou
yarn add date-fns
*/

// Importando funções do date-fns
const { format, addDays, differenceInDays, parseISO } = require("date-fns");

// Obtendo a data atual
const dataAtual = new Date();

// Formatando uma data como uma string personalizada
const dataFormatada = format(dataAtual, "yyyy-MM-dd HH:mm:ss");

// Adicionando dias a uma data
const dataFutura = addDays(dataAtual, 7); // Adiciona 7 dias à data atual

// Calculando a diferença em dias entre duas datas
const data1 = new Date(2023, 8, 27);
const data2 = new Date(2023, 8, 28);
const diffEmDias = differenceInDays(data2, data1);

// Convertendo uma string ISO 8601 em uma data
const dataString = "2023-09-27T12:00:00Z";
const dataConvertida = parseISO(dataString);

console.log(dataFormatada);
console.log(dataFutura);
console.log(diffEmDias);
console.log(dataConvertida);
