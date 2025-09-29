import React, { useState } from "react";
import styles from "../../styles/Main.module.css";

function Dropdown({ label = "Menu", items = [], fields = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownToggle}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {label}
      </button>
      <ul className={`${styles.dropdownMenu} ${open ? styles.open : ""}`}>
        {items.map((item, idx) => (
          <li key={idx} className={styles.dropdownItemRow}>
            {fields.map((field) => (
              <span key={field.key} className={styles.dropdownField}>
                <strong>{field.label}:</strong> {item[field.key]}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;