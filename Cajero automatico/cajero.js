class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    //Recordamos que la caja de texto solo recibe numeros pero ahora vamos
    //a convertir todo a entero para que solo sean enteros y nada mas que 
    //enteros
    dinero = parseInt(t.value);
    for (var bi of caja)
    {
        if (dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);

            if (div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else 
            {
                papeles = div;
            }

            entregado.push( new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }

    }
    if (dinero > 0 )
    {

        resultado.innerHTML = "no tengo esa cantidad de dinero :( ";
    }
    else
    {
        for (var e of entregado)
        {
            if (e.cantidad > 0)
            {
                // += funciona como:
                //resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $ " + e.valor + "<br />";
                //simplemente estamos contrayendo de forma que += indica que la variable es igual a su valor mas lo que haya despues del operador
                resultado.innerHTML += e.cantidad + " billetes de $ " + e.valor + "<br />";
            }
        }
    }
    console.log(entregado);
}

//disponible.innerHTML = 

var entregado = [];

var caja = [];
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 20));
caja.push(new Billete(5, 10));


const tanto = document.getElementById("money");

totalDinero();
function totalDinero ()
{
    var total = 1;
    for(tot of caja)
    {
        total += tot.valor * tot.cantidad;
    }
    console.log(total);
    if (total > 0 )
    {
        tanto.innerHTML = "tengo esta cantidad de dinero $ " + total;
    }
    else
    {
        tanto.innerHTML = "adios"; 
    }
}

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("Extraer");
b.addEventListener("click" , entregarDinero);

/*
                //pos 0   1   2
var billetes = [    [ 1 , 2 , 3 ] ,    //Arreglo 0
                    [ 4 , 5 , 6 ] ,       //arreglo 1
                    [ 7 , 8 , 9 ] ];      //Arreglo 2
        // el 1 representa el numero de arreglo y el 2 la posicion dentro del arreglo
console.log(billetes[1][2]); */