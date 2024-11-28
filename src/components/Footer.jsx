import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import './Footer.css'
import { CartContext } from '../context/cart'

export function Footer() {
  const { filters } = useContext(FiltersContext)
  const { cart } = useContext(CartContext)
  return (
    <footer className='footer'>
      {/* {JSON.stringify(filters, null, 2)} */}
      {JSON.stringify(cart, null, 2)}
    </footer>
  )
}

