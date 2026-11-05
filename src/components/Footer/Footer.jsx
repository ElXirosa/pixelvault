import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.boxFooter}>
                <span className={styles.spCopyright}>© 2026 PixelVault</span>
            </div>
            <div className={styles.boxFooter}>
                <nav>
                    <ul>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>À propos</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer