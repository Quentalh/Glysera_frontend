import styles from "../../styles/Register.module.css";
import SexoInput from "../inputs/SexoInput"

function SexoField(){
    return(
        <div>
          <label className={styles.textSexo}>Sexo</label>
          <SexoInput/>
        </div>
    );
}

export default SexoField;