import { useNavigate } from 'react-router-dom'

export default function Search() {
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const category = e.currentTarget.searchCategory.value.trim()

    if (!category) return
    if (category.length < 3) return alert('La búsqueda debe tener al menos 3 caracteres')

    navigate(`/items?search=${category}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <input type='text' name='searchCategory' placeholder='laptops, smartphones, ...' />
      <button type='submit'>Buscar</button>
    </form>
  )
}
