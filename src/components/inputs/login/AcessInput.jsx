import styles from "../../../styles/Login.module.css"

function AcessInput(){
    return(
       <input 
       className={styles.Cardacess}
       type="password"
       placeholder="Digite sua Senha"
       />
    );
}

export default AcessInput;