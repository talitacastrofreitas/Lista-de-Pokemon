import styles from './styles.module.css'

function Pokemon ({name}){
    return (
        <h2 className={styles.name}>{name || 'Pikachu'} </h2>
    )
}

export default Pokemon