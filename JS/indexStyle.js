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

/*Adiciona pequena estilização ao nome*/
nome.style.fontSize = '33px';
nome.style.textAlign = 'center';

      /*Menu Style, configura todo style do menu*/

menu.style.width = '1000px';
menu.style.height = '100px';
menu.style.backgroundColor = 'rgba(10, 10, 10, 40%)';
menu.style.marginTop = '-12px';
menu.style.display = 'none';
menu.style.border = 'none';
menu.style.borderRadius = '5px';
		/*Botão página Git Hub*/
proj.style.textDecoration = 'none';
proj.style.fontSize = '20px';
proj.style.backgroundColor = 'transparent';
proj.style.color = 'white';
proj.style.borderLeft = '1px solid grey';
proj.style.borderRight = '1px solid grey';
proj.style.borderTop = 'transparent';
proj.style.borderBottom = 'transparent';
proj.style.marginLeft = '0';

			/*Botão Portifólio, configura todo style nom botão PORTIFÓLIO.*/

port.style.textDecoration = 'none';
port.style.fontSize = '20px';
port.style.background = 'transparent';
port.style.color = 'white';
port.style.borderLeft = '1px solid grey';
port.style.borderRight = '1px solid grey';
port.style.borderTop = 'transparent';
port.style.borderBottom = 'transparent';
port.style.marginTop = '25px';
port.style.marginLeft = '20px';

		/*Configura a div em um tamanho agradável para que seja usada como área sensorial*/
btns.style.width = '20px';
btns.style.height = '15px';



				/*desde ponto até 'pŕoximo, configuramos, todas as linhas dentro da div que refencia o menu*/
MenuButton.style.backgroundColor = 'white';
MenuButton.style.width = '20px';
MenuButton.style.height = '3px';
MenuButton.style.marginBottom = '2px';

MenuButton2.style.backgroundColor = 'white';
MenuButton2.style.width = '20px';
MenuButton2.style.height = '3px';
MenuButton2.style.marginBottom = '2px';
MenuButton2.style.textAlign = 'center';
MenuButton2.style.aligncontent = 'center';

MenuButton3.style.backgroundColor = 'white';
MenuButton3.style.width = '20px';
MenuButton3.style.height = '3px';
MenuButton3.style.marginBottom = '2px';
				/*Final da configuração das linhas*/
