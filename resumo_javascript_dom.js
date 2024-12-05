// ==========================
// 1. Seleção de Elementos
// ==========================

// Seleciona um elemento pelo ID
const elementById = document.getElementById("myDiv");

// Seleciona todos os elementos com uma tag específica
const elementsByTag = document.getElementsByTagName("p");

// Seleciona todos os elementos com uma classe específica
const elementsByClass = document.getElementsByClassName("item");

// Seleciona o primeiro elemento que combina com um seletor CSS
const firstElement = document.querySelector(".container p");

// Seleciona todos os elementos que combinam com um seletor CSS
const allElements = document.querySelectorAll("li");
allElements.forEach(item => console.log(item.textContent));

// ==========================
// 2. Alteração de Conteúdo
// ==========================

// Altera ou retorna o texto de um elemento
const message = document.getElementById("message");
message.textContent = "Hello, JavaScript!";

// Altera ou retorna o HTML interno de um elemento
const content = document.getElementById("content");
content.innerHTML = "<strong>Bold Text</strong>";

// ==========================
// 3. Alteração de Estilos
// ==========================
const box = document.getElementById("box");
box.style.backgroundColor = "blue";
box.style.color = "white";

// ==========================
// 4. Gerenciar Classes
// ==========================
const myDiv = document.getElementById("myDiv");

// Adiciona classes
myDiv.classList.add("highlight", "rounded");

// Remove classes
myDiv.classList.remove("highlight");

// Alterna uma classe
myDiv.classList.toggle("active");

// Verifica se o elemento possui uma classe
console.log(myDiv.classList.contains("active")); // true ou false

// ==========================
// 5. Criar e Remover Elementos
// ==========================

// Cria um novo elemento
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new here!";
document.body.appendChild(newDiv);

// Remove um elemento
const toRemove = document.getElementById("toRemove");
toRemove.remove();

// ==========================
// 6. Manipulação de Atributos
// ==========================

const img = document.getElementById("myImage");

// Define ou modifica um atributo
img.setAttribute("src", "new-image.jpg");
img.setAttribute("alt", "A beautiful image");

// Obtém o valor de um atributo
const link = document.getElementById("myLink");
console.log(link.getAttribute("href")); // "https://example.com"

// Remove um atributo
const input = document.getElementById("myInput");
input.removeAttribute("disabled");

// Acessa diretamente uma propriedade de atributo
const emailInput = document.getElementById("emailInput");
emailInput.type = "text";
console.log(emailInput.type); // "text"

// Trabalhar com atributos `data-*` (Dataset)
const info = document.getElementById("info");
info.dataset.userId = "67890"; // Define ou altera
console.log(info.dataset.userId); // "67890"
delete info.dataset.userId; // Remove o atributo

// Verifica se um atributo existe
const button = document.getElementById("submitButton");
console.log(button.hasAttribute("disabled")); // true
console.log(button.hasAttribute("title")); // false

// ==========================
// 7. Eventos
// ==========================
const button = document.querySelector("button");

// Adiciona um evento
button.addEventListener("click", () => {
  alert("Button clicked!");
});

// Remove um evento
const handleClick = () => alert("Button clicked!");
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
