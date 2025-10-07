import styles from "../../../styles/Register.module.css";
import MotherNameInput from "../../inputs/pacient/MotherNameInput"

function MotherNameField(){
    return(
      <div>
        <label className={styles.Lnomemae}>Nome da Mãe</label>
        <MotherNameInput/>
      </div>
    );
}

export default MotherNameField;