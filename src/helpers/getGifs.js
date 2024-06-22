export const getGifs = async (category) => {
    const API_KEY = 'GWZP7lEd8X8bE115tawSM0iOWWdn8PbF';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20`;
    const respuesta = await fetch(URL);
    const { data = [] } = await respuesta.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}