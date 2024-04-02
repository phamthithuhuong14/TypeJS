import { TProduct } from '~/interfaces/Product'
import instance from './index'

export const getAllProducts = async () => {
  try {
    const { data } = await instance.get('/products')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const createProduct = async (product: TProduct) => {
  try {
    const { data } = await instance.post('/products', product)
    return data
  } catch (error) {
    console.log(error)
  }
}
