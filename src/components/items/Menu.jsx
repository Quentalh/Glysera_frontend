import styles from "../../styles/Menu.module.css";
import ItemRegister from "./ItemRegister";
import ItemManage from "./ItemManage";
import ItemQuery from "./ItemQuery";
import ItemHome from "./ItemHome";
import ItemLogout from "./ItemLogout";
import ToggleBtn from "./ToggleBtn";
import { Link } from "react-router-dom";
import ItemEquipment from "./ItemEquipment";


function Menu(){
    return(
      <div id = "container">
        <ToggleBtn/>
      <nav className={styles.sidebar}>
        <ul className={styles.menu}>
           <li>
            <Link to="/RegisterPage" className={styles.link}>
              <ItemRegister/>
           </Link>
           </li>
          <li>
            <Link to="/ManagePage" className={styles.link}>
              <ItemManage/>
            </Link>
          </li>
          <li>
            <Link to="/QueryPage" className={styles.link}>
              <ItemQuery/>
            </Link>
          </li>
          <li>
            <Link to="/MainPage" className={styles.link}>
              <ItemHome/>
            </Link>
          </li>
          <li className={styles.equipment}>
            <Link to="/EquipmentPage" className={styles.link}>
              <ItemEquipment/>
            </Link>
          </li>
          <li className={styles.logout}>
           <Link to="/" className={styles.link}>   
            <ItemLogout/>
           </Link>
          </li>
        </ul>
      </nav>
      </div>
    );
}

export default Menu;