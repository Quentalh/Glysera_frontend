import React from "react";
import styles from "../../styles/Register.module.css";

function CidadeField({ value, onChange }) {
    return (
        <div>
            <label htmlFor="cidade" className={styles.textField}>Cidade</label>
            <input
                type="text"
                id="cidade"
                name="cidade"
                value={value}
                onChange={onChange}
                placeholder="Digite a cidade"
                required
                className={styles.registerCard}
            />
        </div>
    );
}

export default CidadeField;