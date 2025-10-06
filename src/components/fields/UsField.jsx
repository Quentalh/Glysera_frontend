import styles from "../../styles/Register.module.css";
import UsInput from "../inputs/UsInput"

function UsField(){
    return(
      <div>
        <label className={styles.textUs}>Us</label>
        <UsInput/>
      </div>
    );
}

export default UsField;