import styles from "../../styles/Register.module.css";

function UsInput(){
    return(
      <input 
      className={styles.cardUS}
      type="text"
      placeholder="Digite a Unidade de Sáude"
      />
    );
}

export default UsInput;