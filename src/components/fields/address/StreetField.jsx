import styles from "../../../styles/Register.module.css";
import StreetInput from "../../inputs/address/StreetInput"

function StreetField(){
    return(
      <div>
        <label className={styles.Lrua}>Rua</label>
        <StreetInput/>
      </div>
    );
}

export default StreetField;