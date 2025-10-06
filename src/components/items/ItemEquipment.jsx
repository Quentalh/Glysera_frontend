import styles from "../../styles/Menu.module.css";
import icon2 from "../../assets/glicosimetro.png";


function ItemEquipment(){
    return(
      <div className={styles.equipment}>
        <img src={icon2} alt="Ícone 2" className={styles.icon2}/>
        <span className={styles.text}>Equipamento</span>
      </div>
    );
}

export default ItemEquipment;