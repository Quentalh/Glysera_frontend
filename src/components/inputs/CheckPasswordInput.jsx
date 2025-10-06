import styles from "../../styles/Register.module.css";

function CheckPasswordInput(){
    return(
      <input 
      className={styles.cardConfirmPassword} 
      type="text" 
      placeholder="Digite sua senha novamente"/>
    );
}

export default CheckPasswordInput;