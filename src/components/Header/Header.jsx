import styles from "./Header.module.css"
import { Link } from "react-router-dom"

const Header = ({cart, showSearch, selectedInput, setSelectedInput}) => {
    const itemsInCart = cart.reduce((acc, item) => {
        return acc + item.amount
    }, 0)
    return (
        <header>
            <div className={styles.pxLogo}>PixelVault</div>
            {showSearch && <input 
            className={styles.pxHeaderInput} 
            type="text" placeholder="Rechercher un jeu..."
            value={selectedInput}
            onChange={(e) => {setSelectedInput(e.target.value)}}></input>}
            <div className={styles.pxHeaderBtn}>
                <Link to="/cart" className={styles.pxCta} href="#">Panier<span className={styles.cartValue}>{itemsInCart}</span></Link>
            </div>
        </header>
    )
}

export default Header