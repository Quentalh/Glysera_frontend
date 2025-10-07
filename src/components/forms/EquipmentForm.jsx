import NumeroSerieField from "../fields/NumeroSerieField";
import ModeloField from "../fields/ModeloField";
import MarcaField from "../fields/MarcaField";
import StatusField from "../fields/StatusField";
import styles from "../../styles/Equipment.module.css"

function EquipmentForm(){
    return(
    <div  className={styles.containercadastro}>
        <div className={styles.containerNumeroserie}>
            <NumeroSerieField/>
        </div>
        <div className={styles.containerMarca}>
            <MarcaField/>
        </div>
        <div className={styles.containerModel}>
            <ModeloField/>
        </div>
        <div className={styles.containerStatus}>
            <StatusField/>
        </div>
    </div>

    );
}
export default EquipmentForm