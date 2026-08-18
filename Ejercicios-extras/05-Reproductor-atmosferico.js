'use strict'

class PistaAudio {
    static idPista = 0;
    constructor(titulo, duraciónSegundos){
        this._idPista = ++PistaAudio.idPista;
        this._titulo = titulo;
        this._duracionSegundos = duraciónSegundos;
    }

    get idPista() {
        return this._idPista;
    }

    toString() {
        return `ID: ${this._idPista} "${this._titulo}" - Duración:${this._duracionSegundos} s`;
    }   
}

class Cancion extends PistaAudio {
    static idCancion = 0;
    constructor(titulo, duraciónSegundos, artista, genero){
        super(titulo, duraciónSegundos);
        this._idCancion = ++Cancion.idCancion;
        this._artista = artista;
        this._genero = genero;
    }

    get idCancion() {
        return this._idCancion;
    }

    toString() {
        return `${super.toString()} | Artista:${this._artista} | Genero:${this._genero}`;
    }

}

class PlayList{
    static idPlayList = 0;
    constructor() {
        this._idPlayList = ++PlayList.idPlayList;
        this._playlist = [];
    }

    agregarPista(pista){
        try{
            if(pista instanceof PistaAudio){
                this._playlist.push(pista);
            } else {
                throw new Error('⚠️ El archivo no es una pista de audio válida.');
            }
        } catch (error){
            console.log(error.message);
        }
    }

    reproducirPlayList(){

        if(this._playlist.length === 0) {
            console.log(`PlayList #${this._idPlayList} está vacía. Sin pistas válidas`);
            return;
        }

        let reproductorPlayList = "";

        for(let pista of this._playlist){
            reproductorPlayList += `\n ${pista}`
        }

        console.log(`PlayList #${this._idPlayList} , Pistas:${reproductorPlayList}`);
    }
}

let pista1 = new PistaAudio("Outro", 243);
let pista2 = new PistaAudio("Summer", 250);
let cancion1 = new Cancion("The Nights", 190, "Avicii", "Electronic");
let cancion2  = new Cancion("I Will Follow You", 263, "RIVVRS", "Cinematic");

let playlist1 = new PlayList();
let playlist2 = new PlayList();
let playlist3 = new PlayList();
playlist1.agregarPista(cancion2);
playlist1.agregarPista(pista1);
playlist2.agregarPista(cancion1);
playlist2.agregarPista(pista2);
playlist3.agregarPista('Link roto');
console.log(pista1.toString());
console.log(cancion2.toString());

playlist1.reproducirPlayList();
playlist2.reproducirPlayList();
playlist3.reproducirPlayList();