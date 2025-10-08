import styles from "../../styles/ObservationPage.module.css";

function AttachmentInput({ name, onChange }) {
  return (
    <div className={styles.uploadContainer}>
      <label htmlFor="file-upload" className={styles.uploadLabel}>
        🖼️ Upload
      </label>
      <input 
        id="file-upload" 
        type="file" 
        name={name}
        onChange={onChange}
        className={styles.fileInput} 
      />
    </div>
  );
}

export default AttachmentInput;