import React, { useState } from "react";
import styles from "../../styles/Main.module.css";
import { FaBell } from "react-icons/fa";

function Dropdown({ label = "Menu", items = [], fields = [], toggleClass }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        className={`${styles.dropdownToggle} ${toggleClass ? styles[toggleClass] : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {label}
        <div className={styles.dropdownCount}>
            {items.length}<FaBell />
        </div>
      </button>
      {open && (
        <>
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
        </>
      )}
    </div>
  );
}

export default Dropdown;