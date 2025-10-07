import styles from "../../../styles/Register.module.css";

function FullNameInput(){
  return(
      <input 
      className={styles.Cardnome} 
      type="text" 
      placeholder="Nome do Paciente"
      />
  );

}

export default FullNameInput;