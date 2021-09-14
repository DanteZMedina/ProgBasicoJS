    //this se hace referencia al objeto que pertenece, en este caso nombre seria cauchin
    //y tipo se referiria al pakiman
    class Pakiman 
    {
        constructor (n, v, a)
        {
            this.imagen = new Image();
    
    
            this.nombre = n;
            this.vida = v;
            this.ataque = a;
    
            this.imagen.src = imagenes [this.nombre];
        }
        //Dentro de las clases no tenenmos que escribir 
        // FUNCTION 
        //porque se entiende de manera implicita que todo codigo dentro de una clase
        // es una funcion
        hablar()
        {
            alert(this.nombre);
        }
    
        mostrar()
        {
            document.body.appendChild(this.imagen);
            document.write("<div>");
            document.write("<strong>" + this.nombre + "</strong> <br />");
            document.write("Vida: " + this.vida + "<br/>" );
            document.write("Ataque: " + this.ataque + "<hr />");
            document.write("</div>");
        }
    }