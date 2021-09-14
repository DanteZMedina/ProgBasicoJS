var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujo1"); 
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    lienzo.clearRect(0,0,300,300);
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf; 
    var colorin = "#FAA"
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l+1);
       dibujarLinea("purple", 300, yi, xf, 0);
        dibujarLinea("blue", 0, yi, xf, 300);
        dibujarLinea("green", yi, 300, 300, 300-(xf));
        dibujarLinea("red", 0, 300-yi, yi, 1);

    }

    dibujarLinea(colorin, 1,1, 1,ancho-1);
    dibujarLinea(colorin, 1,ancho-1, ancho-1,ancho-1);

    dibujarLinea(colorin, ancho-1,1, 1,1);
    dibujarLinea(colorin, ancho-1,ancho-1, ancho-1,1);

}



















/*while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea("purple", 0, yi, xf, 300);
    console.log("linea " + l);
    l = l + 1;
}*/

/*abajo izquierda*/ 