import styles from "../../../styles/Register.module.css";

function CpfInput(){
    
    return( 
    <input 
    className={styles.Cardcpf} 
    type="text" 
    placeholder="Número do CPF"/>
    )
}
export default CpfInput;