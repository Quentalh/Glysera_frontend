import styles from "../../styles/Equipment.module.css";
import MarcaInput from "../inputs/MarcaInput"

function MarcaField(){
    return(
      <div>
        <label className={styles.textMarca}>Marca</label>
        <MarcaInput/>
      </div>
    );
}

export default MarcaField;