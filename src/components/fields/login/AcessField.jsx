import styles from "../../../styles/Login.module.css";
import AcessInput from "../../inputs/login/AcessInput"

function AcessField(){
    return(
      <div>
        <label className={styles.Tacess}>SENHA</label>
        <AcessInput/>
      </div>
    );
}

export default AcessField;