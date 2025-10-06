import React from "react";
import styles from "../../styles/Register.module.css";

function DataField({ value, onChange }) {
    return (
        <div>
            <label htmlFor="nascimento_date" className={styles.textField}>Data de Nascimento</label>
            <input
                type="date"
                id="nascimento_date"
                name="nascimento_date"
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
}

export default DataField;