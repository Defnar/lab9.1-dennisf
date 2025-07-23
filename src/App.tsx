import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlertBoxTest from './components/AlertBox/AlertBox.test'
import ProductDisplayTest from './components/ProductDisplay/ProductDisplay.test'
import UserProfileCardTest from './components/UserProfileCard/UserProfileCard.test'

function App() {

  return (
    <div>
      <ProductDisplayTest />
      <AlertBoxTest />
      <UserProfileCardTest />
    </div>
  )
}

export default App
