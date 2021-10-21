import StyledPageContainer from "../../components/StyledPageContainer";
import { StyledSignPage, StyledLogo, StyledLogSwap } from "../../components/StyledSignPage";
import { StyledForm, StyledInput, StyledButton } from "../../components/StyledForms";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Joi from "joi";

export default function SignUp () {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const passwordRules = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const userInfoSchema = Joi.object().length(4).keys({
        userName: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().required(),
        password: Joi.string().pattern(passwordRules).required(),
        passwordConfirmation: Joi.ref('password'),
    });
    const signUpBody = {
        userName,
        email,
        password,
    }

    function signUpRequest(event) {
        event.preventDefault();

        const isAllCorrect = validateUserInputs();
        if (!isAllCorrect) return;

        // signUp(signUpBody).then((res) => {

        //     history.push("/");
        // }).catch(err => {
        //     setLoading(false);
        // });
        console.log("passou")
        setTimeout(() => setLoading(false), 2000);
    }

    const validateUserInputs = () => {
        const isCorrectInfo = userInfoSchema.validate({
            ...signUpBody,
            passwordConfirmation
        });
        if (isCorrectInfo.error) {
            setLoading(false);
            console.log(`Bad Request: ${isCorrectInfo.error.details[0].message}`);
            console.log("Não passou")
            return false;
        }
        return true;
    }

    return (
        <StyledPageContainer>
            <StyledSignPage>
                <StyledLogo>
                    MyWallet
                </StyledLogo>
                <StyledForm onSubmit={e => {
                    setLoading(true);
                    signUpRequest(e);
                }}>
                    <StyledInput placeholder="Nome" type="text" value={userName} onChange={e => setUserName(e.target.value)} required/>
                    <StyledInput placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    <StyledInput placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    <StyledInput placeholder="Confirme a senha" type="password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} required/>
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