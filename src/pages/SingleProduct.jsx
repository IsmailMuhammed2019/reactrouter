import { useParams, NavLink } from "react-router-dom"
import products from '../data'

const SingleProduct = () => {
    const {productId} = useParams()

    const product = products.find((product) => product.id === productId)

    const {image, name} = product
  return (
    <div>
        <img src={image} alt={name} style={{width: '300px', heigth:'300px'}}/>
        <h4>{name}</h4>
        <NavLink to='/products'>Back to Products</NavLink>
    </div>
  )
}

export default SingleProduct