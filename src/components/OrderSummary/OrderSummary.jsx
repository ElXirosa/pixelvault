import ItemCheckout from '../ItemCheckout/ItemCheckout'
import styles from './OrderSummary.module.css'

const OrderSummary = ({cart}) => {
    const total = cart.reduce((acc, item) => {
        return acc + (item.price * item.amount)
    }, 0)

    return (
        <div className={styles.recapContainer}>
            <h1>Récapitulatif</h1>
            <div className={styles.itemList}>
                {cart.map((item) => {
                    return <ItemCheckout key={item.id} name={item.name} price={item.price} amount={item.amount}/>
                })}
                <div className={styles.totalContainer}>
                <span className={styles.spTotal}>Total</span>
                <span className={styles.spTotalPrice}>{total}€</span>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary