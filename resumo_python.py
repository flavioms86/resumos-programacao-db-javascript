# ==========================
# 1. Variáveis e Tipos de Dados
# ==========================
x = 10          # Inteiro
y = 3.14        # Float
name = "Lume"   # String
is_active = True  # Boolean
fruits = ["apple", "banana", "cherry"]  # Lista
info = {"name": "John", "age": 30}      # Dicionário

# ==========================
# 2. Entrada e Saída
# ==========================
name = input("Qual é o seu nome? ")  # Entrada do usuário
print(f"Olá, {name}!")  # Saída formatada

# ==========================
# 3. Condicionais
# ==========================
age = 18
if age >= 18:
    print("Você é maior de idade.")
elif 16 <= age < 18:
    print("Quase lá!")
else:
    print("Você ainda é menor de idade.")

# ==========================
# 4. Laços de Repetição
# ==========================

# Laço FOR
for fruit in fruits:
    print(fruit)

# Laço WHILE
count = 0
while count < 5:
    print(count)
    count += 1

# ==========================
# 5. Funções
# ==========================
def greet(name):
    return f"Olá, {name}!"

print(greet("Lume"))

# ==========================
# 6. Trabalhando com Listas
# ==========================
numbers = [1, 2, 3, 4, 5]
numbers.append(6)  # Adiciona um elemento
numbers.remove(3)  # Remove um elemento
print(numbers[:3])  # Fatiamento: [1, 2, 4]

# ==========================
# 7. Trabalhando com Dicionários
# ==========================
person = {"name": "John", "age": 30}
print(person["name"])  # Acessar valor
person["age"] = 31     # Alterar valor
person["city"] = "New York"  # Adicionar novo par
print(person)

# ==========================
# 8. Manipulação de Strings
# ==========================
text = "Python é incrível!"
print(text.lower())   # python é incrível!
print(text.upper())   # PYTHON É INCRÍVEL!
print(text.split())   # ['Python', 'é', 'incrível!']

# ==========================
# 9. Tratamento de Exceções
# ==========================
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Não é possível dividir por zero!")
finally:
    print("Finalizando operação.")

# ==========================
# 10. Trabalhando com Arquivos
# ==========================
with open("arquivo.txt", "w") as file:
    file.write("Olá, mundo!")  # Cria e escreve no arquivo

with open("arquivo.txt", "r") as file:
    content = file.read()
    print(content)  # Lê o conteúdo do arquivo

# ==========================
# 11. Compreensão de Listas
# ==========================
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# ==========================
# 12. Módulos e Pacotes
# ==========================
import math
print(math.sqrt(16))  # 4.0

from datetime import datetime
print(datetime.now())  # Data e hora atuais

# =========================================================================================

# ==========================
# 1. Funções Avançadas
# ==========================

# Função com valores padrão
def greet(name="Mundo"):
    return f"Olá, {name}!"

print(greet())           # Olá, Mundo
print(greet("Lume"))     # Olá, Lume

# Função com argumentos variáveis
def add(*numbers):
    return sum(numbers)

print(add(1, 2, 3, 4))   # 10

# Função com argumentos nomeados
def info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

info(name="Lume", age=25)  # name: Lume, age: 25

# Função como argumento (função de ordem superior)
def apply(func, value):
    return func(value)

print(apply(lambda x: x**2, 5))  # 25

# ==========================
# 2. Classes e Objetos
# ==========================

# Classe básica
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def saudacao(self):
        return f"Olá, meu nome é {self.nome} e tenho {self.idade} anos."

p = Pessoa("João", 30)
print(p.saudacao())  # Olá, meu nome é João e tenho 30 anos.

# Herança
class Estudante(Pessoa):
    def __init__(self, nome, idade, curso):
        super().__init__(nome, idade)
        self.curso = curso

    def saudacao(self):
        return f"Sou {self.nome}, estudo {self.curso}."

e = Estudante("Maria", 22, "Engenharia")
print(e.saudacao())  # Sou Maria, estudo Engenharia.

# Classe com métodos estáticos
class Calculadora:
    @staticmethod
    def soma(a, b):
        return a + b

print(Calculadora.soma(10, 20))  # 30

# ==========================
# 3. Manipulação de Arquivos
# ==========================

# Escrever em um arquivo
with open("dados.txt", "w") as f:
    f.write("Linha 1\nLinha 2\n")

