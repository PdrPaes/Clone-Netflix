const API_KEY = '329789b1ed3ff6580b3808dbd153231b';
const API_BASE = 'https://api.themoviedb.org/3';


/*
- originais Netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- documentários
- aventura
*/

const basicFetch = async(endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async() =>{
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv `)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
        ];
    }
}