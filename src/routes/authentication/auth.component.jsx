import SignUpForm from "../../components/sign-up/sign-up-form.component";
import LoginForm from "../../components/login/login.component";
import "./auth.style";
import {AuthForms} from "./auth.style";

const Authentication = () => {
  return (
    <>
      <AuthForms>
        <LoginForm />
        <SignUpForm />
      </AuthForms>
    </>
  );
};
export default Authentication;
