import styles from "../../styles/Equipment.Module.css"

function ModuleInput(){
    return(
        <input className={styles.Modelinput}
        type="text"
        placeholder="Digite o modelo do glicosímetro">
        </input>
    );
}
export default ModuleInput;