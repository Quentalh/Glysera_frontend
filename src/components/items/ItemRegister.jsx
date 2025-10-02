import styles from "../../styles/Menu.module.css";
import { FaUsers } from "react-icons/fa";


function ItemRegister(){
    return(
      <>
        <FaUsers className={styles.icon}/>
        <span className={styles.text}>Cadastros</span>
      </>
    );
}

export default ItemRegister;