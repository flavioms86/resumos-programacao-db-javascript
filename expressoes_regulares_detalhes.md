## Expressões Regulares - Resumo Explicativo

As expressões regulares (regex ou regexp) são padrões de busca utilizados para encontrar e manipular strings em texto. Elas oferecem uma forma poderosa e flexível de lidar com padrões complexos. No JavaScript, as expressões regulares são representadas por objetos RegExp ou podem ser definidas diretamente usando literais entre barras (/).

## Metacaracteres

- . : Corresponde a qualquer caractere, exceto quebras de linha.
- * : Corresponde a zero ou mais ocorrências do caractere ou grupo anterior.
- + : Corresponde a uma ou mais ocorrências do caractere ou grupo anterior.
- ? : Corresponde a zero ou uma ocorrência do caractere ou grupo anterior.
- [] : Define um conjunto de caracteres possíveis para corresponder.
- ^ : Âncora que representa o início da linha.
- $ : Âncora que representa o final da linha.
- | : Operador OR, corresponde a um dos padrões à esquerda ou à direita.


## Conjuntos e Ranges

- [a-z]: Corresponde a qualquer caractere minúsculo.
- [A-Z]: Corresponde a qualquer caractere maiúsculo.
- [0-9]: Corresponde a qualquer dígito numérico.
- [A-Za-z]: Corresponde a qualquer caractere alfabético.
- [^0-9]: Corresponde a qualquer caractere que não seja dígito numérico.


## Quantificadores

- {n}: Corresponde a exatamente n ocorrências do caractere ou grupo anterior.
- {n,}: Corresponde a pelo menos n ocorrências do caractere ou grupo anterior.
- {n,m}: Corresponde a pelo menos n e no máximo m ocorrências do caractere ou grupo anterior.

## Flags

As flags são usadas após a última barra de uma expressão regular para alterar o comportamento da busca.

- i : Ignora maiúsculas e minúsculas.
- g : Faz uma busca global, correspondendo a todas as ocorrências.
- m : Permite corresponder múltiplas linhas usando ^ e $.

## Exemplos de Uso

- /abc/ : Corresponde à sequência "abc".
- /[aeiou]/ : Corresponde a qualquer vogal.
- /[0-9]{3}/ : Corresponde a um número de três dígitos.
- /^\w+$/ : Corresponde a uma palavra completa.
- /pattern/gi : Corresponde globalmente, ignorando maiúsculas e minúsculas.


## Métodos Importantes

- test() : Verifica se a string corresponde ao padrão.
- exec() : Retorna detalhes sobre a primeira correspondência.
- match() : Retorna um array com as correspondências encontradas.
- search() : Retorna o índice da primeira correspondência encontrada.
- replace() : Substitui as correspondências por outra string.
- split() : Divide a string em um array usando o padrão como separador.