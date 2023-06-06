import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import LoginComponent from "../../components/login/login.component";

const SignIn = () => {
  const logInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logInGoogleUser}>Sign In with Google popup</button>
      <LoginComponent />
      <SignUpForm />
    </div>
  );
};
export default SignIn;
