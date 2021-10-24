import StyledPageContainer from "../../components/StyledPageContainer";
import { StyledSignPage, StyledLogo, StyledLogSwap } from "../../components/StyledSignPage";
import { StyledForm, StyledInput, StyledButton } from "../../components/StyledForms";
import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import Joi from "joi";
import ColorModeContext from "../../store/ColorModeContext";
import { signUp } from "../../services/api";

export default function SignUp () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { isDarkMode } = useContext(ColorModeContext);

    const passwordRules = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const userInfoSchema = Joi.object().length(4).keys({
        name: Joi.string().min(1).max(30).required(),
        email: Joi.string().required(),
        password: Joi.string().pattern(passwordRules).required(),
        passwordConfirmation: Joi.ref('password'),
    });
    const signUpBody = {
        name,
        email,
        password,
    }

    function signUpRequest(event) {
        event.preventDefault();

        const isAllCorrect = validateUserInputs();
        if (!isAllCorrect) return;

        signUp(signUpBody).then((res) => {
            history.push("/");
        }).catch(err => {
            console.log(err.response.data);
            setLoading(false);
        });

        setLoading(false);
    }

    const validateUserInputs = () => {
        const isCorrectInfo = userInfoSchema.validate({
            ...signUpBody,
            passwordConfirmation
        });
        if (isCorrectInfo.error) {
            setLoading(false);
            console.log(`Bad Request: ${isCorrectInfo.error.details[0].message}`);
            return false;
        }
        return true;
    }

    return (
        <StyledPageContainer isDarkMode={isDarkMode}>
            <StyledSignPage>
                <StyledLogo>
                    MyWallet
                </StyledLogo>
                <StyledForm onSubmit={e => {
                    setLoading(true);
                    signUpRequest(e);
                }}>
                    <StyledInput placeholder="Nome" type="text" value={name} onChange={e => setName(e.target.value)} isDarkMode={isDarkMode} required/>
                    <StyledInput placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} isDarkMode={isDarkMode} required/>
                    <StyledInput placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} isDarkMode={isDarkMode} required/>
                    <StyledInput placeholder="Confirme a senha" type="password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} isDarkMode={isDarkMode} required/>
                    <StyledButton type="submit" loading={loading} disabled={loading}>{loading ? "Loading..." : "Cadastrar"}</StyledButton>
                </StyledForm>
                <StyledLogSwap>
                    <Link to="/" className="swapLink">
                        Já tem uma conta? Entre agora!
                    </Link>
                </StyledLogSwap>
            </StyledSignPage>
        </StyledPageContainer>
    )
}