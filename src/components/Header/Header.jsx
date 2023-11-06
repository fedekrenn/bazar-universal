import './header.css'
import img from '../../assets/logo.svg'
// Components
import Search from '../../components/Search/Search.jsx'
export default function Header() {
  return (
    <header>
      <img src={img} alt='Imagen de logo' />
      <Search />
    </header>
  )
}
