// Verificar se uma string contém somente dígitos numéricos
const onlyDigits = /^\d+$/;

// Verificar se uma string contém somente letras
const onlyLetters = /^[A-Za-z]+$/;

// Verificar se uma string contém somente letras e números
const onlyAlphanumeric = /^[A-Za-z0-9]+$/;

// Verificar se uma string é um endereço de e-mail válido
const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Verificar se uma string começa com um determinado padrão
const startsWithPattern = /^Hello/;

// Verificar se uma string termina com um determinado padrão
const endsWithPattern = /World$/;

// Verificar se uma string contém um padrão específico em qualquer lugar
const containsPattern = /example/;

// Verificar se uma string contém somente espaços em branco
const onlyWhitespace = /^\s*$/;

// Validar um número de telefone comum (formato: (xxx) xxx-xxxx)
const validPhoneNumber = /^\(\d{3}\) \d{3}-\d{4}$/;

// Capturar grupos de palavras dentro de parênteses
const captureGroups = /(\w+)\s+(\w+)/;

// Substituir um padrão por outro em uma string
const replacePattern = /old/g;

// Dividir uma string em um array com base em um delimitador
const splitString = /[,;]/;
