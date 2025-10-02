import styles from "../../styles/Menu.module.css";
import { FaSearch } from "react-icons/fa";


function ItemQuery(){
  return(
    <>
      <FaSearch className={styles.icon}/>
      <span className={styles.text}>Consultas</span>
    </>
  );
}

export default ItemQuery;