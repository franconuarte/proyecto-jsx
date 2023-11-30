const products = [
    {
        id: '1',
        name: 'Base liquida ',
        price: 1600,
        category: 'maquillaje1',
        img: 'https://titan.vtexassets.com/arquivos/ids/163288/Salud-y-Belleza-Bases_30199588_1.jpg?v=637321693853270000',
        stock: '10',
        description: 'descripcion de base liquida'
    },
    {
        id: '2',
        name: 'Corrector de ojeras ',
        price: 12000,
        category: 'maquillaje2',
        img: 'https://www.maferbenites.com/wp-content/uploads/2020/02/proconceal-cooltan.jpg',
        stock: '17',
        description: 'descripcion de corrector de ojeras'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}