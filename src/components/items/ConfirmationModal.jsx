import styles from '../../styles/ConfirmationModal.module.css';

function ConfirmationModal({ message, onConfirm, onCancel, confirmButtonClass = 'btnConfirm' }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <div className={styles.modalActions}>
          <button onClick={onConfirm} className={`${styles.btn} ${styles[confirmButtonClass]}`}>
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