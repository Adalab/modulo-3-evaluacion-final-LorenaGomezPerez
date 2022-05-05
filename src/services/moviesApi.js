
// Función donde hacemos una petición al servidor, y que me devuelve una serie de datos

const getDataApi = () => {
    return fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50')
    
    .then((response)=>response.json())
    .then((data)=>{
        const dataReduced = data.map((task)=>{
        return {
            poster: task.poster,
            movie: task.movie,
            quote: task.full_line,
            year: task.year,
            director: task.director,
            audio: task.audio,
            };
        });
        return dataReduced;
    });
};

export default getDataApi;