import styles from "./Hero.module.css"

function Hero(){
    return(
        <section className={styles.hero}> 
            <h1>Olá, sou Wilson Leal </h1>
            <p>Desenvolvedor Front-end em formação.</p>
            <button className={styles.button}>Começar</button>

        </section>
    )
}
export default Hero;