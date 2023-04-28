import { NavLink } from 'react-router-dom'
import products from '../data'

const Products = () => {
  return (
    <div className="products">
        <h2>Products </h2>
        {
            products.map((product) => {
                const {id, name, image} = product
                return (
                    <article key={id}>
                        <img src={image} alt={name} style={{width: '100px', height:'100px'}}/>
                        <h3>{name}</h3>
                        <NavLink to={`/products/${id}`}>View Products</NavLink>
                    </article>
                )
            })
        }
    </div>
  )
}

export default Products