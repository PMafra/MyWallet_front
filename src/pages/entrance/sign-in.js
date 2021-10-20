import StyledPageContainer from "../../components/StyledPageContainer";
import { StyledSignPage, StyledLogo, StyledForm, StyledInput, StyledButton, StyledLogSwap } from "../../components/StyledSignPage";

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
                    Primeira vez? Cadastre-se!
                </StyledLogSwap>
            </StyledSignPage>
        </StyledPageContainer>
    )
}