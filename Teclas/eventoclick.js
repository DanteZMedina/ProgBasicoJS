var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var color = document.getElementById("colorin");

var dibujando = false;
var x = 0;
var y = 0;

cuadrito.addEventListener("mousedown", tocando);
cuadrito.addEventListener("mousemove", moviendo);
cuadrito.addEventListener("mouseup", levantando);


function tocando(evento)
{
    x = evento.offsetX;
    y = evento.offsetY;
    dibujando = 1;
}

function moviendo(evento)
{
    if (dibujando === 1)
    {
        dibujandoLineas(color.value, x, y, evento.offsetX, evento.offsetY);
        x = evento.offsetX;
        y = evento.offsetY;
    }
    else
    {
        x = evento.offsetX;
        y = evento.offsetY;
    }
}

function levantando(evento)
{
   dibujando = 0;
}

function dibujandoLineas(color, xinicial, yinicial, xfinal, yfinal)
{
    papel.beginPath();
    papel.lineWidth = 3;
    papel.strokeStyle = color;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke(); 
    papel.closePath();
}


//Funcion para mover con el teclado
function moverCerdo(evento)
{
    var movimiento = 5;
    switch (evento.keyCode) {
        case teclas.DOWN:
            dibujarLinea(cerdo, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;

        case teclas.UP:
            dibujarLinea(cerdo, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;

        case teclas.LEFT:
            dibujarLinea(cerdo, x, y, x - movimiento, y, papel);
            x = x - movimiento;
             break;
        case teclas.RIGHT:
            dibujarLinea(cerdo, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
    
        default:
            console.log("otra tecla ¬¬");
            break;
    }
}

function dibujarLinea(cerdo, xinicial, yinicial, xfinal, yfinal, papel)
{
    /*
    var cerdo = "yellow";
    papel.beginPath();
    papel.strokeStyle = cerdo;
    papel.lineWidth = 3;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath();
    */
    if (cerdo.cargaOK)
    {
        papel.beginPath();
        papel.drawImage(cerdo, x, y);
        papel.moveTo(xinicial, yinicial);
        papel.lineTo(xfinal, yfinal);
        papel.closePath();
    }
}
