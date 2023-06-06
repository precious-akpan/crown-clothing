import FormInputComponent from "../form-input/form-input.component";
import { useState } from "react";
import ButtonComponent from "../button/button.component";

const initialInput = {
  email: "",
  password: "",
};
const LoginComponent = () => {
  const [loginFields, setLoginFields] = useState(initialInput);
  const { email, password } = loginFields;
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setLoginFields({ ...loginFields, [name]: value });
  };
  return (
    <div>
      <form>
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
          <ButtonComponent>Sign In</ButtonComponent>
      </form>
    </div>
  );
};

export default LoginComponent;
