import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInputComponent from "../form-input/form-input.component";
import './sign-up-form.style.scss'
import ButtonComponent from "../button/button.component";

const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(response.user, { displayName });
      setFormFields(initialFormFields);
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Email already exist. Cannot create user");
      } else console.error("user creation unsuccessful", e.message);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className={'sign-up-form-container'}>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password!</span>
      <form onSubmit={handleSubmit}>
        <FormInputComponent
          label={"Full Name"}
          type="text"
          required
          name={"displayName"}
          onChange={handleChange}
          value={displayName}
        />

        <FormInputComponent
          label={"Email"}
          type="email"
          required
          name={"email"}
          onChange={handleChange}
          value={email}
        />

        <FormInputComponent
          label={"Password"}
          type="password"
          required
          name={"password"}
          onChange={handleChange}
          value={password}
        />

        <FormInputComponent
          label={"Confirm password"}
          type="password"
          required
          name={"confirmPassword"}
          onChange={handleChange}
          value={confirmPassword}
        />

        <ButtonComponent type={"submit"}>Sign Up</ButtonComponent>
      </form>
    </div>
  );
};
export default SignUpForm;
