import { useId, useContext } from 'react'
import { FiltersContext } from '../context/filters'
import './Filters.css'

export function Filters() {
  const { filters, setFilters } = useContext(FiltersContext)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({ ...prevState, minPrice: event.target.value }))
  }

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price from: </label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          name='category'
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value='all'>All</option>
          <option value='Laptops'>Laptops</option>
          <option value='Smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}

