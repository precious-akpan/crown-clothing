import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import LoginForm from "../../components/login/login.component";
import "./auth.style.scss";

const Authentication = () => {
  return (
    <>
      <div className={"auth-forms"}>
        <LoginForm />
        <SignUpForm />
      </div>
    </>
  );
};
export default Authentication;
