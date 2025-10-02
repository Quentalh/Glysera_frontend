import styles from "../../styles/Register.module.css";

function PasswordInput(){
    return (
    <input 
    className={styles.cardSenha} 
    type="Password" 
    placeholder="Digite sua senha"/>
    )

}
export default PasswordInput;