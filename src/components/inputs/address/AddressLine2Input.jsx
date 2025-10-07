import styles from "../../../styles/Register.module.css";

function AddressLine2Input (){
  return(
    <input 
    className={styles.Cardcomplemento} 
    type="text" 
    placeholder="Complemento do Endereço"/>
  );
}

export default AddressLine2Input;