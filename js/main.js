
$(document).ready(function(){
	var numero=0
		$(".one").click(function(){
		numero+=1
		if(numero%2){
				$(this).text("x");
				$(this).off("click");
					var resultado = jugar("x");
					if (numero==9){
						if(resultado==false) {
							alert("YOU LOSE");
						}
					}
				}else{
					$(this).text("o");
					$(this).off("click")
					var resultado = jugar("o");
					if (numero==9){
						if(resultado==false) {
							alert("YOU LOSE");
						}
					}	

				}
			
		});

function jugar(valor){
	var btn1=$("#btn1").text()
    var btn2=$("#btn2").text()
    var btn3=$("#btn3").text()
    var btn4=$("#btn4").text()
    var btn5=$("#btn5").text()
    var btn6=$("#btn6").text()
    var btn7=$("#btn7").text()
    var btn8=$("#btn8").text()
    var btn9=$("#btn9").text()
    var ganador = true;
    if(btn1==btn2 && btn1==btn3 && btn1  == valor){
    	alert("YOU WIN!")
    }else if(btn1==btn4 && btn1==btn7 && btn1 == valor){
    	alert("YOU WIN!")
    }else if(btn1==btn5 && btn1==btn9 && btn1 == valor){
    	alert("YOU WIN!")
    }else if(btn2==btn5 && btn2==btn8 && btn2 == valor){
    	alert("YOU WIN!")
    }else if(btn3==btn6 && btn3==btn9 && btn3 == valor){
    	alert("YOU WIN!")
    }else if(btn7==btn8 && btn7==btn9 && btn7 == valor){
    	alert("YOU WIN!")
    }else if(btn3==btn5 && btn3==btn7 && btn3 == valor){
    	alert("YOU WIN!")
    }else if(btn4==btn5 && btn4==btn6 && btn4 == valor){
    	alert("YOU WIN!")
    }else{
    	ganador = false;
    }
    return ganador;
}
    
});
 //$('#boton').click(function(){
   //         $('.one')[0].reset();
 //});

$(document).ready(function() {
        $('.btn-link').click(function() {
            location.reload();
     });
});
$(document).ready(function() {
        $('.btn-link').click(function() {
            location.reload();
     });
});