import styled from "styled-components";
import { StyledHeader } from "../../components/StyledHeader";
import StyledPageContainer from "../../components/StyledPageContainer";
import { StyledForm, StyledInput, StyledButton } from "../../components/StyledForms";
import RecordsContext from "../../store/RecordsContext";
import { useContext, useState } from "react";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";

export default function NewRecord () {

    const { isAddRecord, setRecords, records } = useContext(RecordsContext);
    const history = useHistory();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const addNewRecord = (event) => {
        event.preventDefault();

        const newRecord = {
            date: dayjs().format("DD/MM"),
            description,
            value: Number(value),
            isAddRecord
        }

        setRecords([
            ...records,
            newRecord
        ])

        history.push("/home");
    }

    return (
        <StyledPageContainer>
            <StyledHeaderBox>
                <StyledHeader>
                    {isAddRecord ? (
                        "Nova entrada"
                    ) : (
                        "Nova saída"
                    )}
                </StyledHeader>
            </StyledHeaderBox>
            <StyledForm onSubmit={e => {
                    addNewRecord(e);
                }}>
                <StyledInput placeholder="Valor" type="text" value={value} onChange={e => setValue(e.target.value)} required></StyledInput>
                <StyledInput placeholder="Descrição" type="text" value={description} onChange={e => setDescription(e.target.value)} required></StyledInput>
                <StyledButton type="submit">
                    {isAddRecord ? (
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