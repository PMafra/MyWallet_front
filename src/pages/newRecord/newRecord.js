import styled from "styled-components";
import { StyledHeader } from "../../components/StyledHeader";
import StyledPageContainer from "../../components/StyledPageContainer";
import { StyledForm, StyledInput, StyledButton } from "../../components/StyledForms";
import RecordsContext from "../../store/RecordsContext";
import { useContext, useState } from "react";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";
import ColorModeContext from "../../store/ColorModeContext";
import UserContext from "../../store/UserContext";
import { sendNewRecord } from "../../services/api";

export default function NewRecord () {

    const { isAddRecord } = useContext(RecordsContext);
    const { isDarkMode } = useContext(ColorModeContext);
    const { token } = useContext(UserContext);
    const history = useHistory();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const addNewRecord = (event) => {
        event.preventDefault();

        const newRecordBody = {
            date: dayjs().format("DD/MM"),
            description,
            value: Number(value),
            isAddRecord
        }

        sendNewRecord(token, newRecordBody).then(res => {
            console.log(res.data);
            setValue("");
            setDescription("");
        }).catch(err => {
            console.log(err.response.data);
        })
    }

    return (
        <StyledPageContainer isDarkMode={isDarkMode}>
            <StyledHeaderBox>
                <StyledHeader>
                    {isAddRecord ? (
                        "Nova entrada"
                    ) : (
                        "Nova saída"
                    )}
                </StyledHeader>
            </StyledHeaderBox>
            <StyledForm onSubmit={e => addNewRecord(e)}>
                <StyledInput placeholder="Valor" type="number" step="any" value={value} onChange={e => setValue(e.target.value)} isDarkMode={isDarkMode} required></StyledInput>
                <StyledInput placeholder="Descrição" type="text" value={description} onChange={e => setDescription(e.target.value)} isDarkMode={isDarkMode} required></StyledInput>
                <StyledButton type="submit">
                    {isAddRecord ? (
                        "Salvar entrada"
                    ) : (
                        "Salvar saída"
                    )}
                </StyledButton>
            </StyledForm>
            <StyledButton onClick={() => history.push("/home")}>
                Cancelar
            </StyledButton>
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