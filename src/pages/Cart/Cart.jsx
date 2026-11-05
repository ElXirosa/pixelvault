import styles from './Cart.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CartItem from '../../components/CartItem/CartItem'
import CartCheckout from '../../components/CartCheckout/CartChekout'

const Cart = ({cart, setCart}) => {
    return (
        <>
            <Header cart={cart}/>
            <div className={styles.topCart}>
                <h1>Mon panier</h1>
                <button 
                className={styles.btnClear}
                onClick={() => setCart([])}>Vider le panier</button>
            </div>
            <div className={styles.ItemsContainer}>
                {cart.map((item) => {
                    return <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} cart={cart} setCart={setCart}/>
                })}
            </div>
            <CartCheckout cart={cart}/>
            <Footer />
        </>
    )
}

export default Cart