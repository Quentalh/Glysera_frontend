import React from "react";
import styles from "../../styles/Register.module.css";

function RuaField({ value, onChange }) {
    return (
        <div>
            <label htmlFor="rua" className={styles.textField}>Rua</label>
            <input
                type="text"
                id="rua"
                name="rua"
                value={value}
                onChange={onChange}
                placeholder="Digite a rua"
                required
                className={styles.registerCard}
            />
        </div>
    );
}

export default RuaField;