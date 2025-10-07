import UserField from "../fields/login/UserField";
import AcessField from "../fields/login/AcessField";

function LoginForm() {
    return (
        <div>
            <UserField />
            <AcessField />
        </div>
    );
}

export default LoginForm;