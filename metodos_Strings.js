// .includes(): Verifica se uma substring está presente na string.
const strIncludes = "Olá, mundo!";
console.log(strIncludes.includes("mundo")); // true

// .indexOf(): Retorna o índice da primeira ocorrência de uma substring na string.
const strIndexOf = "JavaScript é incrível!";
console.log(strIndexOf.indexOf("é")); // 12

// .lastIndexOf(): Retorna o índice da última ocorrência de uma substring na string.
const strLastIndexOf = "JavaScript é incrível, é mesmo!";
console.log(strLastIndexOf.lastIndexOf("é")); // 21

// .slice(): Retorna uma cópia de parte da string.
const strSlice = "Hello, world!";
console.log(strSlice.slice(0, 5)); // "Hello"

// .replace(): Substitui uma substring por outra.
const strReplace = "Olá, mundo!";
const novaStr = strReplace.replace("mundo", "planeta");
console.log(novaStr); // "Olá, planeta!"

// .toUpperCase(): Converte a string para maiúsculas.
const strUpperCase = "Olá, mundo!";
console.log(strUpperCase.toUpperCase()); // "OLÁ, MUNDO!"

// .toLowerCase(): Converte a string para minúsculas.
const strLowerCase = "Olá, MUNDO!";
console.log(strLowerCase.toLowerCase()); // "olá, mundo!"

// .trim(): Remove espaços em branco do início e do fim da string.
const strTrim = "   Olá, mundo!   ";
console.log(strTrim.trim()); // "Olá, mundo!"

// .padStart(): Preenche a string com um caractere até alcançar o comprimento desejado.
const numero = "42";
console.log(numero.padStart(5, "0")); // "00042"

// .split(): Divide a string em um array de substrings, com base em um delimitador.
const strSplit = "Maçã, Banana, Uva";
const frutas = strSplit.split(", ");
console.log(frutas); // ["Maçã", "Banana", "Uva"]

// .charAt(index): Retorna o caractere na posição especificada pelo índice.
const str = "Hello";
const char = str.charAt(0); // Retorna "H"

// .substring(startIndex, endIndex): Retorna uma nova substring da string original, 
// incluindo o caractere no índice de início e excluindo o caractere no índice de término. 
// Se o índice de término não for fornecido, a substring vai até o final da string.

const str2 = "Hello, World!";
const sub1 = str2.substring(7, 12); // Retorna "World"
const sub2 = str2.substring(3); // Retorna "lo, World!"
