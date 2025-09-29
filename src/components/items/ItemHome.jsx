import styles from "../../styles/Menu.module.css";
import { FaHome } from "react-icons/fa";


function ItemHome(){
    return(
      <div className={styles.home}>
        <FaHome className={styles.icon}/>
        <span className={styles.text}>Início</span>
      </div>
    );
}

export default ItemHome;