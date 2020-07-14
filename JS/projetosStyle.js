var body = document.querySelector('body');
var ToDo = document.querySelector('body button#Todo');
var Opção1 = document.querySelector('body div#Todoo');
var a = document.querySelector('body div#Todoo a#U');

console.log(Opção1);
/*Estilizando*/

body.style.width = 'auto';
body.style.height = 'auto';
body.style.backgroundColor = '#202020';




/*Botões*/

ToDo.style.backgroundColor = 'transparent';
ToDo.style.color = 'white';
ToDo.style.border = 'none';
ToDo.style.fontSize = '33px';

/*DIV*/
Opção1.style.backgroundColor = 'transparent';
Opção1.style.textAlign = 'left';
Opção1.style.width = 'auto';
Opção1.style.height = 'auto';
Opção1.style.display = 'none';
Opção1.style.marginTop = '-10px';



/*usar*/
a.style.color = 'lightgrey';
a.style.border = 'none';
a.style.fontSize = '20px';
a.style.textDecoration = 'none';







/*Funções*/


function opçoesA ( ) {
	ToDo.style.transform = 'scale(1.3)';
	ToDo.style.transition = '0.6s';
	ToDo.style.color = 'white';
	ToDo.style.border = '1px solid grey';
	Opção1.style.display = 'block';
} 

ToDo.onmouseover = function () {
	opçoesA()
}
a.onmouseover = function (){
	opçoesA()
}

 function opçoesf ( ) {
	ToDo.style.transform = 'none';
	ToDo.style.color = 'white';
	Opção1.style.display = 'none';


}
ToDo.onmouseout = function (){
	opçoesf();

}


Opção1.onmouseout = function () {
	opçoesf();

}
Opção1.onmouseover = function ( ) {
	opçoesA();
}

Opção1.onmouseout = function ( ) {
	opçoesf();
}
a.onclick = function ( ) {
	location.href = 'ToDo.html';
}

a.onmouseover = function () {
	a.style.transform = 'scale(1.7)';
	a.style.color  = 'white';
	a.style.border = '1px solid white';
}

a.onmouseout = function ( ) {
	a.style.transform = 'none';
	a.style.color  = 'lightgrey';
	a.style.border = 'none';
}
