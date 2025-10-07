import styles from "../../../styles/Login.module.css";
import UserInput from "../../inputs/login/UserInput";

function UserField(){
    return(
      <div>
        <label className={styles.Tuser}>CPF</label>
        <UserInput/>
      </div>
    );
}

export default UserField;