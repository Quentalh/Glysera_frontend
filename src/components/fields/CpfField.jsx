import React from "react";
import styles from "../../styles/Register.module.css";

function CpfField({ value, onChange }) {
    return (
        <div>
            <label htmlFor="cpf" className={styles.textField}>CPF</label>
            <input
                type="text"
                id="cpf"
                name="cpf"
                value={value}
                onChange={onChange}
                placeholder="Digite o CPF"
                required
            />
        </div>
    );
}

export default CpfField;