import styles from "./Categories.module.css"

const Categories = ({selectedCategory, setSelectedCategory}) => {
    const allCategories = ['Tous', 'Action', 'RPG', 'Indépendant', 'Rétro']

    return (
        <div className={styles.containerCategories}>
            {allCategories.map((category) => {
                return <button 
                className={`${styles.categoryBtn} ${selectedCategory === category ? styles.activeCategory : ''}`} 
                key={category}
                onClick={() => setSelectedCategory(category)}>{category}</button>
            })}
        </div>
    )
}

export default Categories