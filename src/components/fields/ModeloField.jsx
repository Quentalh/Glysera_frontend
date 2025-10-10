import styles from "../../styles/Equipment.module.css";
import ModeloInput from "../inputs/ModeloInput";

function ModeloField({ name, value, onChange }){
    return(
      <div>
        <label className={styles.textModelo}>Modelo</label>
        <ModeloInput name={name} value={value} onChange={onChange} />
      </div>
    );
}

export default ModeloField;