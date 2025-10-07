import styles from "../../../styles/Register.module.css";
import StateInput from "../../inputs/address/StateInput";

function StateField(){
    return(
      <div>
        <label className={styles.Lestado}>Estado</label>
        <StateInput/>
      </div>
    );
}

export default StateField;