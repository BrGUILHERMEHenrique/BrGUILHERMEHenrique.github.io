var listelement = document.querySelector ('body div#app ul');/*busca o item no arquivo HTML, com base em seu local e seu tipo*/
var inputElement = document.querySelector ('body div#Input input');/*busca o item no arquivo HTML, com base em seu local e seu tipo*/
var btnElement = document.querySelector ('body div#Input button');/*busca o item no arquivo HTML, com base em seu local e seu tipo*/
			/*busca no local Storage do navegador as tarefas salvas, usando	JSON para transformar em forma legivel*/
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
															/*comanda para que caso o storage esteja vazio, que ele seta como vazio para ser iniciado*/
function renderTodos() {
	listelement.innerHTML = '';/*faz com que os elementos da tela sejam limpos toda vez que se adiciona uma tarefa nova, para que não fiquem se repetindo*/
	
	for (let todo of todos){
		var todoElement = document.createElement('li');/*cria um elemento em forma de lista para adicionar os itens*/
		var todoText = document.createTextNode(todo);/*Cria o elemento de texto baseado na lista todo fornecida*/

		var linkElement = document.createElement('button');/*Cria o button para indicar que as tarefas possam ser excluidas */
		/*EStilização so botão, Deus que ne perdoe, um dia eu mprometo melhorar isso */
		linkElement.style.backgroundColor = '#FF3300';
		linkElement.style.border = 'none';
		linkElement.style.borderRadius = '10px';
		linkElement.style.opacity = '30%';
		linkElement.style.marginLeft = '30px';
		linkElement.style.color = 'black';


		linkElement.setAttribute ('href', '#'); /*cria um atributo ao botão para que ele posso funcionar*/

		var linkText = document.createTextNode('Feito');/*Insere o texto que aparecera no botão*/

		var pos = todos.indexOf(todo);/*cria a indexação de arquivos para que a posição possa ser achada, assim possibilitando a função de achar a posição correta */
		linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');/*chama a função delete para apagar as tarefas ao apertar o botão*/
		

		linkElement.appendChild(linkText);/*Cria o botão*/

		todoElement.appendChild (todoText);/*cria o texto com o nome da tarefa*/
		todoElement.appendChild(linkElement);/*cria os botão de feito na tela  */


		listelement.appendChild(todoElement);/*Insere a terefa na tela*/
	}	
}
 

 renderTodos();/*chama a função para renderizar a lista novamente*/

 function addTodos(){/*FUNÇÃO para adicionar tarefas*/
	var todoText = inputElement.value;/*Lê o valor, ou no caso a tarefa digitada*/

	todos.push(todoText);/*Manda o valor, tarefa, inserido para o text que será mostrado na tela*/
	inputElement.value = '';/*seta o valor inicial da entrada como vazio*/
	renderTodos();/*chama a função para renderizar a lista novamente*/
	savetostorage();/*chama a função de salvamento da lista*/
}

btnElement.onclick = addTodos;/*comanda que a função addtodos seja chamada quando o botão for clicado*/


function deleteTodo (pos){/*função para deletar as tarefas baseada em sua posição*/
	todos.splice(pos, 1);/*indica que a tarefa na posição que será inserida será apagada, e que será somente uma a ser deletada*/
	renderTodos();/*chama a função para renderizar a lista novamente*/
	savetostorage();/*chama a função para salvamento da lista*/
}

function savetostorage (){ /*função que salva as tarefas no local storage*/
	localStorage.setItem ('list_todos', JSON.stringify(todos));
}										/*usa o JSON para modificar e ler a list_todos, já que o local storage não lê array*/













