import styles from "../styles/ObservationPage.module.css"
import Menu from "../components/items/Menu";
import ObsForm from "../components/forms/ObservationForm"
import SaveButton from "../components/buttons/SaveButton"

function ObsPage(){
    return(
        <div className={styles.container}>
        <header></header>
        <Menu/>
        <main className={styles.obsform}>
            <ObsForm/>
            <SaveButton/>
        </main>
        </div>
    );
};
export default ObsPage;