import styles from "../../../styles/Register.module.css";
import CityInput from "../../inputs/address/CityInput";

function CityField(){
  return(
    <div>
    <label className={styles.Lcidade}>Cidade</label>
    <CityInput/>
    </div>
  );
}

export default CityField;