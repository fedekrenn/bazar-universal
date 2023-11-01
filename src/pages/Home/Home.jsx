import './home.css'
import Search from '../../components/Search/Search.jsx'
import logo from '../../assets/logo.svg'

export default function Home() {
  return (
    <main className='home'>
      <img src={logo} alt='Logo principal de la página' />
      <h1>Bazar Online</h1>
      <Search />
    </main>
  )
}
