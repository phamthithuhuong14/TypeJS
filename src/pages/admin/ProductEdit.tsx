import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import instance from '~/apis'
import { TProduct } from '~/interfaces/Product'

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().required().min(6)
})

type Props = {
  onEdit: (product: TProduct) => void
}
const ProductEdit = ({ onEdit }: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct)
  })

  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    })()
  }, [])

  const onSubmit = (data: TProduct) => {
    onEdit({ ...data, id })
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Sua san pham</h1>
        <div className='form-group'>
          <label>title</label>
          <input
            className='form-control'
            type='text'
            {...register('title', { required: true })}
            defaultValue={product?.title}
          />
          {errors.title && <span className='text-danger'>{errors.title.message}</span>}
        </div>
        <div className='form-group'>
          <label>price</label>
          <input
            className='form-control'
            type='number'
            id='price'
            {...register('price', { required: true })}
            defaultValue={product?.price}
          />
          {errors.price && <span className='text-danger'>{errors.price.message}</span>}
        </div>
        <div className='form-group'>
          <label>description</label>
          <input
            className='form-control'
            type='text'
            {...register('description', { required: true, minLength: 6 })}
            defaultValue={product?.description}
          />
        </div>
        <button className='btn btn-primary w-100'>Add product</button>
      </form>
    </div>
  )
}

export default ProductEdit
