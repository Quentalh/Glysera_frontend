import styles from "../../styles/Menu.module.css";
import { FaFileAlt } from "react-icons/fa";


function ItemManage(){
    return(
      <>
        <FaFileAlt className={styles.icon}/>
        <span className={styles.text}>Gerenciamentos</span>
      </>
    );
}

export default ItemManage;