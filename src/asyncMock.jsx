const products = [
    {
        id: '1',
        name: 'Base liquida ',
        price: 1600,
        category: 'maquillaje',
        img: 'https://titan.vtexassets.com/arquivos/ids/163288/Salud-y-Belleza-Bases_30199588_1.jpg?v=637321693853270000',
        stock: '13',
        description: 'descripcion de base liquida'
    },
    {
        id: '2',
        name: 'Corrector de ojeras ',
        price: 12000,
        category: 'maquillaje',
        img: 'https://www.maferbenites.com/wp-content/uploads/2020/02/proconceal-cooltan.jpg',
        stock: '13',
        description: 'descripcion de corrector de ojeras'
    },
    {
        id: '3',
        name: 'Cabina ',
        price: 19999,
        category: 'accesorios',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_789319-MLA51006441569_082022-F.webp',
        stock: '13',
        description: 'Cabina Uv Led Sun 80w Uñas Esculpidas Gelificadas Semiperma'
    },
    {
        id: '4',
        name: 'Cabina ',
        price: 25700,
        category: 'accesorios',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_849204-MLU72748520586_112023-F.webp',
        stock: '13',
        description: 'Cabina Secador Uñas Sun X5 Max 120w Uv Led Gelificadas Semi Color Blanco'
    },
    {
        id: '5',
        name: 'Kit para uñas ',
        price: 4.999,
        category: 'uñas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_971788-MLA72507696894_102023-O.webp',
        stock: '13',
        description: 'Kit X6 Polygel 30ml Pincel Solucion Capsula Dual Completo'
    },
    {
        id: '6',
        name: 'Esmalte para uñas ',
        price: 2.948,
        category: 'uñas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_640747-MLU72675274952_112023-F.webp',
        stock: '13',
        description: 'Esmalte Para Uñas Revlon Super Lustrous Nail Enamel Color Revlon red'
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

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}