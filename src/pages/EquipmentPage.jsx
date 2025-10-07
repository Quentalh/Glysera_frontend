import Menu from "../components/items/Menu";
import styles from "../styles/Equipment.module.css";
import EquipmentForm from "../components/forms/EquipmentForm";
import ObsButton from "../components/buttons/ObsButton"
import RegisterButton from "../components/buttons/RegisterButton";
import Copyright from "../components/items/Footer"
import {Link} from "react-router-dom"

function EquipmentPage(){

    return(
        <div className={styles.container}>
          <header></header>
          <Menu/>
          <main className={styles.containerform}>
            <EquipmentForm/>
            <div className={styles.containerbtn}>
              <RegisterButton/>
            </div>
          </main>
          <div className={styles.containerobs}>
            <Link to="/ObservationPage">
            <ObsButton/>
            </Link>
          </div>
          <footer className={styles.equipmentfooter}>
            <Copyright/>
          </footer>
        </div>
    ); 

}

export default EquipmentPage;