import FormInputComponent from "../form-input/form-input.component";
import {useState} from "react";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {signInWithEmailAndPasswordAuth, signInWithGooglePopup,} from "../../utils/firebase.utils";
import "./login.style";
import {ButtonsContainer, LoginContainer} from "./login.style";

const initialFields = {
    signInEmail: "",
    signInPassword: "",
};
const LoginComponent = () => {
    const [loginFields, setLoginFields] = useState(initialFields);
    const {signInEmail, signInPassword} = loginFields;
    const handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;

        setLoginFields({...loginFields, [name]: value});
    };
    const resetFormFields = () => {
        setLoginFields(initialFields);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInWithEmailAndPasswordAuth(
                signInEmail,
                signInPassword
            );
            console.log(user);

            resetFormFields();
        } catch (e) {
            if (e.code === "auth/wrong-password") {
                alert("Incorrect email or password");
            }
            console.error(e.message);
        }
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };
    return (
        <LoginContainer >
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
                <ButtonsContainer>
                    <Button type={"submit"}>Sign In</Button>
                    <Button
                        type="button"
                        onClick={signInWithGoogle}
                        buttonType={BUTTON_TYPE_CLASSES.google}
                    >
                        Google Sign In
                    </Button>
                </ButtonsContainer>
            </form>
        </LoginContainer>
    );
};

export default LoginComponent;
