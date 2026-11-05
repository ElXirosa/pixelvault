import styles from './Checkout.module.css'
import Header from '../../components/Header/Header'
import PaidForm from '../../components/PaidForm/PaidForm'
import Footer from '../../components/Footer/Footer'
import OrderSummary from '../../components/OrderSummary/OrderSummary'

const Checkout = ({cart}) => {
    return (
        <div className={styles.wrapper}>
            <Header cart={cart}/>
            <div className={styles.mainWrapper}>
                <PaidForm />
                <OrderSummary cart={cart}/>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout