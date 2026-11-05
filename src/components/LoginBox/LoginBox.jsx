import { Link } from 'react-router-dom'
import styles from './LoginBox.module.css'

const LoginBox = () => {

    const HandleSubmit = (e) => {
        e.preventDefault()
        const email = e.target['email'].value
        const password = e.target['password'].value

        console.log(`L'email est "${email}" et le mot de passe est "${password}"`)
    }

    return (
        <div className={styles.loginBox}>
            <div className={styles.titleBox}>
                <h3>Connexion</h3>
                <p>Bienvenue sur PixelVault</p>
            </div>
            <form onSubmit={HandleSubmit}>
                <div className={styles.emailInputBox}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' maxLength='20' id='email' name='email' placeholder='jean.kultémor@gmail.com'></input>
                </div>
                <div className={styles.mdpInputBox}>
                    <div className={styles.headerPass}>
                        <label htmlFor='password'>Mot de passe</label>
                        <Link to='/recovery'>Mot de passe oublié ?</Link>
                    </div>
                    <input type='password' maxLength='20' id='password' name='password' placeholder='**********'></input>
                </div>
                <button type='submit'>Se connecter</button>
                <div className={styles.bottomBox}>
                    <p className={styles.pAskCreation}>Pas encore de compte ? <em>Créer un compte</em></p>
                </div>
            </form>
        </div>
    )
}

export default LoginBox