# Ler de um arquivo
with open("dados.txt", "r") as f:
    for linha in f:
        print(linha.strip())  # Linha 1, Linha 2

# ==========================
# 4. Tratamento de Exceções
# ==========================

try:
    x = 10 / 0
except ZeroDivisionError as e:
    print(f"Erro: {e}")
else:
    print("Sem erros!")
finally:
    print("Sempre executado!")

# Exceções personalizadas
class ValorInvalidoError(Exception):
    pass

def validar_valor(valor):
    if valor < 0:
        raise ValorInvalidoError("O valor não pode ser negativo!")

try:
    validar_valor(-1)
except ValorInvalidoError as e:
    print(f"Erro: {e}")

# ==========================
# 5. Testes com pytest
# ==========================

# Função para testar
def soma(a, b):
    return a + b

# Teste básico com pytest
def test_soma():
    assert soma(2, 3) == 5
    assert soma(-1, 1) == 0

# Para rodar o teste:
# 1. Instale o pytest: pip install pytest
# 2. Salve este código em um arquivo, por exemplo, test_app.py
# 3. Execute: pytest test_app.py

# ==========================
# 6. Funções mágicas
# ==========================

# ========================
# 1. O Método __init__
# ========================
class Pessoa:
    def __init__(self, nome, idade):  # Método chamado ao criar uma instância
        self.nome = nome
        self.idade = idade

    def apresentar(self):
        return f"Olá, meu nome é {self.nome} e tenho {self.idade} anos."

p = Pessoa("João", 30)
print(p.apresentar())  # Olá, meu nome é João e tenho 30 anos.

# ========================
# 2. __str__ e __repr__
# ========================
class Produto:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def __str__(self):  # Representação amigável do objeto
        return f"Produto: {self.nome}, Preço: R${self.preco:.2f}"

    def __repr__(self):  # Representação oficial do objeto
        return f"Produto(nome={self.nome}, preco={self.preco})"

produto = Produto("Camiseta", 49.99)
print(produto)           # Produto: Camiseta, Preço: R$49.99
print(repr(produto))     # Produto(nome=Camiseta, preco=49.99)

# ========================
# 3. __len__
# ========================
class ListaPersonalizada:
    def __init__(self, elementos):
        self.elementos = elementos

    def __len__(self):  # Permite usar len() no objeto
        return len(self.elementos)

lista = ListaPersonalizada([1, 2, 3, 4])
print(len(lista))  # 4

# ========================
# 4. __getitem__ e __setitem__
# ========================
class Colecao:
    def __init__(self):
        self.dados = {}

    def __getitem__(self, key):  # Permite acessar itens com colchetes
        return self.dados.get(key, "Chave não encontrada")

    def __setitem__(self, key, value):  # Permite atribuir itens com colchetes
        self.dados[key] = value

c = Colecao()
c["nome"] = "Lume"
print(c["nome"])  # Lume
print(c["idade"])  # Chave não encontrada

# ========================
# 5. __call__
# ========================
class Saudacao:
    def __init__(self, saudacao):
        self.saudacao = saudacao

    def __call__(self, nome):  # Permite usar o objeto como função
        return f"{self.saudacao}, {nome}!"

s = Saudacao("Olá")
print(s("Mundo"))  # Olá, Mundo!

# ========================
# 6. Operadores Matemáticos e Comparação
# ========================
class Numero:
    def __init__(self, valor):
        self.valor = valor

    def __add__(self, outro):  # Soma com +
        return Numero(self.valor + outro.valor)

    def __eq__(self, outro):  # Igualdade com ==
        return self.valor == outro.valor

n1 = Numero(10)
n2 = Numero(20)
n3 = n1 + n2
print(n3.valor)  # 30
print(n1 == n2)  # False

# ========================
# 7. Context Managers (__enter__ e __exit__)
# ========================
class GerenciadorDeArquivo:
    def __enter__(self):  # Inicializa o contexto
        print("Abrindo arquivo")
        return self

    def __exit__(self, exc_type, exc_value, traceback):  # Finaliza o contexto
        print("Fechando arquivo")

with GerenciadorDeArquivo() as ga:
    print("Dentro do bloco with")
# Abrindo arquivo
# Dentro do bloco with
# Fechando arquivo
