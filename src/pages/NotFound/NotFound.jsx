import img from '../../assets/404.svg'
import './notFound.css'
// Components
import Header from '../../components/Header/Header.jsx'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className='not-found'>
        <h1>Ups!! Recurso no encontrado</h1>
        <img src={img} alt='Logo de error 404, recurso no encontrado' />
      </main>
    </>
  )
}
