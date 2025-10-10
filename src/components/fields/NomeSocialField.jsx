import React from "react";
import styles from "../../styles/Register.module.css";

function NomeSocialField({ value, onChange }) {
    return (
        <div>
            <label htmlFor="nome_social" className={styles.textField}>Nome Social</label>
            <input
                type="text"
                id="nome_social"
                name="nome_social"
                value={value}
                onChange={onChange}
                placeholder="Digite seu nome social"
                className={styles.registerCard}
            />
        </div>
    );
}

export default NomeSocialField;