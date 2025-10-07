import styles from "../../styles/Equipment.Module.css"

function NumeroSerieInput(){
    return(
        <input className={styles.Numeroserieinput}
        type="text"
        placeholder="Digite o número de série">
        </input>
    );
}
export default NumeroSerieInput;