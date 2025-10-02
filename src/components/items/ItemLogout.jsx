import styles from "../../styles/Menu.module.css";
import { FaSignOutAlt } from "react-icons/fa";


function ItemLogout(){
    return(
      <>
        <FaSignOutAlt className={styles.icon}/>
        <span className={styles.text}>Sair</span>
      </>
    );
}

export default ItemLogout;