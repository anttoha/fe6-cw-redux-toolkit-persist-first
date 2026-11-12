import React from 'react'
import Header from './components/Header'
import OrderSuccess from './components/OrderSuccess'
import MenuList from './components/MenuList'

const App = () => {
  return (
    <div className='min-h-screen bg-stone-50 text-stone-900 antialiased'>
      <div className="mx-auto max-w-4xl shadow-sm sm:border-x sm:border-stone-200">
        <Header />
        <main>
          <OrderSuccess />
          <MenuList />
        </main>
      </div>
    </div>
  )
}

export default App