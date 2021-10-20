import StyledPageContainer from "../../components/StyledPageContainer";
import { StyledSignPage, StyledLogo, StyledLogSwap } from "../../components/StyledSignPage";
import { StyledForm, StyledInput, StyledButton } from "../../components/StyledForms";
import { Link } from "react-router-dom";
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
                    <Link to="/" className="swapLink">
                        Já tem uma conta? Entre agora!
                    </Link>
                </StyledLogSwap>
            </StyledSignPage>
        </StyledPageContainer>
    )
}