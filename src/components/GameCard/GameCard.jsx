import styles from "./GameCard.module.css"

const GameCard = ({id, name, price, category, cover, isPromo, cart, setCart}) => {
    const addToCart = () => {
        const existingGame = cart.find((item) => item.name === name)

        if (existingGame){
            setCart(cart.map((item) => {
                return item.name === name
                ? {...item, amount: item.amount +1}
                : item
            }))
        }else{
            setCart([...cart, {id, name, price, amount : 1}])
        }
    }
    console.log(cart)
    return(
        <div className={styles.containerCard}>
            <img className={styles.coverCard} src={cover} alt={name}></img>
            {isPromo && <span className={styles.spCoverTag}>Promo</span>}
            <div className={styles.cardFooter}>
                <div className={styles.boxCardInfo}>
                    <span className={styles.spGameName}>{name}</span>
                    <span className={styles.spGamePrice}>{price}€</span>
                </div>
                <div className={styles.boxCardInfo}>
                    <span className={styles.spGameCategory}>{category}</span>
                    <button 
                    className={styles.btnGameAdd}
                    onClick={() => addToCart()}>+ Ajouter</button>
                </div>
            </div>
        </div>
    )
}

export default GameCard