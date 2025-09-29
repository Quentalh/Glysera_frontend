import styles from "../../styles/Equipment.module.css";
import NumeroInput from "../inputs/ModeloInput";

function ModeloField(){
    return(
      <div>
        <label className={styles.textModelo}>Modelo</label>
        <NumeroInput/>
      </div>
    );
}

export default ModeloField;