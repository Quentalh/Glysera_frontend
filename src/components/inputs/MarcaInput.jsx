import styles from "../../styles/Register.module.css";

function MarcaInput(){
  return(
    <input  
    className={styles.cardMarca} 
    type="text" 
    placeholder="Digite a marca do glicosimetro"/>
  );
}

export default MarcaInput;