import React from "react";
import styles from "../../styles/Register.module.css";

function EstadoField({ value, onChange }) {
    return (
        <div>
            <label htmlFor="estado" className={styles.textField}>Estado</label>
            <input
                type="text"
                id="estado"
                name="estado"
                value={value}
                onChange={onChange}
                placeholder="Digite o estado"
                required
                className={styles.registerCard}
            />
        </div>
    );
}

export default EstadoField;