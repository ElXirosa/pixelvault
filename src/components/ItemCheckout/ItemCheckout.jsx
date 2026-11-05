import styles from './ItemCheckout.module.css'

const ItemCheckout = ({name, price, amount}) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.boxLeft}>
                <img src="https://placehold.co/50x50" alt={name} />
                <div className={styles.itemInfo}>
                    <span className={styles.spName}>{name}</span>
                    <span className={styles.spAmount}>x{amount}</span>
                </div>
            </div>
            <div>
                <span className={styles.spPrice}>{price}€</span>
            </div>
        </div>
    )
}

export default ItemCheckout