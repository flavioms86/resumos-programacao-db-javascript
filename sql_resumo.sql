-- Criando uma tabela
CREATE TABLE funcionarios (
    id INT PRIMARY KEY,
    nome VARCHAR(50),
    salario DECIMAL(10, 2),
    data_contratacao DATE
);

-- Inserindo dados
INSERT INTO funcionarios (id, nome, salario, data_contratacao)
VALUES (1, 'João', 5000.00, '2023-01-15'),
       (2, 'Maria', 6000.50, '2023-02-20'),
       (3, 'Pedro', 5500.75, '2023-03-10');

-- Selecionando dados
SELECT * FROM funcionarios;
SELECT nome, salario FROM funcionarios WHERE salario > 5500;

-- Atualizando dados
UPDATE funcionarios SET salario = 6500 WHERE id = 2;

-- Excluindo dados
DELETE FROM funcionarios WHERE id = 3;

-- Filtrando resultados
SELECT * FROM funcionarios WHERE nome LIKE 'J%';
SELECT * FROM funcionarios WHERE data_contratacao BETWEEN '2023-01-01' AND '2023-02-28';

-- Ordenando resultados
SELECT * FROM funcionarios ORDER BY salario DESC;
SELECT * FROM funcionarios ORDER BY data_contratacao ASC;

-- Agregando dados
SELECT COUNT(*) FROM funcionarios;
SELECT AVG(salario) FROM funcionarios;
SELECT MAX(salario) FROM funcionarios;

-- Juntando tabelas
CREATE TABLE departamentos (
    id INT PRIMARY KEY,
    nome VARCHAR(50)
);

INSERT INTO departamentos (id, nome)
VALUES (1, 'RH'), (2, 'Vendas');

-- Juntando tabelas com INNER JOIN
SELECT funcionarios.nome, funcionarios.salario, departamentos.nome AS departamento
FROM funcionarios
INNER JOIN departamentos ON funcionarios.id_departamento = departamentos.id;

-- Grouping e Aggregation
SELECT departamento, COUNT(*) AS total_funcionarios, AVG(salario) AS media_salario
FROM funcionarios
GROUP BY departamento;

-- Mais detalhes

-- Coringas (wildcards)

-- Coringa % (porcentagem)
SELECT * FROM funcionarios WHERE nome LIKE 'Jo%'; -- Correspondência com nomes que começam com "Jo"
SELECT * FROM funcionarios WHERE nome LIKE '%a%'; -- Correspondência com nomes que contêm a letra "a"

-- Coringa _ (sublinhado)
SELECT * FROM funcionarios WHERE nome LIKE '_a%'; -- Correspondência com nomes de duas letras onde o segundo é "a"
SELECT * FROM funcionarios WHERE nome LIKE 'M_r_a'; -- Correspondência com nomes que são 5 letras, começam com "M" e terminam com "a"

-- Joins

/*
-- LEFT JOIN:

Um LEFT JOIN retorna todos os registros da tabela da 
esquerda (tabela A) e os registros correspondentes 
da tabela da direita (tabela B). 
Se não houver correspondência, as colunas da 
tabela da direita serão preenchidas com NULL.
*/

SELECT funcionarios.nome, departamentos.nome AS departamento
FROM funcionarios
LEFT JOIN departamentos ON funcionarios.id_departamento = departamentos.id;

/* Exemplo usando alias para nomes de tabelas
SELECT B.ID, B.INICIO, B.FIM, A.NOME AS ATIVIDADE
FROM TB_BLOCO B
LEFT JOIN TB_ATIVIDADE A ON B.ATIVIDADE_ID = A.ID
*/

/*
RIGHT JOIN:

Um RIGHT JOIN é o oposto de um LEFT JOIN. Ele retorna 
todos os registros da tabela da direita (tabela B) e 
os registros correspondentes da tabela da esquerda (tabela A). 
Se não houver correspondência, as colunas da tabela 
da esquerda serão preenchidas com NULL.
*/

SELECT funcionarios.nome, departamentos.nome AS departamento
FROM funcionarios
RIGHT JOIN departamentos ON funcionarios.id_departamento = departamentos.id;


/*
FULL JOIN:
Um FULL JOIN retorna todos os registros quando há uma 
correspondência em qualquer uma das tabelas 
(tabela A ou tabela B). Se não houver correspondência, 
as colunas sem correspondência serão preenchidas com NULL.
*/

SELECT funcionarios.nome, departamentos.nome AS departamento
FROM funcionarios
FULL JOIN departamentos ON funcionarios.id_departamento = departamentos.id;
