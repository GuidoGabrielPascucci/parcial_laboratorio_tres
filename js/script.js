import { insertarTabla } from './tableFunctions.js';


const armas = [ 'Armadura', 'Espada', 'Martillo', 'Escudo', 'Arma de fuego', 'Flechas']
localStorage.setItem('armas', JSON.stringify(armas));

const armasStr = localStorage.getItem('armas');
const armasLocalStorage = JSON.parse(armasStr);

const select = document.getElementById('select-arma');

armasLocalStorage.forEach(arma => {
    const option = document.createElement('option');
    option.textContent = arma;
    option.value = arma;
    select.appendChild(option);
});    


class Personaje {
    constructor(id, nombre, fuerza) {
        this.id = id;
        this.nombre = nombre;
        this.fuerza = fuerza;
    }
}

class Superheroe extends Personaje {
    constructor(id, nombre, alias, editorial, fuerza, arma) {
        super(id, nombre, fuerza);
        this.alias = alias;
        this.editorial = editorial;
        this.arma = arma;
    }
}


const superman = new Superheroe(1, 'Clark', 'Superman', 'DC Comics', 100, 'Musculos');
const ironman = new Superheroe(2, 'Tony', 'Ironman', 'Marvel', 20, 'Armadura');
const hulk = new Superheroe(3, 'Bruce', 'Hulk', 'Marvel', 99, 'Musculos');
const wonderwoman = new Superheroe(4, 'Diana', 'Wonder Woman', 'DC Comics', 800, 'Lazo');

const superheroes = [ superman, ironman, hulk, wonderwoman ];
localStorage.setItem('superheroes', JSON.stringify(superheroes));


const dataLocalStorage = localStorage.getItem('superheroes');
let arrayElementos = JSON.parse(dataLocalStorage);

insertarTabla(arrayElementos);