import styles from "../../styles/Menu.module.css";
import icon2 from "../../assets/glicosimetro.png";


function ItemEquipment(){
    return(
      <>
        <img src={icon2} alt="Ícone 2" className={styles.icon2}/>
        <span className={styles.text2}>Equipamento</span>
      </>
    );
}

export default ItemEquipment;