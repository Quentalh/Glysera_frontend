import styles from "../../styles/Register.module.css";
import PasswordInput from "../inputs/PasswordInput.js";

function PasswordField(){

    return (
        <div className={styles.textSenha}>
            <label>SENHA &nbsp;</label>
            <PasswordInput />
        </div>
    );
}
export default PasswordField;