import styles from "../../styles/Register.module.css";

function MarcaInput({ name, value, onChange }){
  return(
    <input  
        className={styles.cardMarca} 
        type="text" 
        placeholder="Digite a marca do glicosimetro"
        name={name}
        value={value}
        onChange={onChange}
    />
  );
}

export default MarcaInput;