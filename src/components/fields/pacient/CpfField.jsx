import styles from "../../../styles/Register.module.css";
import CpfInput from "../../inputs/pacient/CpfInput";

function CpfField(){
    
    return (
        <div className={styles.Lcpf}>
            <label>CPF &nbsp;</label>
            <CpfInput/>
        </div>
    );
}
export default CpfField;