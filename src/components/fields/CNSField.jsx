import styles from "../../styles/Register.module.css";
import CNSInput from "../inputs/CNSInput";

function CNSField(){
  return(
    <div>
      <label className={styles.CNSField}>CNS</label>
      <CNSInput/>
    </div>
  );
}

export default CNSField;