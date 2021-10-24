import StyledPageContainer from "../../components/StyledPageContainer";
import { StyledSignPage, StyledLogo, StyledLogSwap } from "../../components/StyledSignPage";
import { StyledForm, StyledInput, StyledButton } from "../../components/StyledForms";
import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import ColorModeContext from "../../store/ColorModeContext";
import { signIn } from "../../services/api";
import UserContext from "../../store/UserContext";

export default function SignIn () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { isDarkMode } = useContext(ColorModeContext);
    const { setToken } = useContext(UserContext);

    function signInRequest(event) {
        event.preventDefault();

        const signInBody = {
            email,
            password
        }

        signIn(signInBody).then((res) => {
            setToken(res.data);
            history.push("/home");
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
                    signInRequest(e);
                }}>
                    <StyledInput placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} isDarkMode={isDarkMode} required />
                    <StyledInput placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} isDarkMode={isDarkMode} required />
                    <StyledButton type="submit" loading={loading} disabled={loading}>{loading ? "Loading..." : "Entrar"}</StyledButton>
                </StyledForm>
                <StyledLogSwap>
                    <Link to="/sign-up" className="swapLink">
                        Primeira vez? Cadastre-se!
                    </Link>
                </StyledLogSwap>
            </StyledSignPage>
        </StyledPageContainer>
    )
}