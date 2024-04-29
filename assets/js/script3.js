const obtenerDigimonAsyncAwait = async () => {
    try {
      const response = await fetch('https://digimon-api.vercel.app/api/digimon');
      
      if (!response.ok) {
        throw new Error('Hubo un problema al obtener los datos de Digimon.');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  // Función para mostrar los Digimon en cards
  const mostrarDigimon = async () => {
    const digimonRow = document.getElementById('digimonRow');
    try {
      const digimones = await obtenerDigimonAsyncAwait();
      localStorage.setItem("digimones",JSON.stringify(digimones));
      digimones.map((digimon) => {        
        const cardCol = document.createElement('div');
        cardCol.classList.add('col-sm-4');

        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('mt-2');
        card.classList.add('mb-2');

        const cardImg = document.createElement('img');
        cardImg.classList.add('card-img-top');
        cardImg.src = digimon.img;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = digimon.name;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = `Nivel: ${digimon.level}`;        

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        card.appendChild(cardImg);
        card.appendChild(cardBody);
        
        cardCol.appendChild(card);
        digimonRow.appendChild(cardCol);
      });
    } catch (error) {
      console.error('Error al obtener datos de Digimon:', error);
    }
  }

  // Ejecutar la función para mostrar los Digimon
  mostrarDigimon();