var body = document.querySelector('body');
var ToDo = document.querySelector('body button#Todo');

/*Estilizando*/

body.style.width = 'auto';
body.style.height = 'auto';
body.style.backgroundColor = '#708090';




/*Botões*/

ToDo.style.background = 'none';
ToDo.style.border = 'none';
ToDo.style.fontSize = '33px';





/*Funções*/


ToDo.onmouseover = function ( ) {
	ToDo.style.fontSize = '40px';
	ToDo.style.color = 'white'
} 
ToDo.onmouseout = function ( ) {
	ToDo.style.fontSize = '33px';
	ToDo.style.color = 'black';

}

ToDo.onclick = function ( ) {
	window.open ('ToDo.html');
}

