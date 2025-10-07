import styles from "../../styles/ObservationPage.module.css";

function EquipmentInput() {
  return (
    <select className={styles.inputField}>
      <option value="">Selecione o equipamento</option>
      <option value="glicosimetro-01">Glicosímetro A</option>
      <option value="glicosimetro-02">Glicosímetro B</option>
    </select>
  );
}

export default EquipmentInput;