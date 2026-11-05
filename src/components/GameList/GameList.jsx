import GameCard from '../GameCard/GameCard'
import styles from './GameList.module.css'

const games = [
    { id: 1, name: 'Hollow Knight', price: 15, category: 'Indépendant', cover: '/hollow-knight.jpg', isPromo: false },
    { id: 2, name: 'Celeste', price: 9, category: 'Indépendant', cover: '/celeste.jpg', isPromo: true },
    { id: 3, name: 'Dark Souls', price: 20, category: 'Action', cover: '/dark-souls.jpg', isPromo: false },
    { id: 4, name: 'Stardew Valley', price: 12, category: 'RPG', cover: '/stardew-valley.jpg', isPromo: false },
    { id: 5, name: 'Pac-Man', price: 5, category: 'Rétro', cover: '/pac-man.jpg', isPromo: false },
    { id: 6, name: 'Elden Ring', price: 35, category: 'Action', cover: '/elden-ring.jpg', isPromo: true },
    { id: 7, name: 'Undertale', price: 10, category: 'Indépendant', cover: '/undertale.jpg', isPromo: false },
    { id: 8, name: 'The Witcher 3', price: 25, category: 'RPG', cover: '/witcher-3.jpg', isPromo: true },
    { id: 9, name: 'Space Invaders', price: 4, category: 'Rétro', cover: '/space-invaders.jpg', isPromo: false },
]

const GameList = ({selectedCategory, selectedInput, cart, setCart}) => {
    const filteredGames = games
    .filter((game) => selectedCategory === 'Tous' || game.category === selectedCategory)
    .filter((game) => game.name.includes(selectedInput))
    return (
        <div className={styles.gamesContainer}>
            {filteredGames.map((game) => {
                return <GameCard key={game.id} id={game.id} name={game.name} price={game.price} category={game.category} cover='https://placehold.co/400x300' isPromo={game.isPromo} cart={cart} setCart={setCart}/>
            })}
        </div>
    )
}

export default GameList