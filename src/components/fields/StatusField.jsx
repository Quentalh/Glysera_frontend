import styles from "../../styles/Register.module.css";
import StatusInput from "../inputs/StatusInput"

function StatusField(){
    return(
      <div>
        <label className={styles.textStatus}>Status</label>
        <StatusInput/>
      </div>
    );
}

export default StatusField;