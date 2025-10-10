import React from "react";
import styles from "../../styles/Register.module.css";

function CepField({ value, onChange }) {
    return (
        <div>
            <label htmlFor="cep" className={styles.textField}>CEP</label>
            <input
                type="text"
                id="cep"
                name="cep"
                value={value}
                onChange={onChange}
                placeholder="Digite o CEP"
                required
                className={styles.registerCard}
            />
        </div>
    );
}

export default CepField;