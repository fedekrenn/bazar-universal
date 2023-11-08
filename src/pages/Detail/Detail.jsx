import './detail.css'
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react'
// Router
import { useParams } from 'react-router-dom'
// MUI
import Rating from '@mui/material/Rating'
// Components
import Header from '../../components/Header/Header.jsx'
// Utils
import { getProductById } from '../../utils/getData.js'

export default function Detail() {
  const [product, setProduct] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    getProductById(parseInt(id))
      .then(data => setProduct(data))
  }, [id])

  return (
    <>
      <Header />
      <main className='detail'>
        {product && (
          <>
            <div className='row'>
              <img className='circle-img main-img' src={product.thumbnail} alt={product.title} />
              <div className='imgs-cointainer'>
                {product.images.slice(0, 3).map((image, index) => (
                  <img className='circle-img small' key={index} src={image} alt={`Imagen descriptiva n° ${index + 1} del producto ${product.title}`} />
                ))}
              </div>
            </div>
            <h1>{product.title} - {product.brand}</h1>
            <div className='sub-info'>
              <div>
                <h2>{product.price}$</h2>
                <p>{product.stock} disponibles</p>
              </div>
              <Rating name='read-only' value={product.rating} precision={0.2} size='small' readOnly />
            </div>
            <p>{product.description}</p>
          </>
        )}
      </main>
    </>
  )
}
