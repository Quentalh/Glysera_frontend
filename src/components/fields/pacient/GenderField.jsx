import styles from "../../../styles/Register.module.css";
import GenderInput from "../../inputs/pacient/GenderInput"

function GenderField(){
    return(
        <div className={styles.Campocomseta}>
          <label className={styles.Lsexo}>Sexo</label>
          <GenderInput/>
        </div>
    );
}

export default GenderField;