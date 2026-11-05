import { Link } from 'react-router-dom'
import styles from './CartCheckout.module.css'

const CartCheckout = ({cart}) => {
    const total = cart.reduce((acc, item) => {
        return acc + (item.price * item.amount)
    }, 0)
    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.ssTotalContainer}>
                <span className={styles.spSsTotal}>Sous-Total</span>
                <span className={styles.spSsTotalValue}>{total}€</span>
            </div>
            <div className={styles.totalContainer}>
                <span className={styles.spTotal}>Total</span>
                <span className={styles.spTotalValue}>{total}€</span>
            </div>
            <Link to='/checkout' className={styles.btnBuy}>Commander</Link>
        </div>
    )
}

export default CartCheckout