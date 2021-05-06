const inputado = document.getElementById("todoInput"); 
const botao = document.getElementById("todoSubmit");
const listaTarefas = document.getElementById("todoLista");
const marcarTodos = document.getElementById("todoMarcarTodos");
const limparLista = document.getElementById("todoRemoverTodos");

console.log(inputado, "inputado");
console.log(botao);
console.log(listaTarefas);
console.log(marcarTodos);
console.log(limparLista);


//criar evento botão
botao.addEventListener("click", (event) => {
    //previne que o formulário seja enviado ao clicar, espera processar o que precisa da função
    event.preventDefault();


    console.log("chamou evento");

const elementoLista = document.createElement("li");
const textoElemento = document.createElement("p");
const formulario = document.getElementById('todoForm');
const deletaElemento = document.createElement("span");

//atribuímos o valor do input ao <p> criado a partir do clique no botão

textoElemento.innerText = inputado.value;
deletaElemento.innerText = "🗑";

if (textoElemento.innerText.trim () === "" ) {
    alert("Insira uma tarefa");
}else {
    //pegamos o nó mãe, e acrescentamos o elemento filho com o append

listaTarefas.appendChild(elementoLista);
elementoLista.appendChild(textoElemento);
elementoLista.appendChild(deletaElemento);
}

//pegamos o nó do formulário e utilizamos um método para limpar o input
formulario.reset();

//função de checar
textoElemento.addEventListener("click", () => {
    textoElemento.classList.add("checked");

});

//função deletar
deletaElemento.addEventListener('click', () => {
    //outra forma de fazer abaixo
    //elementoLista.remove();
    listaTarefas.removeChild(elementoLista);

});

//função de limpar
limparLista.addEventListener("click", () => {
    console.log("clicou botão de limpar");

});

//função de marcar todos
marcarTodos.addEventListener("click", () => {
    let todosParagrafos = document.querySelectorAll("p");


if (marcarTodos.innerText === "Marcar todos"){

let todosParagrafos = document.querySelectorAll("p");
todosParagrafos.forEach(item => {
    item.classList.add("checked");
});

marcarTodos.innerText = "Desmarcar todos";
} else {

    todosParagrafos.forEach(item => {
        item.classList.remove("checked");
});
marcarTodos.innerText = "Marcar todos";

}

});
//função de limpar lista
limparLista.addEventListener('click', () => {
    listaTarefas.removeChild(elementoLista);

 });




});