import styles from "../../../styles/Register.module.css";
import PreferredNameInput from "../../inputs/pacient/PreferredNameInput";

function PreferredNameField(){
    return(
      <div>
        <label className={styles.Lnomesocial}>Nome Social</label>
        <PreferredNameInput/>
      </div>
    );
}

export default PreferredNameField;