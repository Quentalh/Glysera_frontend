import CPFField from "./CPFField";
import Button from "./Button";
import PasswordField from "./PasswordField";
import Logo from "../../assets/Glysera_LOGO.png";
import styles from "./Login.module.css";
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
        <div id="root">
            <div className={styles.Login}>
                <img src={Logo} alt="Logo Glysera" className={styles.logo} />
                <h2 className={styles.titulo}>Painel de Acesso</h2>
                <CPFField />
                <PasswordField />
                {/* Wrap the Button with Link */}
                <Link to="/consulta">
                <Button />
                </Link>
            </div>
        </div>
    );
}

export default LoginForm;