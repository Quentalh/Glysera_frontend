import styles from "../../styles/ObservationPage.module.css";

function ObservationTextInput() {
  return (
    <textarea className={styles.textAreaField} rows="4"></textarea>
  );
}

export default ObservationTextInput;