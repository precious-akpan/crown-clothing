import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase.utils";

const SignIn = () => {
  const logInGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
    // console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>

      <button onClick={logInGoogleUser}>Sign In with Google popup</button>
    </div>
  );
};
export default SignIn;
