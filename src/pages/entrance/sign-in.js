import StyledPageContainer from "../../components/StyledPageContainer";
import { StyledSignPage, StyledLogo, StyledLogSwap } from "../../components/StyledSignPage";
import { StyledForm, StyledInput, StyledButton } from "../../components/StyledForms";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

export default function SignIn () {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function signInRequest(event) {
        event.preventDefault();

        const signInBody = {
            email,
            password
        }

        // signIn(signInBody).then((res) => {

        //     history.push("/home");
        // }).catch(err => {
        //     setLoading(false);
        // });
        setTimeout(() => setLoading(false), 2000);
    }

    console.log(userName,email,password)


    return (
        <StyledPageContainer>
            <StyledSignPage>
                <StyledLogo>
                    MyWallet
                </StyledLogo>
                <StyledForm onSubmit={e => {
                    setLoading(true);
                    signInRequest(e);
                }}>
                    <StyledInput placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required></StyledInput>
                    <StyledInput placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required></StyledInput>
                    <StyledButton type="submit" loading={loading} disabled={loading}>{loading ? "Loading..." : "Cadastrar"}</StyledButton>
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