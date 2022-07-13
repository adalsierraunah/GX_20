window.onload = function(){
//Escucha de Eeventos....
//Mi Primer Evento....
document.getElementById("MiBoton").addEventListener('dblclick', function(){
    this.style.backgroundColor = "Blue";
})
document.getElementById("MiBoton").addEventListener('click', function(){
    this.style.backgroundColor = "Red";
})
//Mi Segundo Evento....
document.getElementById("MiParrafo").addEventListener('click', cambiartexto);

}//Fin del AddEvenListener

function cambiartexto(){

    document.getElementById("MiNombre").innerHTML = "Derechos Reservados Universidad Pedagógica FM 2021";
}

function FechaActual(){
    var Fecha = new Date();
    alert("Hoy es la fecha : " + Fecha.getDate());
}

function Suma(){
    var numero1 = Number (prompt("Ingrese el Primer Número:", ""));
    var numero2 = Number (prompt("Ingrese el Segundo Número:", ""));
    var Total = numero1 + numero2;
    alert("El Resultado es : " + Total);
}