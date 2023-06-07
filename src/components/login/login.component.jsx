import FormInputComponent from "../form-input/form-input.component";
import { useState } from "react";
import Button from "../button/button.component";
import {
  signInWithEmailAndPasswordAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import './login.style.scss'

const initialFields = {
  signInEmail: "",
  signInPassword: "",
};
const LoginComponent = () => {
  const [loginFields, setLoginFields] = useState(initialFields);
  const { signInEmail, signInPassword } = loginFields;
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setLoginFields({ ...loginFields, [name]: value });
  };
  const resetFormFields = () => {
    setLoginFields(initialFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInWithEmailAndPasswordAuth(signInEmail, signInPassword);
      console.log(response);
      resetFormFields()
    } catch (e) {
      if (e.code === 'auth/wrong-password') {
        alert('Incorrect email or password')
      }
      console.error(e.message);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  return (
    <div className={'log-in-container'}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInputComponent
          label={"Email"}
          type="email"
          required
          name={"signInEmail"}
          onChange={handleChange}
          value={signInEmail}
        />
        <FormInputComponent
          label={"Password"}
          type="password"
          required
          name={"signInPassword"}
          onChange={handleChange}
          value={signInPassword}
        />
        <div className="buttons-container">
          <Button type={"submit"}>Sign In</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType={"google"}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
