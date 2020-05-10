var nome = document.querySelector('body p#nome');

nome.style.fontSize = '33px';
nome.style.textAlign = 'center';


var menu = document.querySelector('body div#menu');

menu.style.width = 'auto';
menu.style.height = '100px';
menu.style.backgroundColor = 'rgba(0, 0, 0, 20%)';
menu.style.marginTop = '-12px';
menu.style.display = 'none';
menu.style.border = 'none';
menu.style.borderRadius = '5px';

var proj = document.querySelector('body div#menu div#Btnsmenu button#pág')
proj.style.textDecoration = 'none';
proj.style.color = 'black';
proj.style.transform = 'uppercase';
proj.style.fontFamily = "Verdana";
proj.style.fontSize = '20px';
proj.style.backgroundColor = 'transparent';
proj.style.border = 'none';
proj.style.marginLeft = '0';


var port = document.querySelector('body div#Btnsmenu button#port');

port.style.textDecoration = 'none';
port.style.color = 'black';
port.style.fontSize = '20px';
port.style.background = 'transparent';
port.style.border = 'none';
port.style.marginTop = '25px';
port.style.marginLeft = '20px';

var btns = document.querySelector('body div#btns');

btns.style.width = '20px';
btns.style.height = '15px';



var MenuButton = document.querySelector('body div#btn1');

MenuButton.style.backgroundColor = 'black';
MenuButton.style.width = '20px';
MenuButton.style.height = '3px';
MenuButton.style.marginBottom = '2px';




var MenuButton2 = document.querySelector('body div#btn2');

MenuButton2.style.backgroundColor = 'black';
MenuButton2.style.width = '20px';
MenuButton2.style.height = '3px';
MenuButton2.style.marginBottom = '2px';
MenuButton2.style.textAlign = 'center';
MenuButton2.style.aligncontent = 'center';




var MenuButton3 = document.querySelector('body div#btn3');

MenuButton3.style.backgroundColor = 'black';
MenuButton3.style.width = '20px';
MenuButton3.style.height = '3px';
MenuButton3.style.marginBottom = '2px';

function menuaberto() {
	menu.style.display = 'block';
	MenuButton2.style.display = 'none';
	MenuButton3.style.display = 'none';
	MenuButton.style.display = 'none';
	
}



function menufechado() {
	menu.style.display = 'none';
	MenuButton2.style.display = 'block';
	MenuButton3.style.display = 'block';
	MenuButton.style.display = 'block';


}

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





proj.onclick = function ( ) {
	alert ('Uma nova janela será aberta!');
	window.open ('https://github.com/BrGUILHERMEHenrique');

}

proj.onmouseover = function (){
	proj.style.height = '20%';
	proj.style.fontSize = '30px';
	proj.style.color = 'white';
	proj.style.backgroundColor = 'rgba(0, 0, 0, 10%)';
	menu.style.msFilter = 'blur(20px)';

}

proj.onmouseout = function () {
	proj.style.fontSize = '20px';
	proj.style.color = 'black';
	proj.style.backgroundColor = 'transparent';
}

port.onmouseover =  function() {
	port.style.fontSize = '24px';
	port.style.color = 'white';
}

port.onmouseout = function ( ) {
	port.style.fontSize = '20px' ;
	port.style.color = 'black';
}
port.onclick = function ( ){
	window.open('projetos.html');
}