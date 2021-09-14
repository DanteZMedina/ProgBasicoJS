/*Escribir un algoritmo que me de los numeros del 1 al 100      X
    -> si es divisible entre 3 escriba Fizz                     X
    -> si es divisible entre 5 escriba buzz                     X
    -> si es divisible entre 3 y 5 escriba fizzbuzz             X*/
    //Opcion 1 
    /*
    var numero = 100;
    var divisible = false;
for(i = 1; i <= numero; i ++)
{
    divisible = false;
    if (i % 3 == 0)
    {
        document.write("fizz");
        divisible = true;
    }
    if (i % 5 == 0)
    {
        document.write("buzz");
        divisible = true;
    }
    if (!divisible)
    {
        document.write(i);
    }
    document.write("<br />");
}
*/
   
    //Opcion 2 

    for (i = 1; i <= 100; i++)
    {
        if (i % 3 == 0)
        {
            document.write("Fizz");
        }
        if (i % 5 == 0)
        {
            document.write("Buzz");
        }
        if (i % 3 != 0 && i % 5 != 0)
        {
            document.write(i);
        }
        document.write("<br />");
    }

    if ( n % 3 == 0 && n % 5 == 0)
    {
        console.log("fizzbuzz");
    }
    else if(n % 5 == 0)
    {
        console.log("Buzz");

    }
    else if(n % 3 == 0)
    {
        console.log("Fizz");
    }
    else
    {
        console.log(n);
    }

    
   //Opcion 3 con una funcion divisible 
/*
   for (i = 1; i <= 100; i++)
   {
       if (esDivisible(i,3))
       {
           console.log("Fizz");
       }
       if (esDivisible(i,5))
       {
           console.log("Buzz");
       }
       if (!esDivisible(i,3) && !esDivisible(i,5))
       {
           console.log(i + " ");
       }
       document.write("<br />");
   }

   

function esDivisible(num, divisor)
{
    if (num % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
*/

for (n = 1; n <= 15; n++)
{
    if (n % 3 == 0)
    {
        console.log("Fizz");
    }
    if (n % 5 == 0)
    {
        console.log("Buzz");
    }
    if (n % 3 != 0 && n % 5 != 0)
    {
      console.log(n);
    }
    
}