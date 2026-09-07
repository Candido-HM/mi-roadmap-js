"use strict";

function reproducirTopCanciones(listaCanciones, limite) {
    try{
        if(limite > listaCanciones.length){
            throw new Error('No hay suficientes canciones en la lista');
        }

        console.log(`--------------Reproduciendo top ${limite}----------------`)
        for(let i = 0; i < limite; i++) {
            console.log(`Posicion ${i+1}: ${listaCanciones[i]}`);
    
        }
    } catch(error) {
        console.log(error.message);
    }
}

let misFavoritas = ["The Nights", "Outro", "Midnight City", "I Will Follow You"];
reproducirTopCanciones(misFavoritas,3);
reproducirTopCanciones(misFavoritas,5);