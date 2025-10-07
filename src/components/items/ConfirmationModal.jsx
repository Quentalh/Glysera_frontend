import styles from '../../styles/ConfirmationModal.module.css';

function ConfirmationModal({ message, onConfirm, onCancel }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <div className={styles.modalActions}>
          <button onClick={onConfirm} className={`${styles.btn} ${styles.btnConfirm}`}>
            Confirmar
          </button>
          <button onClick={onCancel} className={`${styles.btn} ${styles.btnCancel}`}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;