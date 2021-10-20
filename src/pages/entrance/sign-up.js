import StyledPageContainer from "../../components/StyledPageContainer";
import { StyledSignPage, StyledLogo, StyledForm, StyledInput, StyledButton, StyledLogSwap } from "../../components/StyledSignPage";

export default function SignUp () {
    return (
        <StyledPageContainer>
            <StyledSignPage>
                <StyledLogo>
                    MyWallet
                </StyledLogo>
                <StyledForm>
                    <StyledInput placeholder="Nome"></StyledInput>
                    <StyledInput placeholder="E-mail"></StyledInput>
                    <StyledInput placeholder="Senha"></StyledInput>
                    <StyledInput placeholder="Confirme a senha"></StyledInput>
                    <StyledButton>Cadastrar</StyledButton>
                </StyledForm>
                <StyledLogSwap>
                    Já tem uma conta? Entre agora!
                </StyledLogSwap>
            </StyledSignPage>
        </StyledPageContainer>
    )
}