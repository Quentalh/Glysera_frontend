import styles from "../../../styles/Register.module.css";
import FullNameInput from "../../inputs/pacient/FullNameInput";

function FullNameField(){
   return(
    <div className={styles.Lnome}>
      <label>Nome &nbsp;</label>
      <FullNameInput/>
    </div>
   );
}

export default FullNameField;