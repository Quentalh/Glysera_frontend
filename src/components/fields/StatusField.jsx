import styles from "../../styles/Register.module.css";
import StatusInput from "../inputs/StatusInput"

function StatusField({ name, value, onChange }){ // Accept props
    return(
      <div>
        <label className={styles.textStatus}>Status</label>
        <StatusInput name={name} value={value} onChange={onChange}/>
      </div>
    );
}

export default StatusField;