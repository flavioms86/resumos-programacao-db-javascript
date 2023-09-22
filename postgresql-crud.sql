-- 1 - Criar banco de dados e tabela usuarios;

create database exercicio_crud_sql;

create table usuarios (
	id serial,
  	nome text not null,
  	idade smallint,
  	email varchar(50),
  	senha varchar(8) not null
);


-- 2 - Após criar a tabela, chegou a hora de inserir os registros conforme solicitado pelo cliente. Seguindo a tabela abaixo cadastre todos os registros.

insert into usuarios 
(nome, idade, email, senha) 
values
('Aretha Montgomery', 30, 'augue.id.ante@odioAliquam.com', 'a0B13O3L'),
('Camden H. Bartlett', 15, 'turpis.vitae.purus@risusDuisa.ca', 'p3P96F3Q'),
('Raja W. Coffey', 30, 'raja.feugiat@nonummy.com', 's5F51T7L'),
('Elton D. Olsen', 29, 'auctor@duiFuscediam.edu', 'k5X25B0R'),
('Shelley E. Frederick', 20, 'raja.feugiat@nonummy.com', 'u2D18F6E');

-- 3 - Após ter inserido os registros na tabela usuarios, foi identificado que o registro que possui o e-mail raja.feugiat@nonummy.com informou seu nome errado. 
-- Faça uma atualização nesse registro alterando o nome para Raja W. Coffey Thomas.

update usuarios set nome='Raja W. Coffey Thomas' where email='raja.feugiat@nonummy.com';

-- 4 - Excluir registro duplicado;

delete from usuarios where id=5;

-- 4.1 - Alterar coluna email para ser unico;

alter table usuarios add constraint email_unique_usuarios unique(email);

-- 5 - Inserir novos cadastros;

insert into usuarios
(nome, idade, email, senha)
values
('Jermaine G. Sellers', 16, 'ligula.Nullam@tortordictum.co.uk', 'o2P56U9U'),
('James D. Kennedy', 23, 'amet@Nulladignissim.com', 'q6B78V3V'),
('Amelia S. Harris', 29, 'nec.metus.facilisis@vitaealiquet.edu', 'l4S64Y3A'),
('Joel M. Hartman', 18, 'montes.nascetur@odiotristique.co.uk', 'c4Q27D7O'),
('Elmo K. Greer', 18, 'risus.Duis@eget.ca', 'e3P92I7R');

-- 5.1 - Adicionar nova coluna 'situacao' do tipo booleana;

alter table usuarios add column situacao boolean default true;

-- 6 - A solicitação anterior não era a toa. O cliente acabou de mandar o primeiro usuario que ele precisa inativar. 
-- Sendo assim, você precisa atualizar o registro que possui o e-mail montes.nascetur@odiotristique.co.uk alterando a situação dele para falso.

update usuarios set situacao = false where email='montes.nascetur@odiotristique.co.uk';

-- 7 - Excluir coluna data e acrescentar coluna data_nascimento do tipo date;

alter table usuarios drop column idade, add column data_nascimento date;

-- 8 - Atualizar dois cadastros adicionando datas de nascimento;

update usuarios set data_nascimento='1991-09-29' where email='auctor@duiFuscediam.edu';

update usuarios set data_nascimento='1988-11-02' where email='nec.metus.facilisis@vitaealiquet.edu';

-- 9 - Removendo todos os registros onde a data de nascimento for nulo;

delete from usuarios where data_nascimento is null;

-- 9.1 - Alterando propriedade da coluna data_nascimento para ser não nula (obrigatório);

alter table usuarios alter column data_nascimento set not null;

-- 10 - Inserir mais dois registros;

insert into usuarios
(nome, data_nascimento, email, senha)
values
('Tate I. Dean', '1989-05-01', 'Nunc@etmagnis.edu', 'd3V25D6Y'),
('Arsenio K. Harmon', '1985-10-23', 'adipiscing.elit@turpis.com', 'm3T58S0C');

-- 11 - Listar todos os registros da tabela usuarios;

select * from usuarios;