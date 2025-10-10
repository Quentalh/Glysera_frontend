import React from "react";
import styles from "../../styles/Register.module.css";

function NumeroField({ value, onChange }) {
    return (
        <div>
            <label htmlFor="numero" className={styles.textField}>Número</label>
            <input
                type="text"
                id="numero"
                name="numero"
                value={value}
                onChange={onChange}
                placeholder="Digite o número"
                required
                className={styles.registerCard}
            />
        </div>
    );
}

export default NumeroField;