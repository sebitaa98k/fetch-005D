const obtenerDigimones = () => {
    return new Promise((resolve,reject)=>{
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then( (digimones)=>{
            if(!digimones.ok){
                throw new Error("ERROR AL LLAMAR EL API");
            }
            return digimones.json();
        })
        .then((data)=>{
            resolve(data);
            //
        })
        .catch((error)=>{
            reject(error);
            //console.error(error);
            //console.warn(error);
            //es un clg que aparece como error
        })
    })
}

obtenerDigimones()
 .then((digimones)=>{
    digimones.map((digimon)=>{
        console.log(digimon);
    });
 }).catch((error)=>{
    console.log(`ERROR: ${error}`);
 })


//.map recorre el arreglo,

//callback funciones q funcionan como parametros

//si el api es de pokemonnes, el response sera pokemones