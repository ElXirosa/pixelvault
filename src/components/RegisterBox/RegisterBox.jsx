import { Link } from 'react-router-dom'
import styles from './RegisterBox.module.css'
import { useState } from 'react'

const regexList = {
            regexMail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            regexSurname: /^[a-zA-ZÀ-ÿ\s-]{2,}$/,
            regexName: /^[a-zA-ZÀ-ÿ\s-]{2,}$/,
            regexPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/
        }

const RegisterBox = () => {
        const [formData, setFormData] = useState({
            surname: '',
            name: '',
            email: '',
            password: '',
            passwordConfirmed: '',
            checkbox: false
    })

    const [errorFields, setErrorField] = useState({})

    const HandleSubmit = (e) => {
        e.preventDefault()
        Validate()
        console.log(errorFields)
    }

    const HandleChange = (e) => {
        const targetType = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setFormData({...formData, [e.target.name]: targetType})
    }

    const Validate = () => {
        const VALIDATESTATEMENT = {}
        Object.entries(formData).forEach(([key, value]) => {
            if (value === '') {
                VALIDATESTATEMENT[key] = 'Le champs est vide'
            }else{
                switch(key) {
                    case 'surname':
                        !regexList.regexSurname.test(value) ? VALIDATESTATEMENT[key] = 'Le prénom n\'est pas correct' : ''
                        break;
                    case 'name':
                        !regexList.regexName.test(value) ? VALIDATESTATEMENT[key] = 'Le nom n\'est pas correct' : ''
                        break;
                    case 'email':
                        !regexList.regexMail.test(value) ? VALIDATESTATEMENT[key] = 'Le mail n\'est pas correct' : ''
                        break;
                    case 'password':
                        !regexList.regexPassword.test(value) ? VALIDATESTATEMENT[key] = 'Le mot de passe ne respect aucuns critères' : ''
                        break;
                    case 'passwordConfirmed':
                        value != formData.password ? VALIDATESTATEMENT[key] = 'Le mot de passe n\'est pas le même' : ''
                        break;
                    case 'checkbox':
                        !value ? VALIDATESTATEMENT[key] = 'Les conditions ne sont pas cochées' : ''
                        break;
                        default:
                            ''
                }
            }
        })
        setErrorField(VALIDATESTATEMENT)
    }

    return (
            <div className={styles.mainContainer}>
                <div className={styles.titleBox}>
                    <h3>Créer un compte</h3>
                    <p>Rejoignez PixelVault</p>
                </div>
                <form onSubmit={HandleSubmit}>
                    <div className={styles.boxTwoInput}>
                        <div className={styles.boxInput}>
                            <label htmlFor='surname'>Prénom</label>
                            <input type='text' maxLength='20' name='surname' id='surname' value={formData.surname} onChange={HandleChange}></input>
                            {errorFields.surname && <span className={styles.spError}>{errorFields.surname}</span>}
                        </div>
                        <div className={styles.boxInput}>
                            <label htmlFor='name'>Nom</label>
                            <input type='text' maxLength='20' name='name' id='name' value={formData.name} onChange={HandleChange}></input>
                            {errorFields.name && <span className={styles.spError}>{errorFields.name}</span>}
                        </div>
                    </div>
                    <div className={styles.boxInput}>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' id='email' value={formData.email} onChange={HandleChange}></input>
                            {errorFields.email && <span className={styles.spError}>{errorFields.email}</span>}
                    </div>
                    <div className={styles.boxInput}>
                            <label htmlFor='password'>Mot de passe</label>
                            <input type='password' maxLength='20' name='password' id='password' value={formData.password} onChange={HandleChange}></input>
                            {errorFields.password && <span className={styles.spError}>{errorFields.password}</span>}
                    </div>
                    <div className={styles.boxInput}>
                            <label htmlFor='passwordConfirmed'>Confirmez le mot de passe</label>
                            <input type='password' maxLength='20' name='passwordConfirmed' id='passwordConfirmed' value={formData.passwordConfirmed} onChange={HandleChange}></input>
                            {errorFields.passwordConfirmed && <span className={styles.spError}>{errorFields.passwordConfirmed}</span>}
                    </div>
                    <div className={styles.checkboxBox}>
                        <input type='checkbox' id='checkbox' name='checkbox' checked={formData.checkbox} onChange={HandleChange}></input>
                        <label htmlFor='checkbox'>J'accepte les <Link to='/#'>conditions d'utilisation</Link></label>
                        {errorFields.checkbox && <span className={styles.spError}>{errorFields.checkbox}</span>}
                    </div>
                    <button className={styles.connectButton} type='submit'>Créer un compte</button>
                </form>
                <div className={styles.containerFooter}>
                    <p className={styles.pConnectLink}>Déja un compte ?<Link to='/login'>Se connecter</Link></p>
                </div>
            </div>
    )
}

export default RegisterBox