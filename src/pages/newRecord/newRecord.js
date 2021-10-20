import styled from "styled-components";
import { StyledHeader } from "../../components/StyledHeader";
import StyledPageContainer from "../../components/StyledPageContainer";
import { StyledForm, StyledInput, StyledButton } from "../../components/StyledForms";
import NewRecordContext from "../../store/NewRecordContext";
import { useContext } from "react";

export default function NewRecord () {

    const { newRecord } = useContext(NewRecordContext);

    return (
        <StyledPageContainer>
            <StyledHeaderBox>
                <StyledHeader>
                    {newRecord ? (
                        "Nova entrada"
                    ) : (
                        "Nova saída"
                    )}
                </StyledHeader>
            </StyledHeaderBox>
            <StyledForm>
                <StyledInput placeholder="Valor"></StyledInput>
                <StyledInput placeholder="Descrição"></StyledInput>
                <StyledButton>
                    {newRecord ? (
                        "Salvar entrada"
                    ) : (
                        "Salvar saída"
                    )}
                </StyledButton>
            </StyledForm>
        </StyledPageContainer>
    )
}

const StyledHeaderBox = styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
    max-width: 326px;
    margin-bottom: 40px;
`