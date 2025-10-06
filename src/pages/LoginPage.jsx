import LoginForm from "../components/forms/LoginForm";
import LoginButton from "../components/buttons/LoginButton";
import Logo from "../assets/logoG.png";
import styles from "../styles/Login.module.css";
import { Link } from 'react-router-dom';


function LoginPage(){
  return (
    <div className={styles.container}>
      <img src={Logo} alt="Logo Glysera" className={styles.logo} />
      <h2 className={styles.title}>Painel de Acesso</h2>
    <LoginForm/>
     <Link to="/MainPage">
        <LoginButton/>
    </Link>
    </div>
  );
}

export default LoginPage;