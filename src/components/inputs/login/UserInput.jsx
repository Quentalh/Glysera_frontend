import styles from "../../../styles/Login.module.css";

function UserInput(){
    return(
      <input 
      className={styles.Carduser}
      type="text"
      placeholder="Digite seu CPF"
      />
    );
}

export default UserInput;