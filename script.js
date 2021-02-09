const letras=['B','I','N','G','O']
const max = 4;
const min=0;
var bolilla;
var numeros=[];

function construyeBolilla(){
	var letra = randomLetra();
	var num;
	
	switch(letra){
		case 'B':
			num= Math.round(Math.random() * (15 - 1) + 1);
			bolilla = letra+num;
	
			pintarNumero();
			
			return bolilla;
		case 'I':
			num= Math.round(Math.random() * (30 - 16) + 16);
			bolilla = letra+num;
			pintarNumero();
			return bolilla;
		case 'N':
			num= Math.round(Math.random() * (45 - 31) + 31);
			bolilla = letra+num;
			pintarNumero();
			return bolilla;
		case 'G':
			num= Math.round(Math.random() * (60 - 46) + 46);
			bolilla = letra+num;
			pintarNumero();
			return bolilla;
		case 'O':
			num= Math.round(Math.random() * (75 - 60) + 60);
			bolilla = letra+num;
			pintarNumero();
			return bolilla;

	}
	
}



function randomLetra(){
   return letras[Math.round(Math.random() * (max - min) + min)];
}

window.onload=function generarTabla(){
var cadena="<tr><th colspan='5'>Bolillas jugadas</th></tr>";
cadena+="<tr><td>B</td><td>I</td><td>N</td><td>G</td><td>O</td></tr>";
				for (var i = 1; i <=15; i++) {
					cadena+="<tr>"
					cadena+="<td id='"+i+"'>"+i+"</td>"
					cadena+="<td id='"+Number(i+15)+"'>"+Number(i+15)+"</td>"
					cadena+="<td id='"+Number(i+30)+"'>"+Number(i+30)+"</td>"
					cadena+="<td id='"+Number(i+45)+"'>"+Number(i+45)+"</td>"
					cadena+="<td id='"+Number(i+60)+"'>"+Number(i+60)+"</td>"
					cadena+="</tr>";
				}
				

	return document.getElementById("tabla").innerHTML=cadena;				
}

function pintarNumero(){
	var id=bolilla.slice(1);
document.getElementById(id).style.color="red";
}


function generarBolilla(){
	let bolilla=construyeBolilla();
	if(numeros.length===0){
		numeros.push(bolilla);
					return document.getElementById("bolilla").innerHTML=bolilla;
	}
	//console.log(numeros.include(bolilla));
	if(!numeros.includes(bolilla)){
		numeros.push(bolilla);
					return document.getElementById("bolilla").innerHTML=bolilla;

	}
	else{
		console.log("ESTA REPETIDO!!" + bolilla);
	}

}