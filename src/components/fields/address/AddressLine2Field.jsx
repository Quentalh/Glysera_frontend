import styles from "../../../styles/Register.module.css";
import AddressLine2Input from "../../inputs/address/AddressLine2Input";

function AddressLine2Field (){
    return(
      <div>
        <label className={styles.Lcomplemento}>Complemento</label>
        <AddressLine2Input/>
      </div>
    );
}

export default AddressLine2Field;