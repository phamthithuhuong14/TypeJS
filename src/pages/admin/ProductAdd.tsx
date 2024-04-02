import { useForm } from 'react-hook-form'
import { TProduct } from '~/interfaces/Product'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, '')
})
type Props = {
  onAdd: (product: TProduct) => void
}

const ProductAdd = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct)
  })
  const onSubmit = (data: TProduct) => {
    onAdd(data)
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Them san pham</h1>
        <div className='form-group'>
          <label htmlFor='title'>title</label>
          <input
            className='form-control'
            type='text'
            placeholder='title...'
            id='title'
            {...register('title', { required: true })}
          />
          {errors.title && <span className='text-danger'>This field is required</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>price</label>
          <input
            className='form-control'
            type='number'
            placeholder='price...'
            id='price'
            {...register('price', { required: true })}
          />
          {errors.price && <span className='text-danger'>This field is required</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>description</label>
          <input
            className='form-control'
            type='text'
            placeholder='description...'
            id='description'
            {...register('description')}
          />
        </div>
        <button className='btn btn-primary w-100'>Add product</button>
      </form>
    </div>
  )
}

export default ProductAdd
