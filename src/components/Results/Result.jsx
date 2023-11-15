import './results.css'
// MUI
import Rating from '@mui/material/Rating'
// Router
import { Link } from 'react-router-dom'

export default function ResultsContainer({ category, products }) {
  return (
    <>
      <h1>Resultados de búsqueda de "{category}": {products.length}</h1>
      <ul>
        {products.map(product => (
          <Link to={`/items/${product.id}`} key={product.id}>
            <li className='card'>
              <img className='circle-img' src={product.thumbnail} alt={product.title} />
              <div>
                <h2>{product.title}</h2>
                <p className='description'>{product.description.substring(0, 70)}...</p>
                <div className='price-section'>
                  <strong>{product.price}$</strong>
                  <Rating name='read-only' value={product.rating} precision={0.2} size='small' readOnly />
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}
