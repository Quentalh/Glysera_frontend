import { useLocation, Link } from "react-router-dom";
import styles from "../styles/ObservationPage.module.css";
import Menu from "../components/items/Menu";
import ObservationForm from "../components/forms/ObservationForm";
import Copyright from "../components/items/Footer";

function ObsPage() {
    const location = useLocation();
    const equipmentId = location.state?.equipmentId;

    return (
        <div className={styles.container}>
            <header></header>
            <Menu />
            <main className={styles.obsform}>
                {equipmentId ? (
                    <ObservationForm equipmentId={equipmentId} />
                ) : (
                    <div>
                        <h2>Erro: Nenhum equipamento selecionado.</h2>
                        <p>Por favor, <Link to="/EquipmentPage">cadastre um equipamento</Link> primeiro.</p>
                    </div>
                )}
            </main>
            <footer className={styles.containerfooter}>
                <Copyright />
            </footer>
        </div>
    );
};

export default ObsPage;