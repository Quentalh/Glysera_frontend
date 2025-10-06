import styles from "../../styles/ObservationPage.module.css";
import AttachmentInput from "../inputs/AttachmentInput";

function AttachmentField() {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>ANEXO:</label>
      <AttachmentInput />
    </div>
  );
}

export default AttachmentField;