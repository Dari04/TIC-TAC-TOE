$(document).ready(function(){
    // eventos
    $(".one").click(jugada);
    $('#boton').click(reiniciar);
});


// validacion de ganador
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


// funcion del evento click para jugar
var numero=0;
var resultado;
function jugada() {
    numero+=1
    if(numero%2){
        $(this).text("x");
        resultado = jugar("x");
        
    }else{
        $(this).text("o");
        resultado = jugar("o");
    }
    $(this).off("click");
    if (numero==9){
        if(resultado==false) {
            alert("DRAW!");
        }
    } 
}


// funcion para reiniciar el juego
function reiniciar() {
    $("#btn1").text("+");
    $("#btn2").text("+");
    $("#btn3").text("+");
    $("#btn4").text("+");
    $("#btn5").text("+");
    $("#btn6").text("+");
    $("#btn7").text("+");
    $("#btn8").text("+");
    $("#btn9").text("+");
    $(".one").click(jugada);
    numero=0;
    // cualquiera de los dos se puede 
    //$(document).on("click", ".one", jugada);

}