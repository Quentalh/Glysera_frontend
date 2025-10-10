import styles from "../../styles/Register.module.css";

function SexoField(){
    return(
        <div>
            <label htmlFor="rua" className={styles.textField}>Sexo</label>
            <input
                type="text"
                id="sexo"
                name="sexo"
                value={value}
                onChange={onChange}
                placeholder="Digite o sexo paciente"
                required
            />
        </div>
    );
}

export default SexoField;