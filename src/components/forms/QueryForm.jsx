import CpfField from "../fields/CpfField";
import PesquisarButton from "../buttons/PesquisarButton";
import NovaConsultaButton from "../buttons/NovaConsultaButton";
import styles from "../../styles/Query.module.css";

function QueryForm() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.searchContainer}>
        <CpfField />
        <PesquisarButton />
      </div>
      <NovaConsultaButton />
    </div>
  );
}

export default QueryForm;