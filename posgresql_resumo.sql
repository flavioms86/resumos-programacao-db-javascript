-- Criação de uma tabela
CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    salario DECIMAL(10, 2),
    data_contratacao DATE
);

-- Inserção de dados
INSERT INTO funcionarios (nome, salario, data_contratacao)
VALUES ('João', 5000.00, '2023-01-15'),
       ('Maria', 6000.50, '2023-02-20'),
       ('Pedro', 5500.75, '2023-03-10');

-- Seleção de dados
SELECT * FROM funcionarios;
SELECT nome, salario FROM funcionarios WHERE salario > 5500;

-- Atualização de dados
UPDATE funcionarios SET salario = 6500 WHERE nome = 'Maria';

-- Exclusão de dados
DELETE FROM funcionarios WHERE nome = 'Pedro';

-- Junções (Joins)
SELECT funcionarios.nome, departamentos.nome AS departamento
FROM funcionarios
INNER JOIN departamentos ON funcionarios.id_departamento = departamentos.id;

-- Funções de Agregação
SELECT COUNT(*) FROM funcionarios;
SELECT AVG(salario) FROM funcionarios;
SELECT MAX(salario) FROM funcionarios;

-- Subconsultas (Subqueries)
SELECT nome FROM funcionarios WHERE salario > (SELECT AVG(salario) FROM funcionarios);

-- Filtragem e Ordenação
SELECT * FROM funcionarios WHERE nome LIKE 'J%';
SELECT * FROM funcionarios WHERE data_contratacao BETWEEN '2023-01-01' AND '2023-02-28';
SELECT * FROM funcionarios ORDER BY salario DESC;

-- Funções Personalizadas
CREATE OR REPLACE FUNCTION calcular_bonus(salario DECIMAL) RETURNS DECIMAL AS $$
BEGIN
    RETURN salario * 0.1; -- Calcula o bônus como 10% do salário
END;
$$ LANGUAGE plpgsql;

SELECT nome, salario, calcular_bonus(salario) AS bonus FROM funcionarios;

-- Indexação
CREATE INDEX idx_nome ON funcionarios(nome);

-- Restrições (Constraints)
ALTER TABLE funcionarios ADD CONSTRAINT salario_minimo CHECK (salario >= 5000);

-- Exemplo de Stored Procedure
CREATE OR REPLACE PROCEDURE aumentar_salario(nome VARCHAR) AS $$
BEGIN
    UPDATE funcionarios SET salario = salario * 1.1 WHERE nome = nome;
END;
$$ LANGUAGE plpgsql;

CALL aumentar_salario('João');

-- Exemplo de Trigger
CREATE OR REPLACE FUNCTION trigger_aumentar_salario()
RETURNS TRIGGER AS $$
BEGIN
    NEW.salario = NEW.salario * 1.05; -- Aumenta o salário em 5%
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER aumento_salario
BEFORE INSERT ON funcionarios
FOR EACH ROW
EXECUTE FUNCTION trigger_aumentar_salario();


-- Alterando o nome da tabela
ALTER TABLE funcionarios RENAME TO employees;

-- Renomeando uma coluna
ALTER TABLE employees RENAME COLUMN nome TO full_name;

-- Adicionando uma chave primária
ALTER TABLE employees
ADD COLUMN id SERIAL PRIMARY KEY;

-- Criando uma tabela para demonstração de chave estrangeira
CREATE TABLE departamentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50)
);

-- Adicionando uma chave estrangeira
ALTER TABLE employees
ADD COLUMN departamento_id INT;

-- Definindo a chave estrangeira
ALTER TABLE employees
ADD CONSTRAINT fk_departamento
    FOREIGN KEY (departamento_id)
    REFERENCES departamentos (id);

-- Exemplo de como inserir dados respeitando a chave estrangeira
INSERT INTO employees (full_name, salario, data_contratacao, departamento_id)
VALUES ('João', 5000.00, '2023-01-15', 1); -- Supondo que o departamento com ID 1 existe em "departamentos"
