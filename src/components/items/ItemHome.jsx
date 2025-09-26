import styles from "../../styles/Menu.module.css";
import { FaHome } from "react-icons/fa";


function ItemHome(){
    return(
      <>
        <FaHome className={styles.icon}/>
        <span className={styles.text}>Início</span>
      </>
    );
}

export default ItemHome;