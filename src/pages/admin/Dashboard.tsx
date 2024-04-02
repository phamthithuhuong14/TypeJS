import { TProduct } from '~/interfaces/Product'
import { Link } from 'react-router-dom'

type Props = { products: TProduct[]; onDel: (id: number) => void }

const Dashboard = ({ products, onDel }: Props) => {
  console.log(products)
  return (
    <div>
      <h1>Hello Admin!</h1>
      <Link className='btn btn-primary' to='/admin/add'>
        Add new product
      </Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.title}</td>
              <td>{i.price}</td>
              <td>
                <img width={160} src={i.thumbnail} alt={i.title} />
              </td>
              <td>{i.description}</td>
              <td>
                <Link to={`/admin/edit/${i.id}`} className='btn btn-warning'>
                  Edit
                </Link>
                <button className='btn btn-danger' onClick={() => onDel(Number(i.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
