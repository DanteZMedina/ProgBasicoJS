var vp = document.getElementById("villa");
var papel = vp.getContext("2d");

//Variable global para la cantidad de animales
var cantidadVacas = aleatorio(1, 5);
var cantidadCerdos = aleatorio(1, 8);
var cantidadpollos = aleatorio(1, 15);
var cx = 150;
var cy = 150;
var movimiento = 5;

//Creando iniciadores de los objetos, fondo y animales.
//Esto es un iniciador de objeto: fondo
var fondo = {url: "tile.png",cargaOK: false};
//Esto es un iniciador de objeto: vaca
var vaca = {
    url: "vaca.png",
    cargaOK: false 
};
//Esto es un iniciador de objeto: cerdo
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};
//Esto es un iniciador de objeto: pollo
var pollo = {
    url: "pollo.png",
    cargaOK: false
};
var teclas = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};


//Aqui se esta creando un objeto y cargandolo del archivo png: fondo
fondo.imagen = new Image();
fondo.imagen.src = fondo.url
fondo.imagen.addEventListener("load", cargarFondo);

//Se esta craendo un objeto y cargando del archivo png: vaca
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

//Vamos a crear el objeto del cerdo y cargarlo del archivo png: cerdo
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
document.addEventListener("keydown", movercerdo);

//Ahora vamos a crear el objeto pollo y cargarlo del archivo png en la 3ra linea: pollo
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

//Con esta funcion nos aseguramos que ya ha cargado nuestro fondo y esta listo para mostrarse.
function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
//Con esta funcion nos aseguramos que ya se ha cargado nuestra vaca y esta lista para mostrarse.
function cargarVaca()
{
    vaca.cargaOK = true;
    vaca.x = [];
    vaca.y = [];
    for (var n = 0; n < cantidadVacas; n++)
    {
        vaca.x[n] = aleatorio(0, 7) * 50;
        vaca.y[n] = aleatorio(0, 7) * 50;
    }
    dibujar();
}
//Vamos a crear la funcion para el cerdo en el que aseguremos que ya se ha cargado y esta listo para usarse.
function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}
//Y finalmente crearemos la funcion del pollo para cuando este cargado y listo para mostrar.
function cargarPollo()
{
    pollo.cargaOK = true;
    pollo.x = [];
    pollo.y = [];
    for (var p = 0; p < cantidadpollos; p++)
    {
        pollo.x[p] = aleatorio(0, 7) * 60;
        pollo.y[p] = aleatorio(0, 7) * 60;
    }
    dibujar();
}
function movercerdo(evento)
{
    switch(evento.keyCode)
    {
        case teclas.UP://restar a y
            cy = cy - movimiento;
            if(cy < 0) cy = 0;
            dibujar();
        break;

        case teclas.DOWN: //sumar a Y
            cy = cy + movimiento;
            if(cy > 420) cy = 420; 
            dibujar();
        break;

        case teclas.LEFT: //restar a X
            cx = cx - movimiento;
            if(cx < 0) cx = 0;
            dibujar();
        break;

        case teclas.RIGHT: //sumar a X
            cx = cx + movimiento;
            if(cx > 420) cx = 420;
            dibujar();
        break; 
           
    }
}

function dibujar()
    {
        //Unicamente si el fondo esta cargado, se procedera a dibujar.
        if (fondo.cargaOK)
        {
            papel.drawImage(fondo.imagen, 0, 0);
        }
        //Hasta que vaca este cargada, se procedera a dibujar / mostrar.
        if (vaca.cargaOK)
        {
            console.log(cantidadVacas);
            for(var v=0; v < cantidadVacas; v++)
            {
            papel.drawImage(vaca.imagen, vaca.x[v], vaca.y[v]);
            }
        }
        //Vamos a crear la condicion para cuando el cerdo este cargado, se pueda dibujar / mostrar.
        if (cerdo.cargaOK)
        {
            papel.drawImage(cerdo.imagen, cx, cy);
        }
        
        //Finalmente para concluir el primer reto, agregaremos la condicion para cuando el pollo este cargado, se dibuje / muestre.
        if (pollo.cargaOK)
        {
            for( var p = 0; p < cantidadpollos; p++)
            {
                papel.drawImage(pollo.imagen, pollo.x[p], pollo.y[p]);
            }
        }
    }


//Funcion para generar los numeros aleatorios para nuestros animales 
function aleatorio(min, max)
    {
        var resultado;
        resultado = Math.floor(Math.random() * (max - min + 1)) + min;
        return resultado;
    }

/*
//Agregando teclas
document.addEventListener("keydown", dibujarTeclado);
var teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var x = 150;
var y = 150;
var xcerdo = 320;
var ycerdo = 400;
//Esta funcion nos permite dar movimiento a las teclas al presionarlas
//hace un llamado a la funcion dibujar linea. 
function dibujarTeclado(evento)
{
    var movimiento = 5;
    switch(evento.keyCode)
    {
        case teclas.DOWN: 
            papel.drawImage(cerdo.imagen, xcerdo, ycerdo, x, y + movimiento);
            y = y + movimiento;
            cargarFondo();
        break;

        case teclas.UP:
            papel.drawImage(cerdo.imagen, xcerdo, ycerdo, x, y - movimiento);
            y = y - movimiento;
        break;

        case teclas.RIGHT:
            papel.drawImage(cerdo.imagen, xcerdo, ycerdo, x + movimiento, y);
            x = x + movimiento;
        break;

        case teclas.LEFT:
            papel.drawImage(cerdo.imagen, xcerdo, ycerdo, x - movimiento, y);
            x = x - movimiento;
        break;

        default:
            console.log("otra tecla");
        break;
    }
}
*/