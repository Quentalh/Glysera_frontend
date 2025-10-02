import React from "react";
import styles from "../../styles/Register.module.css";

function NomeMaeField({ value, onChange }) {
    return (
        <div>
            <label htmlFor="nome_mae" className={styles.textField}>Nome da Mãe</label>
            <input
                type="text"
                id="nome_mae"
                name="nome_mae"
                value={value}
                onChange={onChange}
                placeholder="Digite o nome da mãe"
                required
            />
        </div>
    );
}

export default NomeMaeField;