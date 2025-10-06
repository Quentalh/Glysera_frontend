import styles from "../../styles/Register.module.css";

function SexoInput(){
  return(
    <select 
    className={styles.cardSexo} 
    type="Sexo">
      <option value="">Selecione seu gênero</option>
      <option value="masculino">Masculino</option>
      <option value="feminino">Feminino</option>
      <option value="outro">Outro</option>
      <option value="prefiro_nao_dizer">Prefiro não dizer</option>
    </select>
  );
}

export default SexoInput;