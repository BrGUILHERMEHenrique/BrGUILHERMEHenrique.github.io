/* Declara o corpo do site*/
var body = document.querySelector('body');
/* Declara a tag para o nome*/
var nome = document.querySelector('body p#nome');
/* Declara toda parte do menu*/
var menu = document.querySelector('body div#menu');
var proj = document.querySelector('body div#menu div#Btnsmenu button#pág');
var port = document.querySelector('body div#Btnsmenu button#port');
/*Declara a div e as linhas que componhem o botão de menu*/
var btns = document.querySelector('body div#btns');
var MenuButton = document.querySelector('body div#btn1');
var MenuButton2 = document.querySelector('body div#btn2');
var MenuButton3 = document.querySelector('body div#btn3');
/*Declara o texto*/
var intro = document.querySelector('body div#In');
var text = document.querySelector ('body div#In span');
/*Declara a variável de cada imagem*/
var Insta = document.querySelector ('body img#Insta');
var Face = document.querySelector ('body img#Facebook');
var Twit = document.querySelector ('body img#Twitter');
var You = document.querySelector ('body img#You');



/*Função que mantém o menu aberto enquanto o mouse estiver em sua área */
function menuaberto() {
	menu.style.display = 'block';
	MenuButton2.style.display = 'none';
	MenuButton3.style.display = 'none';
	MenuButton.style.display = 'none';	
}


	/*Função que mantém o menu fechado até ser chamado pela função a cima*/ 
function menufechado() {
	menu.style.display = 'none';
	MenuButton2.style.display = 'block';
	MenuButton3.style.display = 'block';
	MenuButton.style.display = 'block';

}


		/*Desda parte para até o próximo ponto se chama as funções de menu aberto e fechado em suas devidas ocasiões*/
btns.onmouseover = function menu(){
	
	menuaberto();
}


btns.onmouseout = function menu2 (){
	
	menufechado();
}

menu.onmouseover = function menu3 (){
		menuaberto();
}

menu.onmouseout = function menu4 (){
	
	menufechado();
}
		/*Término da parte de chamada de funções*/

/*Cria uma função que abre a página relacionada ao nome do botão*/
proj.onclick = function ( ) {
	alert ('Uma nova janela será aberta!');
	location.href = ('https://github.com/BrGUILHERMEHenrique');

}
	/* Configura a estilização do botão quando se passa o mouse por cima dele*/
proj.onmouseover = function (){
	proj.style.height = '20%';
	proj.style.transform = 'scale(1.3)';
	proj.style.color = 'white';
	proj.style.backgroundColor = 'rgba(0, 0, 0, 10%)';
	proj.style.borderTop = '1px solid grey';
	proj.style.borderBottom = '1px solid grey';
	proj.style.transition = '.8s';
	port.style.filter = 'blur(1px)';
}
	/* Configura para que quando o mouse esteja fora do botão, que ele volte ao seu estado normal*/
proj.onmouseout = function () {
	proj.style.transform = 'none';
	proj.style.color = 'white';
	proj.style.backgroundColor = 'transparent';
	proj.style.borderBottom = 'none';
	proj.style.borderTop = 'none';
	port.style.filter = 'none';
}
	/* Configura a estilização do botão quando se passa o mouse por cima dele*/
port.onmouseover =  function() {
	port.style.transform = 'scale(1.3)';
	port.style.color = 'white';
	port.style.borderTop = '1px solid grey';
	port.style.borderBottom = '1px solid grey';
	port.style.transition = '.8s';
	proj.style.filter = 'blur(1px)';
}
	/* Configura para que quando o mouse esteja fora do botão, que ele volte ao seu estado normal*/
	
port.onmouseout = function ( ) {
	port.style.transform = 'none';
	port.style.color = 'white';
	port.style.borderTop = 'none';
	port.style.borderBottom = 'none';
	proj.style.filter = 'none';
}
	/* Configura a puxada da pŕoxima página configurada*/
port.onclick = function ( ){
	location.href =('projetos.html');
}

Insta.onclick = function ( ) {
	location.href = 'https://www.instagram.com/brguilhemehenrique/';
}

Face.onclick = function ( ) {
	location.href = 'https://www.facebook.com/guilhermehenrique.ramosdesouza/';	
}


Twit.onclick = function ( ) {
	window.open ('https://twitter.com/BrGUILHERMEH');
}

You.onclick = function ( ) {
	location.href = 'https://www.youtube.com/channel/UCfSNJdln7EuhMVdROh2G90g?view_as=subscriber';
}

