import Footer from "./componentes/Footer";
import Header from "./componentes/Header";


function App() {
  return (
    <>
    <Header/>
    <h1>Olá Mundo!</h1>
    <p>Estou aprendendo React JS</p>

    <Footer />
    </>
    //Usar DIV ou <> para encapsular, pois no react nao e aceito ter mais de um item sem pai.
);
}

export default App;
