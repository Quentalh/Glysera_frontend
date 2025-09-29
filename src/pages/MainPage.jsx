
import styles from "../styles/Main.module.css";
import Copyright from "../components/items/Footer";
import { FaUsers, FaSearch, FaFileAlt } from "react-icons/fa";
import Dropdown from "../components/items/Dropdown";
import { Link } from "react-router-dom";

import { naoAtendidasItems, atendidasItems } from "../components/mockdata/mockdata.js";

const natendidafields = [
  { key: "codigo", label: "Código" },
  { key: "data", label: "Data" },
  { key: "situacao", label: "Situação" },
];

function MainPage() {
  return (
    <div className={styles.container}>
      <header></header>
      <div>
        <Dropdown
          label="Requisições não atendidas"
          fields={natendidafields}
          items={naoAtendidasItems}
        />
      </div>
      <div>
        <Dropdown
          label="Requisições atendidas"
          fields={natendidafields}
          items={atendidasItems}
        />
      </div>
      <div className={styles.container_cadastro}>
        <Link to="/RegisterPage" className={styles.link}>
          <button className={styles.cadastro_btn}>
            <FaUsers className={styles.icon} />
            Cadastro
          </button>
        </Link>
      </div>
      <div className={styles.container_consultas}>
        <Link to="/ManagePage" className={styles.link}>
          <button className={styles.consultas_btn}>
            <FaSearch className={styles.icon} />
            Consultas
          </button>
        </Link>
      </div>
      <div className={styles.container_gerenciamento}>
        <Link to="/QueryPage" className={styles.link}>
          <button className={styles.gerenciamento_btn}>
            <FaFileAlt className={styles.icon} />
            Gerenciamento
          </button>
        </Link>
      </div>
      <footer className={styles.mainfooter}>
        <Copyright />
      </footer>
    </div>
  );
}

export default MainPage;