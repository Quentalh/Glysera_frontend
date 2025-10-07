import styles from "../../../styles/Register.module.css";
import PostalCodeInput from "../../inputs/address/PostalCodeInput";

function PostalCodeField (){
    return(
        <div>
            <label className={styles.Lcep}>Cep</label>
            <PostalCodeInput/>
        </div>
    );
}

export default PostalCodeField;