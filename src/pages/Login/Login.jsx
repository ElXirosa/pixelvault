import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import LoginBox from '../../components/LoginBox/LoginBox'
import styles from './Login.module.css'

const Login = ({cart}) => {
    return (
        <div className={styles.mainWrapper}>
        <Header cart={cart} />
        <div className={styles.wrapper}>
            <LoginBox />
        </div>
        <Footer />
        </div>
    )
}

export default Login