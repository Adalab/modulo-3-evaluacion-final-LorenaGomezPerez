
// Función donde hacemos una petición al servidor, y que me devuelve una serie de datos

const getDataApi = () => {
    return fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50')
    
    .then((response)=>response.json())
    .then((data)=>{
        const dataReduced = data.map((scene, index)=>{
        return {
            id: index,
            poster: scene.poster,
            movie: scene.movie,
            quote: scene.full_line,
            year: scene.year,
            director: scene.director,
            audio: scene.audio,
            
            };
        });
        return dataReduced;
    });
};

export default getDataApi;