import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span>DevPortfolio</span>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Projetos</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
