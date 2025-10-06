import React from "react";
import styles from "../../styles/Register.module.css";

function NomeField({ value, onChange }) {
    return (
        <div>
            <label htmlFor="nome" className={styles.textField}>Nome</label>
            <input
                type="text"
                id="nome"
                name="nome"
                value={value}
                onChange={onChange}
                placeholder="Digite seu nome"
                required
            />
        </div>
    );
}

export default NomeField;