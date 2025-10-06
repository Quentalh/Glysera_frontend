import styles from "../../styles/ObservationPage.module.css";

function AttachmentInput() {
  return (
    <div className={styles.uploadContainer}>
      <label htmlFor="file-upload" className={styles.uploadLabel}>
        🖼️ Upload
      </label>
      <input id="file-upload" type="file" className={styles.fileInput} />
    </div>
  );
}

export default AttachmentInput;