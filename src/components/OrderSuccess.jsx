import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOrderPlaced } from '../redux/slices/uiSlice';

const OrderSuccess = () => {
    const dispatch = useDispatch();
    const orderPlaced = useSelector(state => state.ui.orderPlaced);

  return (
    <div className='flex items-center justify-between rounded-xl border border-emerald-200 mt-6 mx-6 bg-emerald-50 px-4 py-3 text-emerald-800'>
        <div className="flex items-center gap-2">
            <span className="text-ls">🍕</span>
            <p className='font-medium text-sm'>Замовлення успішно оформлено?</p>
        </div>
        <button onClick={() => dispatch(setOrderPlaced(false))} className="ml-auto rounded-lg bg-emerald-100 px-2 py-1 text-sm font-medium text-emerald-800 hover:bg-emerald-200">Закрити</button>
    </div>
  )
}

export default OrderSuccess