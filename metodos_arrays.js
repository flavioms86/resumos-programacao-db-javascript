// .length: Retorna o tamanho do array.
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.length); // 5

// .push(): Adiciona um elemento no final do array e retorna o novo tamanho.
numeros.push(6);
console.log(numeros); // [1, 2, 3, 4, 5, 6]

// .pop(): Remove o último elemento do array e o retorna.
const ultimoElemento = numeros.pop();
console.log(ultimoElemento); // 6

// .shift(): Remove o primeiro elemento do array e o retorna.
const primeiroElemento = numeros.shift();
console.log(primeiroElemento); // 1

// .unshift(): Adiciona um elemento no início do array e retorna o novo tamanho.
numeros.unshift(0);
console.log(numeros); // [0, 2, 3, 4, 5]

// .indexOf(): Retorna o índice da primeira ocorrência de um elemento no array.
console.log(numeros.indexOf(3)); // 2

// .includes(): Verifica se um elemento está presente no array.
console.log(numeros.includes(4)); // true

// .concat(): Concatena dois arrays e retorna um novo array.
const maisNumeros = [6, 7, 8];
const todosNumeros = numeros.concat(maisNumeros);
console.log(todosNumeros); // [0, 2, 3, 4, 5, 6, 7, 8]

// .splice(): Altera o conteúdo de um array, adicionando ou removendo elementos.
numeros.splice(2, 0, 2.5);
console.log(numeros); // [0, 2, 2.5, 3, 4, 5]

// .join(): Converte o array em uma string, usando um separador.
const numerosString = numeros.join("-");
console.log(numerosString); // "0-2-2.5-3-4-5"

// .reverse(): Inverte a ordem dos elementos do array.
numeros.reverse();
console.log(numeros); // [5, 4, 3, 2.5, 2, 0]

// .slice(): Retorna uma cópia de parte do array.
const parteDoArray = numeros.slice(1, 4);
console.log(parteDoArray); // [4, 3, 2.5]

// .toString(): Converte o array em uma string.
const arrayToString = numeros.toString();
console.log(arrayToString); // "5,4,3,2.5,2,0"

// .every(): Verifica se todos os elementos satisfazem uma condição.
const todosSaoMaioresQueZero = numeros.every((numero) => numero > 0);
console.log(todosSaoMaioresQueZero); // false

// .some(): Verifica se pelo menos um elemento satisfaz uma condição.
const algumEhMaiorQueZero = numeros.some((numero) => numero > 0);
console.log(algumEhMaiorQueZero); // true

// .find(): Retorna o primeiro elemento que satisfaz uma condição.
const primeiroMaiorQueZero = numeros.find((numero) => numero > 0);
console.log(primeiroMaiorQueZero); // 5

// .findIndex(): Retorna o índice do primeiro elemento que satisfaz uma condição.
const primeiroIndexMaiorQueZero = numeros.findIndex((numero) => numero > 0);
console.log(primeiroIndexMaiorQueZero); // 0

// .filter(): Retorna um novo array com todos os elementos que satisfazem uma condição.
const numerosMaioresQueZero = numeros.filter((numero) => numero > 0);
console.log(numerosMaioresQueZero); // [5, 4, 3, 2.5, 2]

// .map(): Retorna um novo array com os resultados de uma função aplicada a cada elemento.
const numerosDobrados = numeros.map((numero) => numero * 2);
console.log(numerosDobrados); // [10, 8, 6, 5, 4, 0]

// .sort(): Ordena os elementos do array.
numeros.sort();
console.log(numeros); // [0, 10, 2, 2.5, 4, 5]

// .localeCompare(): Compara strings considerando a ordem lexicográfica.
console.log("banana".localeCompare("abacaxi")); // 1

// .reduce(): Aplica uma função a um acumulador e a cada elemento do array.
const somaDosNumeros = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0
);
console.log(somaDosNumeros); // 23
