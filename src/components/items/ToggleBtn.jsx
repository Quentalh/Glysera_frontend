import styles from "../../styles/Menu.module.css";

function ToggleBtn(){
    return(
      <>
        <input id="toggle" type="checkbox" className={styles.toggleInput} hidden/>
        <label htmlFor="toggle" className={styles.toggle_btn}>
          ☰
        </label>
      </>
    );
}

export default ToggleBtn;