const obtenerDigimonAsyncAwait = async() => {
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
  
  // Ejemplo de uso:
  (async function(){
    try {
      const data = await obtenerDigimonAsyncAwait();
      console.log('Datos de Digimon obtenidos con éxito:', data);
    } catch (error) {
      console.error('Error al obtener datos de Digimon:', error);
    }
  })();


  