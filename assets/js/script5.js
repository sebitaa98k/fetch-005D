$(document).ready(function(){
    
    function obtenerDigimones(){
        $('#obtenerDigimones').click(function(){
            $.ajax({
                url: 'https://digimon-api.vercel.app/api/digimon',
                type: 'GET',
                success: function(data){
                    localStorage.setItem("digimon",JSON.stringify(data));
                    //Guardar la informacion en el localStorage, se debe guardar en JSON ya que no se puede guardar en arreglos la info
                    mostrarDigimones(data);
                },
                error: function(xhr, status, error){
                    console.error('Error al obtener los datos: ',error);
                }
            });
        });
    }
    function mostrarDigimones(digimones){

        let digimonList = '';
        let digArray = [];
        $.map(digimones, function(digimon){
            const{img,name,level} = digimon;
            digArray =[...digimones];
            let card = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card">
                        <img scr="${digimon.img}" class="card-img-top" alt="${digimon.name}">
                        <div class="card-body">
                            <h5 class="card-title">${digimon.name}</h5>
                            <p class="card-text">Nivel: ${digimon.level}</p>
                            <p class="card-text">Tipo:  ${digimon.type}</p>
                        </div>
                    </div>
                </div> 
                `;
                digimonList = digimonList + card;
                //digimonList += card;
        });
        $('#digimonList').html(digimonList);
    }


    obtenerDigimones();

})