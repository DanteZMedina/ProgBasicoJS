/*Escribir un algoritmo que me de los numeros del 1 al 100      X
    -> si es divisible entre 3 escriba Fizz                     X
    -> si es divisible entre 5 escriba buzz                     X
    -> si es divisible entre 3 y 5 escriba fizzbuzz             X*/

    var numeros = 0;

    for (numeros=1; numeros <= 100; numeros++)
    {
        if (numeros % 3 == 0)
        {
            document.write("Fizz");
        }
        if (numeros % 5 == 0)
        {
            document.write("Buzz");
        }
        if (numeros % 3 != 0 && numeros % 5 != 0)
        {
            document.write(numeros);
        }
            document.write("<br>");
    }

    

    for (numero = 1; numero <= 100; numero++)
    {
        if (esDivisible(numero, 3))
        {
            document.write("Fizz");
        }
        if (esDivisible(numero, 5))
        {
            document.write("Buzz");
        }
        if (!esDivisible(numero,3) && !esDivisible(numero,5))
        {
            document.write(numero + " ");

        }
        document.write("<br>");
    }


function esDivisible(numero, divisor)
{
    if (numero % divisor == 0)
    {
        return true;
    }

    else
    {
        return false;
    }
}

console.log("1");

console​.​log​(​mivariable​)
var ​​mivariable​ = "hola"​;