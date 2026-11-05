import { useState } from 'react'
import styles from './Home.module.css'
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import GameList from '../../components/GameList/GameList'
import Header from '../../components/Header/Header'

function Home({cart, setCart}) {

  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [selectedInput, setSelectedInput] = useState('')

  return (
    <>
        <Header cart={cart} showSearch={true} selectedInput={selectedInput} setSelectedInput={setSelectedInput}/>
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <GameList selectedCategory={selectedCategory} selectedInput={selectedInput} cart={cart} setCart={setCart}/>
        <Footer />
    </>
  )
}

export default Home
