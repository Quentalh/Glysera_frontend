import styles from "../../../styles/Register.module.css";

function CityInput(){
  return (
    <input 
    className={styles.Cardcidade} 
    type="text" 
    placeholder="Nome da Cidade"/>
  );
}

export default CityInput;