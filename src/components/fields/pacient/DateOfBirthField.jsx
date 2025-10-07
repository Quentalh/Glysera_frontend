import styles from "../../../styles/Register.module.css";
import DateOfBirthInput from "../../inputs/pacient/DateOfBirthInput";

function DateOfBirthField(){
    return(
      <div>
        <label className={styles.Lnascimento}>Data de Nascimento</label>
        <DateOfBirthInput/>
      </div>
    );
}

export default DateOfBirthField;