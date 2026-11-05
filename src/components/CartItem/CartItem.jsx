import styles from './CartItem.module.css'

const CartItem = ({name, price, amount, cart, setCart}) => {

    const handleAdd = () => {
        setCart(cart.map((item) => {
            return item.name === name
            ? {...item, amount: amount +1}
            : item
        }))
    }

    const handleRemove = () => {
        if(amount === 1){
            setCart(cart.filter((item) => item.name != name))
        }
        else{
            setCart(cart.map((item) => {
                return item.name === name
                ? {...item, amount: amount - 1}
                : item
            }))
        }
    }

    return (
        <div className={styles.item}>
            <div className={styles.leftContainerItem}>
                <img src='https://placehold.co/100x100' alt=''></img>
                <div className={styles.boxItemInfo}>
                    <span className={styles.spItemName}>{name}</span>
                    <span className={styles.spItemPrice}>{price} €</span>
                </div>
            </div>
            <div className={styles.rightContainerItem}>
                <div className={styles.quantityBox}>
                    <span 
                    className={`${styles.spQuantitySymbol} ${styles.clickable}`}
                    onClick={() => handleRemove()}>-</span>
                    <span className={styles.spQuantitySymbol}>{amount}</span>
                    <span
                    className={`${styles.spQuantitySymbol} ${styles.clickable}`}
                    onClick={() => handleAdd()}>+</span>
                </div>
                <span className={styles.spTotalPerItem}>{price * amount} €</span>
            </div>
        </div>
    )
}

export default CartItem