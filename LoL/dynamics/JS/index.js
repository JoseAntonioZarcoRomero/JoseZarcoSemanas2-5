/*Clase principal (Plantilla del objeto)
--------------------------------------------------------------------*/
class Campeon {
    //Constructor
    constructor(nombre,vida,ataque,mana,habilidades,tipo,fuerte1,fuerte2){
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.mana = mana;
        this.habilidades = habilidades;
        this.tipo = tipo;
        this.fuerte1 = fuerte1;
        this.fuerte2 = fuerte2;
    }

    //Métodos
    presentarse(){
        console.log('Mi nombre es: '+this.nombre+', soy un campeón de League of Leyends');
        console.log('Mis grandiosas estadísticas son las siguientes; Vida:'+this.vida+', Maná:'+this.mana+', Ataque:'+this.ataque);
        console.log('Esta es la lista de mis habilidades: '+this.habilidades);
        /*for(let valor of this.habilidades){
            console.log(valor);
        }*/
    }
    comparar(Campeon){
        if(Campeon.tipo == this.tipo){
            console.log('La balanza está equilibrada, la victoria dependerá de tu habilidad y la de tu oponente.');
        } else if(Campeon.tipo == (this.fuerte1 || this.fuerte2)){
            console.log('Tu oponente, '+Campeon+', tiene las de perder.');
        } else if((Campeon.fuerte1 || Campeon.fuerte2) == this.tipo){
            console.log('Tu personaje, '+this.nombre+', tiene las de perder.');
        } else {
            console.log('No hay ventaja de tipo, suerte.');
        }
    }
}

/*Subclases
--------------------------------------------------------------------*/
class Tirador extends Campeon {
    constructor(nombre,vida,ataque,mana,habilidades,tipo,fuerte1,fuerte2){
        super(nombre,vida,ataque*=1.24,mana,habilidades='Distancia',tipo="Tirador",fuerte1="Tanque",fuerte2="Luchador");
    }
}

class Asesino extends Campeon {
    constructor(nombre,vida,ataque,mana,habilidades,tipo,fuerte1,fuerte2){
        super(nombre,vida*=0.95,ataque*=1.3,mana,habilidades,tipo="Asesino",fuerte1="Mago",fuerte2="Tirador");
    }
}

class Mago extends Campeon {
    constructor(nombre,vida,ataque,mana,habilidades,tipo,fuerte1,fuerte2){
        super(nombre,vida,ataque,mana*=1.24, habilidades='Distancia',tipo="Mago",fuerte1="Tirador",fuerte2="Luchador");
    }
}

class Tanque extends Campeon {
    constructor(nombre,vida,ataque,mana,habilidades,tipo,fuerte1,fuerte2){
        super(nombre,vida*=1.24,ataque,mana,habilidades='Armadura',tipo="Tanque",fuerte1="Mago",fuerte2="Asesino");
    }
}

class Luchador extends Campeon {
    constructor(nombre,vida,ataque,mana,habilidades,tipo,fuerte1,fuerte2){
        super(nombre,vida*=1.15,ataque*=1.15,mana,habilidades='Movilidad',tipo="Luchador",fuerte1="Asesino",fuerte2="Tanque");
    }
}

/*Instanciamiento de objetos
--------------------------------------------------------------------*/
//const pato = new Mago('pato',100,100,100,100, 'no sabe js', 'le gusta git');