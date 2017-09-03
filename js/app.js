function onmousedownButton(elemento){
	elemento.style.height = "61px";
}
function onmouseupButton(elemento){
	elemento.style.height = "62.91px";
}
function onmousedownButton2(elemento){
	elemento.style.height = "98%";
}
function onmouseupButton2(elemento){
	elemento.style.height = "100%";
}


var tmp = 0, lastValue = '', operation = 0, currentValue = '', display = '', isPunto = '', signo = '-'
function establecerValorBoton(elemento){

	
	if(elemento.alt == 0 && lastValue == 0)
		return;
	
	if(elemento.alt == 'On'){
		display.textContent = "0"
		resetLastValue()
		return;
	}
	 

	  
	if(elemento.alt == 'raiz')
	     return;
	
	if(elemento.alt == 'signo'){
	  if(signo == '-'){
	  	 display.textContent = display.textContent.includes("+") ?  (signo+display.textContent.substring(1,display.textContent.length)) : signo+display.textContent
	  	 signo = '+'
	  	 if(operation == 0)
			lastValue = -lastValue
		else
			currentValue = -currentValue
	  }else{
	  	display.textContent = display.textContent.includes("-") ?  (display.textContent.substring(1,display.textContent.length)) : signo+display.textContent
	  	signo = '-'
	  	if(operation == 0)
			lastValue = (lastValue*lastValue)/lastValue
		else
			currentValue = (currentValue*currentValue)/currentValue
	  }
	 
	  return;
	}
	
	if(elemento.alt == 'punto'){
		if(isPunto == '')
			isPunto = '.'
		else
			return;
		console.log(isPunto)
		
	}
	
	
	
	if(elemento.alt != 'igual')
		if(elemento.alt == 'mas' || elemento.alt == 'menos' || elemento.alt == 'por' || elemento.alt == 'dividido'){
			tmp = elemento.alt
			setSigno()
			operation = tmp
			isPunto = ''
			return
		}else{
		   if(operation == 0){
		   	    if(lastValue.length > 8)
	  				return;
	    		lastValue = lastValue + (elemento.alt == 'punto' ? '.' : elemento.alt)
	    		display.textContent = lastValue
	    	}else{
	    		if(currentValue.length > 8)
	    			return;
	    		currentValue = currentValue + (elemento.alt == 'punto' ? '.' : elemento.alt)
	    		display.textContent = currentValue
	    	}
	    }
	else{
		switch(tmp){
			case 'mas':
				display.textContent = mas(lastValue, currentValue)
			break
			case 'menos':
				display.textContent = menos(lastValue, currentValue)
			break
			case 'por':
				display.textContent = por(lastValue, currentValue)
			break
			case 'dividido':
				display.textContent = dividido(lastValue, currentValue)
			break
		}
		resetLastValue()
	}
}

function resetLastValue(){
	tmp = 0, lastValue = '', operation = 0, currentValue = '', isPunto = '', signo = '-'
}

function setSigno(){
	switch(tmp){
		case 'mas':
			display.textContent = "+"
		break
		case 'menos':
			display.textContent = "-"
		break
		case 'por':
			display.textContent = "*"
		break
		case 'dividido':
			display.textContent = "/"
		break
	}
}

function mas (uno, dos) {
  return (parseFloat(uno)+parseFloat(dos)).toFixed(2)
}

function menos (uno, dos) {
  return (parseFloat(uno)-parseFloat(dos)).toFixed(2)
}

function por (uno, dos) {
  return (parseFloat(uno)*parseFloat(dos)).toFixed(2)
}

function dividido (uno, dos) {
  return (parseFloat(uno)/parseFloat(dos)).toFixed(2)
}

var Eventos = {
  init: function(){
    //document.onkeypress = this.eventoSonido;
    //this.asignarEventosBotones('boton-accion');
    //this.asignarEventosBotones('boton-next');
   // this.asignarEventoMostrar();
   this.asignarEventosBotones('tecla');
   this.reducirTeclado1('.teclado img');
   this.reducirTeclado1('.teclado .row .col1 img');
   this.reducirTeclado2('.teclado .row .col2 img');
   display = document.getElementById('display');
  },
  asignarEventosBotones: function(selector){
    var botonesPagina = document.getElementsByClassName(selector);
    for (var i = 0; i < botonesPagina.length; i++) {
      botonesPagina[i].onclick = this.eventoClickBotones;
    }
  },
  reducirTeclado1: function(selector){
    var botonesPagina = document.querySelectorAll(selector)
    for (var i = 0; i < botonesPagina.length; i++) {
      botonesPagina[i].onmousedown = this.eventoOnmousedownButton;
      botonesPagina[i].onmouseup = this.eventoOnmouseupButton;
    }
  },
   reducirTeclado2: function(selector){
    var botonesPagina = document.querySelectorAll(selector)
    for (var i = 0; i < botonesPagina.length; i++) {
      botonesPagina[i].onmousedown = this.eventoOnmousedownButton2;
      botonesPagina[i].onmouseup = this.eventoOnmouseupButton2;
    }
  },
  eventoClickBotones: function(event){
    establecerValorBoton(event.target);
  },
  eventoOnmousedownButton: function(event){
    onmousedownButton(event.target);
  },
  eventoOnmouseupButton: function(event){
    onmouseupButton(event.target);
  },
  eventoOnmousedownButton2: function(event){
    onmousedownButton2(event.target);
  },
  eventoOnmouseupButton2: function(event){
    onmouseupButton2(event.target);
  }
  

}

Eventos.init();