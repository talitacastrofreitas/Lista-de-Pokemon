import Pokemon from '../../components/Pokemon'
import PokemonLogo from '../../img/pokemon_logo.png'
import styles from '../Home/styles.module.css'


function Home(){
    return (
      <div className={styles.titulos}>
        <img className={styles.img} src={PokemonLogo} alt="Pokemon Logo"></img>
        <h1>Seja Bem-vindo!</h1>
        <p>Aqui você encontra os mais diversos pokemons. Com nomes, tipos, força e muito mais.<p>Clique sobre o nome do pokemon que você quer conhecer e aproveite!</p></p>
      <div className={styles.container}>
        <Pokemon name="Pikachu" />
        <Pokemon name="Charmander" />
        <Pokemon name="Charizard" />
        <Pokemon name="Squirtle" />
        <Pokemon name="Ditto" />
      </div>
      </div>
    )
}

export default Home