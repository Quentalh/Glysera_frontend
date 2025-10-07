import styles from "../../../styles/Register.module.css";

function DateOfBirthInput(){
  return(
    <input 
    className={styles.Cardnascimento} 
    type="date" 
    />
  );
}

export default DateOfBirthInput;