import { useState } from 'react'
import styles from './PaidForm.module.css'

const regexList = {
            regexMail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            regexZip: /^[0-9]{5}$/,
            regexCity: /^[a-zA-ZÀ-ÿ\s-]{2,}$/,
            regexAdresse: /^[a-zA-ZÀ-ÿ0-9\s,.-]{5,}$/,
            regexSurname: /^[a-zA-ZÀ-ÿ\s-]{2,}$/,
            regexName: /^[a-zA-ZÀ-ÿ\s-]{2,}$/,
            regexCard: /^[0-9]{16}$/,
            regexExpiration: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
            regexCvv: /^[0-9]{3}$/ 
        }

const PaidForm = () => {
    const [errorKeys, setErrorKey] = useState({})

    const [formData, setFormData] = useState({
            surname: '',
            name: '',
            email: '',
            adresse: '',
            zipcode: '',
            city: '',
            card: '',
            expiration: '',
            cvv: ''
        })

    const HandleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        Validate()
    }

    const Validate = () => {
        const newErrorKey= {}

        Object.entries(formData).forEach(([key, value]) => {
            if (value === '') newErrorKey[key] = 'Le champs est vide'
            if (key === 'surname' && !regexList.regexSurname.test(value)) newErrorKey[key] = 'Le prénom n\'est pas valide !'
            if (key === 'name' && !regexList.regexName.test(value)) newErrorKey[key] = 'Le nom n\'est pas valide !'
            if (key === 'email' && !regexList.regexMail.test(value)) newErrorKey[key] = 'L\'email est invalide !'
            if (key === 'adresse' && !regexList.regexAdresse.test(value)) newErrorKey[key] = 'L\'adresse n\'est pas valide !'
            if (key === 'zipcode' && !regexList.regexZip.test(value)) newErrorKey[key] = 'Le code postal n\'est pas valide !'
            if (key === 'city' && !regexList.regexCity.test(value)) newErrorKey[key] = 'La ville n\'est pas valide !'
            if (key === 'card' && !regexList.regexCard.test(value.replace(/\s/g, ''))) newErrorKey[key] = 'Le numéro de carte n\'est pas valide !'
            if (key === 'expiration' && !regexList.regexExpiration.test(value)) newErrorKey[key] = 'La date d\'expiration n\'est pas valide !'
            if (key === 'cvv' && !regexList.regexCvv.test(value)) newErrorKey[key] = 'Le CVV n\'est pas valide !'
        })
        setErrorKey(newErrorKey)
    }

    return (
            <form onSubmit={HandleSubmit}>
                <h1>Informations de livraison</h1>
                <div className={styles.deliveryContainer}>
                    <div className={styles.twoTextInputContainer}>
                        <div className={styles.inputBox}>
                            <label htmlFor='surname'>Prénom</label>
                            <input type='text' placeholder='Jean' id='surname' name='surname' value={formData.surname} onChange={HandleChange}></input>
                            {errorKeys.surname && <span className={styles.spError}>{errorKeys.surname}</span>}
                        </div>
                        <div className={styles.inputBox}>   
                            <label htmlFor='name'>Nom</label>
                            <input type='text' placeholder='Dupont' id='name' name='name' value={formData.name} onChange={HandleChange}></input>
                            {errorKeys.name && <span className={styles.spError}>{errorKeys.name}</span>}
                        </div>
                    </div>
                        <div className={styles.inputBox}>   
                            <label htmlFor='email'>Email</label>
                            <input type='text' placeholder='jean.dupont@email.com' id='email' name='email' value={formData.email} onChange={HandleChange}></input>
                            {errorKeys.email && <span className={styles.spError}>{errorKeys.email}</span>}
                        </div>
                        <div className={styles.inputBox}>   
                            <label htmlFor='adresse'>Adresse</label>
                            <input type='text' placeholder='12 rue de la paix' id='adresse' name='adresse' value={formData.adresse} onChange={HandleChange}></input>
                            {errorKeys.adresse && <span className={styles.spError}>{errorKeys.adresse}</span>}
                        </div>
                    <div className={styles.twoTextInputContainer}>
                        <div className={styles.inputBox}>
                            <label htmlFor='zipcode'>Code postal</label>
                            <input type='text' placeholder='75001' id='zipcode' name='zipcode' value={formData.zipcode} onChange={HandleChange}></input>
                            {errorKeys.zipcode && <span className={styles.spError}>{errorKeys.zipcode}</span>}
                        </div>
                        <div className={styles.inputBox}>   
                            <label htmlFor='city'>Ville</label>
                            <input type='text' placeholder='Paris' id='city' name='city' value={formData.city} onChange={HandleChange}></input>
                            {errorKeys.city && <span className={styles.spError}>{errorKeys.city}</span>}
                        </div>
                    </div>
                </div>
                <div className={styles.paymentContainer}>
                    <h1>Paiement</h1>
                    <div className={styles.inputBox}>   
                            <label htmlFor='card'>Numéro de carte</label>
                            <input type='text' placeholder='1234 5678 9101 1213' id='card' name='card' value={formData.card} onChange={HandleChange}></input>
                            {errorKeys.card && <span className={styles.spError}>{errorKeys.card}</span>}
                    </div>
                    <div className={styles.twoTextInputContainer}>
                        <div className={styles.inputBox}>
                            <label htmlFor='expiration'>Date d'expiration</label>
                            <input type='text' placeholder='06/24' id='expiration' name='expiration' value={formData.expiration} onChange={HandleChange}></input>
                            {errorKeys.expiration && <span className={styles.spError}>{errorKeys.expiration}</span>}
                        </div>
                        <div className={styles.inputBox}>   
                            <label htmlFor='cvv'>CVV</label>
                            <input type='text' placeholder='123' id='cvv' name='cvv' value={formData.cvv} onChange={HandleChange}></input>
                            {errorKeys.cvv && <span className={styles.spError}>{errorKeys.cvv}</span>}
                        </div>
                    </div>
                </div>
                <button type='submit' className={styles.btnPayment}>Confirmer la commande</button>
            </form>
    )
}

export default PaidForm