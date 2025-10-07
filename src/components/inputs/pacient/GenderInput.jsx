import styles from "../../../styles/Register.module.css";

function GenderInput(){
  return(
    <select 
    className={styles.Cardsexo} 
    required
    type="Sexo">
      <option value="" disabled>Selecione seu gênero</option>
      <option value="masculino">Masculino</option>
      <option value="feminino">Feminino</option>
    </select>
  );
}

export default GenderInput;