import Menu from "../components/items/Menu";
import styles from "../styles/Register.module.css";
import RegisterForm from "../components/forms/RegisterForm";
import RegisterButton from "../components/buttons/RegisterButton";

function RegisterPage(){

    return(
        <div className={styles.container}>
          <header></header>
          <Menu/>
          <main>
            <RegisterForm/>
            <RegisterButton/>
          </main>
          <footer>

          </footer>
        </div>
    ); 

}

export default RegisterPage;