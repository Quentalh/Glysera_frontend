import styles from "../../../styles/Register.module.css";
import NeighborhoodInput from "../../inputs/address/NeighborhoodInput";

function NeighborhoodField(){
  return(
    <div>
      <label className={styles.Lbairro}>Bairro</label>
      <NeighborhoodInput/>
    </div>
  );

}

export default NeighborhoodField;