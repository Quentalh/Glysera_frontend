import styles from "../../styles/Register.module.css";

function CNSInput(){
    return(
        <input 
        className={styles.cardCNS} 
        type="text" 
        placeholder="Digite sua Carteira Nacional de saúde"/>
    );
}

export default CNSInput;