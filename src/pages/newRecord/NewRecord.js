/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { useContext, useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { useHistory } from 'react-router-dom';
import StyledHeader from '../../assets/StyledHeader';
import StyledPageContainer from '../../assets/StyledPageContainer';
import {
  StyledForm, StyledInput, StyledButton, StyledAlertBox,
} from '../../assets/StyledForms';
import RecordsContext from '../../store/RecordsContext';
import ColorModeContext from '../../store/ColorModeContext';
import UserContext from '../../store/UserContext';
import { sendNewRecord } from '../../services/Api';
import InputContext from '../../store/InputContext';

export default function NewRecord() {
  const { isAddRecord } = useContext(RecordsContext);
  const { isDarkMode } = useContext(ColorModeContext);
  const { alertMessage, setAlertMessage } = useContext(InputContext);
  const { token } = useContext(UserContext);
  const history = useHistory();
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const newRecordMessage = `Entre com um valor de ${isAddRecord ? 'entrada' : 'saída'} e uma descrição.`;

  useEffect(() => {
    setAlertMessage(newRecordMessage);
  }, []);

  const validateNumberValue = () => {
    if (Number(value) === 0 || Number(value) < 0) {
      setAlertMessage('O valor inserido não deve ser zero ou negativo!');
      setTimeout(() => setAlertMessage(newRecordMessage), 4000);
      setLoading(false);
      return false;
    }
    return true;
  };

  const addNewRecord = (event) => {
    event.preventDefault();
    setLoading(true);

    const isNumberValueValid = validateNumberValue();
    if (!isNumberValueValid) return;

    const newRecordBody = {
      date: dayjs().format('DD/MM'),
      description,
      value: Number(value),
      isAddRecord,
    };
    sendNewRecord(token, newRecordBody).then(() => {
      setAlertMessage(`Novo valor de ${isAddRecord ? 'entrada' : 'saída'} inserido com sucesso!`);
      setTimeout(() => setAlertMessage(newRecordMessage), 4000);
      setValue('');
      setDescription('');
      setLoading(false);
    }).catch((err) => {
      setAlertMessage(err.response?.data);
      setTimeout(() => setAlertMessage(newRecordMessage), 4000);
      setLoading(false);
    });
  };

  return (
    <StyledPageContainer isDarkMode={isDarkMode}>
      <StyledHeaderBox>
        <StyledHeader>
          {isAddRecord ? (
            'Nova entrada'
          ) : (
            'Nova saída'
          )}
        </StyledHeader>
      </StyledHeaderBox>
      <StyledForm onSubmit={(e) => addNewRecord(e)}>
        <StyledInput
          placeholder="Valor"
          type="number"
          step="any"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isDarkMode={isDarkMode}
          required
        />
        <StyledInput
          placeholder="Descrição"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          isDarkMode={isDarkMode}
          minLength="1"
          maxLength="300"
          required
        />
        <StyledAlertBox>
          {alertMessage}
        </StyledAlertBox>
        <StyledButton
          type="submit"
          loading={loading}
          disabled={loading}
        >
          {loading ? (
            'Loading...'
          ) : (
            isAddRecord ? (
              'Salvar entrada'
            ) : (
              'Salvar saída'
            )
          )}
        </StyledButton>
      </StyledForm>
      <StyledButton onClick={() => history.push('/home')}>
        Cancelar
      </StyledButton>
    </StyledPageContainer>
  );
}

const StyledHeaderBox = styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
    max-width: 326px;
    margin-bottom: 40px;
`;
