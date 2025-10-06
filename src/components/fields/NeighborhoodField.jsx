import React from "react";
import styles from "../../styles/Register.module.css";

function NeighborhoodField({ value, onChange }) {
    return (
        <div>
            <label htmlFor="bairro" className={styles.textNeighborhood}>Bairro</label>
            <input
                type="text"
                id="bairro"
                name="bairro"
                value={value}
                onChange={onChange}
                placeholder="Digite o bairro"
                required
            />
        </div>
    );
}

export default NeighborhoodField;