import './detailContainer.css'
import { useState, useEffect } from 'react'
// Router
import { useParams } from 'react-router-dom'
// Components
import Header from '../../components/Header/Header.jsx'
import NotFound from '../NotFound/NotFound.jsx'
import DetailSkeleton from '../../components/Skeleton/DetailSkeleton/DetailSkeleton.jsx'
import Detail from '../../components/Detail/Detail.jsx'
// Utils
import { getProductById } from '../../utils/getData.js'
// Hooks
import useSeo from '../../customHooks/useSeo.js'

export default function DetailContainer() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { id } = useParams()
  useSeo({ title: product?.title, description: product?.description })

  useEffect(() => {
    getProductById(parseInt(id))
      .then(data => setProduct(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [id])

  if (error) return <NotFound message={error.message} />

  return (
    <>
      <Header />
      <main className='detail'>
        {loading
          ? <DetailSkeleton />
          : <Detail product={product} />}
      </main>
    </>
  )
}
