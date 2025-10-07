import styles from "../../../styles/Register.module.css";

function MotherNameInput (){
  return (
    <input  
    className={styles.Cardnomemae} 
    type="text" 
    placeholder="Nome da Mãe do Paciente"/>
  );
}

export default MotherNameInput;