import styles from "../../../styles/Register.module.css";

function StateInput(){
    return(
      <input 
      className={styles.Cardestado} 
      type="text" 
      placeholder="Nome do Estado"/>
    );
}

export default StateInput;