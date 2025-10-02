import styles from "../../styles/Login.module.css";
import AcessInput from "../inputs/AcessInput"

function AcessField(){
    return(
      <div>
        <label className={styles.textAcess}>SENHA</label>
        <AcessInput/>
      </div>
    );
}

export default AcessField;