import styles from "../../styles/Equipment.module.css";

function MarcaInput({ name, value, onChange }){
  return(
    <input  
        className={styles.Marcainput} 
        type="text" 
        placeholder="Digite a marca do glicosimetro"
        name={name}
        value={value}
        onChange={onChange}
    />
  );
}

export default MarcaInput;