import StyledPageContainer from "../../components/StyledPageContainer";
import { StyledSignPage, StyledLogo, StyledLogSwap } from "../../components/StyledSignPage";
import { StyledForm, StyledInput, StyledButton } from "../../components/StyledForms";
import { Link } from "react-router-dom";

export default function SignIn () {
    return (
        <StyledPageContainer>
            <StyledSignPage>
                <StyledLogo>
                    MyWallet
                </StyledLogo>
                <StyledForm>
                    <StyledInput placeholder="E-mail"></StyledInput>
                    <StyledInput placeholder="Senha"></StyledInput>
                    <StyledButton>Entrar</StyledButton>
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