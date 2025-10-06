import NumeroSerieField from "../fields/NumeroSerieField";
import ModeloField from "../fields/ModeloField";
import MarcaField from "../fields/MarcaField";
import StatusField from "../fields/StatusField";
import styles from "../../styles/Equipment.module.css"

function EquipmentForm(){
    return(
    <div className={styles.containerform}>
        <div className={styles.containernmrserie}>
            <NumeroSerieField/>
        </div>
        <div className={styles.containermarca}>
            <MarcaField/>
        </div>
        <div className={styles.containermodelo}>
            <ModeloField/>
        </div>
        <div className={styles.containerstatus}>
            <StatusField/>
        </div>
    </div>

    );
}
export default EquipmentForm