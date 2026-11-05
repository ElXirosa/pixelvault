import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './404.module.css'

const PageUnfind = ({cart}) => {
    return (
        <div className={styles.mainWrapper}>
            <Header cart={cart}/>
            <div className={styles.wrapper}>
                <div className={styles.errorContainer}>
                    <h1 className={styles.title}>404</h1>
                    <span className={styles.spUnfindPage}>Page introuvable</span>
                    <p className={styles.pErrorInfo}>La page que tu cherches n'existe pas ou a été déplacée.</p>
                    <Link to='/' className={styles.indexLink}>Retour à l'accueil</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PageUnfind