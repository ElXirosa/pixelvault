import Header from "../../components/Header/Header"
import styles from './Register.module.css'
import Footer from "../../components/Footer/Footer"
import RegisterBox from "../../components/RegisterBox/RegisterBox"

const Register = ({cart}) => {
    return (
        <div className={styles.mainWrapper}>
            <Header cart={cart}/>
            <div className={styles.wrapper}>
                <RegisterBox />
            </div>
            <Footer />
        </div>
    )
}

export default Register