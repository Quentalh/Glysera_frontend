
import styles from "../styles/Main.module.css";
import Copyright from "../components/items/Footer";
import Menu from "../components/items/Menu";
import Dropdown from "../components/items/Dropdown";
import { naoAtendidasItems, atendidasItems } from "../components/mockdata/mockdata.js";
import mascote from "../assets/Mascote.png"

const natendidafields = [
  { key: "codigo", label: "Código" },
  { key: "data", label: "Data" },
  { key: "situacao", label: "Situação" },
];

function MainPage() {
  return (
    <div className={styles.container}>
      <header></header>
      <Menu/>
      <div className={styles.containerred}>
        <Dropdown
          label="Requisições não atendidas"
          fields={natendidafields}
          items={naoAtendidasItems}
          toggleClass="dropdownToggleRed"
        />
      </div>
      <div className={styles.containergreen}>
        <Dropdown
          label="Requisições atendidas"
          fields={natendidafields}
          items={atendidasItems}
          toggleClass="dropdownToggleGreen"
        />
      </div>
      <div className={styles.containermascote}>
        <img src={mascote} alt={"Mascote Glysera"} className={styles.mascote}/>
      </div>
      <footer className={styles.mainfooter}>
        <Copyright />
      </footer>
    </div>
  );
}

export default MainPage;