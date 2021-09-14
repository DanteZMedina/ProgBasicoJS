/*Este es un bloque de codigo de variables*/
var teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149,149,151,151,papel);
//Esta funcion nos permite pintar la linea de color
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
//Esta funcion nos permite dar movimiento a las teclas al presionarlas
//hace un llamado a la funcion dibujar linea. 
function dibujarTeclado(evento)
{
    var colorcito = "brown";
    var movimiento = 5;
    switch(evento.keyCode)
    {
        case teclas.DOWN: 
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;

        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;

        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;

        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;

        default:
            console.log("otra tecla");
        break;
    }
}

if (cerdo.cargaOK)
{

    for (var c = 0; c < cantidadCerdos; c++)
    {
        var x = aleatorio (0, 7);
        var y = aleatorio (0, 7);
        var x = x * 40;
        var y = y * 40;
        papel.drawImage(color, x, y);
    }
}
