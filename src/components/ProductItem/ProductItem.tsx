import { Link } from 'react-router-dom'
import { TProduct } from '~/interfaces/Product'
import style from './ProductItem.module.scss'

type Props = {
  product: TProduct
}

const ProductItem = (props: Props) => {
  return (
    <div key={props.product.id} className={style.productCard}>
      <Link to={`/shop/${props.product.id}`}>
        <img width={360} src={props.product.thumbnail} alt={props.product.title} />
      </Link>
      <div className={style.productContent}>
        <Link to={`/shop/${props.product.id}`}>
          <h3>{props.product.title}</h3>
        </Link>
        <p>Gia: {props.product.price}</p>
        <p>{props.product.description}</p>
        <button className='btn btn-primary w-100'>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductItem
