import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openCart } from '../redux/slices/uiSlice';

const Header = () => {
    const dispatch = useDispatch();
    const totalCount = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));

  return (
    <header className='sticky top-0 z-10 flex items-center justify-between border-b border-orange-200 bg-orange-50/90 px-6 py-4 backdrop-blur-md'>
        <div className="flex items-center gap-2">
            <span className="text-2xl">🍕</span>
            <h1>Pizza <span className='text-orange-600'>Mozzarella</span></h1>
        </div>

        <button onClick={() => dispatch(openCart())} className="group relative flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:scale-95">
        <span>Кошик</span>
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1.5 text-xs font-bold text-orange-600">
  {totalCount}
</span>
        </button>
    </header>
  )
}

export default Header