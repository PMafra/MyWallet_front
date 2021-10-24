import StyledPageContainer from "../../components/StyledPageContainer";
import { StyledSignPage, StyledLogo, StyledLogSwap } from "../../components/StyledSignPage";
import { StyledForm, StyledInput, StyledButton } from "../../components/StyledForms";
import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
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

    const signUpBody = {
        name,
        email,
        password,
    }

    function signUpRequest(event) {
        event.preventDefault();

        if (password !== passwordConfirmation) {
            setLoading(false);
            return;
        }

        signUp(signUpBody).then((res) => {
            history.push("/");
        }).catch(err => {
            console.log(err.response.data);
            setLoading(false);
        });

        setLoading(false);
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