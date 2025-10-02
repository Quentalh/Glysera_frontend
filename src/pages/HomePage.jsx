import Menu from "../components/items/Menu";
import styles from "../styles/Home.module.css"

function HomePage(){

  return(
   
      <div className={styles.container}>
        <header></header>
        <Menu/>
        <main>
          <h1 className={styles.title} >Conteúdo da Página</h1>
          <p className={styles.pragraph}>Este é o conteúdo principal do sistema.</p>
        </main>
        <footer>
          <p className={styles.pragraph}>Todos os direitos reservados.</p>
        </footer>
      </div>
  );
}

export default HomePage;