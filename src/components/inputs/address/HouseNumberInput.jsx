import styles from "../../../styles/Register.module.css";

function HouseNumberInput (){
    return(
      <input 
      className={styles.Cardnumero} 
      type="text" 
      placeholder="Número da Residência"/>
    );
}

export default HouseNumberInput;