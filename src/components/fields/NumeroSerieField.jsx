import styles from "../../styles/Equipment.module.css";
import NumeroSerieInput from "../inputs/NumeroSerieInput.jsx";

function NumeroSerieField(){
    return(
      <div>
        <label className={styles.textNumeroSerie}>Número de série</label>
        <NumeroSerieInput/>
      </div>
    );
}

export default NumeroSerieField;