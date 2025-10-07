import styles from "../../../styles/Register.module.css";
import HouseNumberInput from "../../inputs/address/HouseNumberInput";

function HouseNumberField(){
    return(
      <div>
        <label className={styles.Lnumero}>Numero</label>
        <HouseNumberInput/>
      </div>
    );
}

export default HouseNumberField;