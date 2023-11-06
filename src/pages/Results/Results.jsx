import './results.css'
import img from '../../assets/logo.svg'
import { useEffect, useState } from 'react'
// React Router
import { useSearchParams } from 'react-router-dom'
// MUI
import Rating from '@mui/material/Rating'
// Components
import Search from '../../components/Search/Search.jsx'
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
    <main className='results'>
      <header>
        <img src={img} alt='Imagen de logo' />
        <Search />
      </header>
      <h1>Resultados de búsqueda de "{category}": {products.length}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className='card'>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <div className='price-section'>
                <strong>{product.price}$</strong>
                <Rating name='read-only' value={product.rating} precision={0.2} size='small' readOnly />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
