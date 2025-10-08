import styles from "../../styles/ObservationPage.module.css";
import AttachmentInput from "../inputs/AttachmentInput";

function AttachmentField({ name, onChange }) { // Accept props
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>ANEXO:</label>
      <AttachmentInput name={name} onChange={onChange} />
    </div>
  );
}

export default AttachmentField;