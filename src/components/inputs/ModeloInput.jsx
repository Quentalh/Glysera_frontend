import styles from "../../styles/Equipment.module.css";

function ModeloInput({ name, value, onChange }){
    return(
        <input 
            className={styles.ModuleInput}
            type="text"
            placeholder="Digite o modelo do glicosímetro"
            name={name}
            value={value}
            onChange={onChange}
        />
    );
}
export default ModeloInput;