import styles from "../../styles/Equipment.module.css";
import MarcaInput from "../inputs/MarcaInput"

function MarcaField({ name, value, onChange }){ // Accept props
    return(
      <div>
        <label className={styles.textMarca}>Marca</label>
        <MarcaInput name={name} value={value} onChange={onChange} />
      </div>
    );
}

export default MarcaField;