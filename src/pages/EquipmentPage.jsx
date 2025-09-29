import Menu from "../components/items/Menu";
import styles from "../styles/Equipment.module.css";
import EquipmentForm from "../components/forms/EquipmentForm";
import EquipmentButton from "../components/buttons/EquipmentButton";
import Copyright from "../components/items/Footer"

function EquipmentPage(){

    return(
        <div className={styles.container}>
          <header></header>
          <Menu/>
          <main>
            <EquipmentForm/>
            <EquipmentButton/>
          </main>
          <footer className={styles.registerfooter}>
            <Copyright/>
          </footer>
        </div>
    ); 

}

export default EquipmentPage;