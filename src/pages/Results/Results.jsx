import './results.css'
import { useEffect, useState } from 'react'
// Router
import { useSearchParams, Link } from 'react-router-dom'
// MUI
import Rating from '@mui/material/Rating'
// Components
import Header from '../../components/Header/Header.jsx'
// Utils
import { getProducts } from '../../utils/getData.js'

export default function Results() {
  const [products, setProducts] = useState([])

  const [searchParams] = useSearchParams()
  const category = searchParams.get('search')

  useEffect(() => {
    getProducts(category)
      .then(data => setProducts(data))
  }, [category])

  return (
    <>
      <Header />
      <main className='results'>
        <h1>Resultados de búsqueda de "{category}": {products.length}</h1>
        <ul>
          {products.map((product) => (
            <Link to={`/items/${product.id}`} key={product.id}>
              <li className='card'>
                <img className='circle-img' src={product.thumbnail} alt={product.title} />
                <div>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <div className='price-section'>
                    <strong>{product.price}$</strong>
                    <Rating name='read-only' value={product.rating} precision={0.2} size='small' readOnly />
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </>
  )
}
