import styles from "../../styles/Equipment.module.css";

function NumeroSerieInput({ name, value, onChange }){ 
    return(
        <input 
            className={styles.Numeroserieinput}
            type="text"
            placeholder="Digite o número de série do glicosímetro"
            name={name}
            value={value}
            onChange={onChange}
        />
    );
}
export default NumeroSerieInput;