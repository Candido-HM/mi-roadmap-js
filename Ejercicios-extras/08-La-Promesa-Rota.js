//Promesas en Js
const pedirUnTiempo = (regresoConEx) => {
    return new Promise((volver, terminar) => {
        console.log('Necesito un tiempo para pensar lo que quiero');
        console.log('Pasando los días.....');
        setTimeout(() => {
            if(regresoConEx){
                volver('Pense bien las cosas y me di cuenta que te extraño');
            } else {
                terminar('El tiempo tenía nombre y apellido');
            }
        }, 5000)
    }); 
}

async function pausarRelacion() {
    try{
        let finalFeliz = await pedirUnTiempo(false);
        console.log(finalFeliz);
    } catch(error) {
        console.log(error)
    }
}
pausarRelacion();