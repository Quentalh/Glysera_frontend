import styles from "../../styles/Login.module.css";
import UserInput from "../inputs/UserInput";

function UserField(){
    return(
      <div>
        <label className={styles.textUser}>CPF</label>
        <UserInput/>
      </div>
    );
}

export default UserField;