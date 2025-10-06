import NomeField from "../fields/NomeField";
import NomeSocial from "../fields/NomeSocialField";
import NomeMae from "../fields/NomeMaeField";
import CepField from "../fields/CepField";
import RuaField from "../fields/RuaField";
import CidadeField from "../fields/CidadeField";
import EstadoField from "../fields/EstadoField";
import NumeroField from "../fields/NumeroField";
import ComplementoField from "../fields/ComplementoField";
import styles from "../../styles/Register.module.css";


function RegisterForm(){
    return(
      <div>
        <label className={styles.text1}>Dados</label>
        <NomeField/>
        <NomeSocial/>
        <NomeMae/>

        <label className={styles.text2}>Endereço</label>
        <CepField/>
        <RuaField/>
        <CidadeField/>
        <EstadoField/>
        <NumeroField/>
        <ComplementoField/>
      </div>
    );
}

export default RegisterForm;