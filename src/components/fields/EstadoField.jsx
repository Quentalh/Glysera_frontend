import styles from "../../styles/Register.module.css";
import EstadoInput from "../inputs/EstadoInput";

function EstadoField(){
    return(
      <div>
        <label className={styles.textEstado}>Estado</label>
        <EstadoInput/>
      </div>
    );
}

export default EstadoField;