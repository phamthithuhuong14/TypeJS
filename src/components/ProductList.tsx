import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '~/apis'
import { TProduct } from '~/interfaces/Product'
import ProductItem from './ProductItem/ProductItem'

const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await instance.get(`/products`)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])
  return (
    <>
      <h1>San pham ban chay</h1>
      <div className='row'>
        {products.map((product: TProduct) => (
          <div className='col col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center'>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductList
