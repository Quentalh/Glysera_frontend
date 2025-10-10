import styles from "../../styles/Equipment.module.css";
import NumeroSerieInput from "../inputs/NumeroSerieInput";

function NumeroSerieField({ name, value, onChange }){
    return(
      <div>
        <label className={styles.textNumeroSerie}>Número de série</label>
        <NumeroSerieInput name={name} value={value} onChange={onChange} /> 
      </div>
    );
}

export default NumeroSerieField;