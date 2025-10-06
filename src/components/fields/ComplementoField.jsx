import React from "react";
import styles from "../../styles/Register.module.css";

function ComplementoField({ value, onChange }) {
    return (
        <div>
            <label htmlFor="complemento" className={styles.textField}>Complemento</label>
            <input
                type="text"
                id="complemento"
                name="complemento"
                value={value}
                onChange={onChange}
                placeholder="Digite o complemento"
            />
        </div>
    );
}

export default ComplementoField;