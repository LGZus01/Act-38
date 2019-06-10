function iniciar(){
	var elemento=document.getElementById("lienzitooo1");
	lienzitooo1=elemento.getContext("2d");

	var degradado=lienzitooo1.createLinearGradient(20,200,200,200);

	degradado.addColorStop(0,"#900B0B");
	degradado.addColorStop(0.3,"#EAEA09");
  	degradado.addColorStop(0.5,"#1DDD2E");
  	degradado.addColorStop(0.7,"#13E4C1");
  	degradado.addColorStop(1,"#0F3BF1");
	lienzitooo1.fillStyle=degradado;
	lienzitooo1.fillRect(0,0,200,200);
}
function iniciar2(){
	var elemento2=document.getElementById("lienzitooo2");
	lienzitooo2=elemento2.getContext("2d");

	var degradado2=lienzitooo1.createLinearGradient(20,200,200,200);

	degradado2.addColorStop(0,"#B011E3");
	degradado2.addColorStop(0.5,"#0AEA58");
  	degradado2.addColorStop(1,"#E9F00D");
	lienzitooo2.fillStyle=degradado2;
	lienzitooo2.fillRect(0,0,200,200);
}
function iniciar3(){
	var elemento3=document.getElementById("lienzitooo3");
	lienzitooo3=elemento3.getContext("2d");

	var degradado3 = lienzitooo3.createRadialGradient(105,100,30,100,120,140);
	degradado3.addColorStop(0,"#07F1BC");
	degradado3.addColorStop(0.5,"#62D806");
	degradado3.addColorStop(1,"#A711E3");
	lienzitooo3.fillStyle=degradado3;
	lienzitooo3.fillRect(0,0,500,300);

}
function iniciar4(){
	var elemento4=document.getElementById("lienzitooo4");
	lienzitooo4=elemento4.getContext("2d");

	var degradado4 = lienzitooo4.createRadialGradient(105,100,30,100,120,140);
  	degradado4.addColorStop(0,"#F7FE2E");
	degradado4.addColorStop(0.3,"#FF0000");
  	degradado4.addColorStop(0.5,"#00FF00");
  	degradado4.addColorStop(0.7,"#FF00FF");
  	degradado4.addColorStop(1,"#00FFFF");
	lienzitooo4.fillStyle=degradado4;
	lienzitooo4.fillRect(0,0,500,300);

}
function iniciar5(){
	var elemento5=document.getElementById("lienzitooo5");
	lienzitooo5=elemento5.getContext("2d");

	var degradado5 = lienzitooo5.createLinearGradient(0,25,200,200);
	//var degradado = lienzo.createRadialGradient(250,150,50,250,150,300);
	degradado5.addColorStop(0,"#2FFA02");
  degradado5.addColorStop(0.5,"#0AE8EB");
	degradado5.addColorStop(1,"#0A1BEB");
	lienzitooo5.fillStyle=degradado5;
	lienzitooo5.fillRect(0,0,200,200);

}
window.addEventListener("load",iniciar,false);
window.addEventListener("load",iniciar2,false);
window.addEventListener("load",iniciar3,false);
window.addEventListener("load",iniciar4,false);
window.addEventListener("load",iniciar5,false);