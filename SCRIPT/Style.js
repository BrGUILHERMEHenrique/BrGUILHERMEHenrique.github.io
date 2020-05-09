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

var proj = document.querySelector('body div#menu div#P button')
proj.style.textDecoration = 'none';
proj.style.color = 'black';
proj.style.transform = 'uppercase';
proj.style.fontFamily = "Verdana";
proj.style.fontSize = '12px';
proj.style.backgroundColor = 'transparent';
proj.style.border = 'none';
proj.style.width = '10%';
proj.style.height = '20%';
proj.style.marginLeft = '20%';


var port = document.querySelector('body div#menu button');

port .style.textDecoration = 'none';
port.style.color = 'black';
port.style.width = '10%';
port.style.height = '10%';
port.style.background = 'transparent';
port.style.border = 'none';
port.style.marginLeft = '7%';

var btns = document.querySelector('body div#btns');

btns.style.width = '20px';
btns.style.height = '15px';

console.log(btns);



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
	MenuButton2.style.transform = 'rotate(45deg)';
	MenuButton2.style.backgroundColor = 'blue';
	MenuButton3.style.display = 'none';
	MenuButton.style.transform = 'rotate(-45deg)';
	MenuButton.style.backgroundColor = 'blue';
	
}

btns.onmouseover = function menu(){
	menuaberto();
}

function menufechado() {
	menu.style.display = 'none';
	MenuButton2.style.transform = 'none';
	MenuButton2.style.backgroundColor = 'black';
	MenuButton3.style.display = 'block';
	MenuButton.style.transform = 'none';
	MenuButton.style.backgroundColor = 'black';


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
	proj.style.fontSize = '24px';
	proj.style.color = 'white';

}

proj.onmouseout = function () {
	proj.style.fontSize = '12px';
	proj.style.color = 'black';
}

