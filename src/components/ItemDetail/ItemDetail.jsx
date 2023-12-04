import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    return (
        <article className='article'>
            <header className='centrar'>
                <h2>
                    {name}
                </h2>
            </header>
            <picture className='centrar'>
                <img className='img' src={img} alt={name} />
            </picture>
            <section className='section'>
                <p >
                    Categoria: {category}
                </p>
                <p >
                    Descripcion: {description}
                </p>
                <p >
                    Precio: ${price}
                </p>
            </section>
            <footer className='centrar'>
                <ItemCount initial={0} stock={13} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)} />
            </footer>
        </article>
    )

}

export default ItemDetail