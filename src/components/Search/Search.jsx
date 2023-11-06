import { useNavigate } from 'react-router-dom'

export default function Search() {
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const category = e.currentTarget.searchCategory.value
    navigate(`/items?search=${category}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <input type='text' name='searchCategory' placeholder='laptops, smartphones, ...' />
      <button>Buscar</button>
    </form>
  )
}
