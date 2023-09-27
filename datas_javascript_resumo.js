// Criando uma nova instância de Date
const dataAtual = new Date();

// Obtendo informações da data
const ano = dataAtual.getFullYear(); // Obtém o ano atual
const mes = dataAtual.getMonth(); // Obtém o mês atual (0-11)
const dia = dataAtual.getDate(); // Obtém o dia do mês atual (1-31)
const hora = dataAtual.getHours(); // Obtém a hora atual (0-23)
const minuto = dataAtual.getMinutes(); // Obtém os minutos atuais (0-59)
const segundo = dataAtual.getSeconds(); // Obtém os segundos atuais (0-59)

// Criando uma data específica
const dataEspecifica = new Date(2023, 8, 27); // 27 de setembro de 2023 (mês começa em 0)

// Convertendo uma string em uma data
const dataString = "2023-09-27";
const dataConvertida = new Date(dataString);

// Formatando uma data como uma string personalizada
const dataFormatada = `${ano}-${mes + 1}-${dia}`; // Lembre-se de adicionar +1 ao mês

// Adicionando ou subtraindo tempo
dataAtual.setDate(dataAtual.getDate() + 7); // Adiciona 7 dias à data atual

// Comparando datas
const data1 = new Date(2023, 8, 27);
const data2 = new Date(2023, 8, 28);
const saoIguais = data1.getTime() === data2.getTime(); // Compara os timestamps

// Exibindo a diferença entre datas
const diffEmMilissegundos = data2 - data1;
const diffEmDias = Math.floor(diffEmMilissegundos / (1000 * 60 * 60 * 24));

console.log(dataAtual);
console.log(ano, mes, dia, hora, minuto, segundo);
console.log(dataEspecifica);
console.log(dataConvertida);
console.log(dataFormatada);
console.log(saoIguais);
console.log(diffEmDias);
