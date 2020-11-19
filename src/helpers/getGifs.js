
export const getGifs = async ( category ) => {
    const apiKey = 'PUUrcz0gdKvJ2Kk80H0V25xPYN4sKePt';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.fixed_height_downsampled.url
        }
    });
    return gifs;
}
