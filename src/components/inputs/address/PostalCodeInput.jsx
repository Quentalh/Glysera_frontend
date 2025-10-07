import styles from "../../../styles/Register.module.css";

function PostalCodeInput (){
    return (
        <input 
        className={styles.Cardcep} 
        type="text" 
        placeholder="Número do Cep"/>
    );
}

export default PostalCodeInput;