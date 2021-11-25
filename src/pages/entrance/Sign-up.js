import { Link, useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import StyledPageContainer from '../../assets/StyledPageContainer';
import { StyledSignPage, StyledLogo, StyledLogSwap } from '../../assets/StyledSignPage';
import {
  StyledForm, StyledInput, StyledButton, StyledAlertBox,
} from '../../assets/StyledForms';
import ColorModeContext from '../../store/ColorModeContext';
import { signUp } from '../../services/Api';
import InputContext from '../../store/InputContext';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const passwordRules = 'Sua senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial.';
  const history = useHistory();
  const { isDarkMode } = useContext(ColorModeContext);
  const { alertMessage, setAlertMessage } = useContext(InputContext);
  const passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

  useEffect(() => {
    setAlertMessage(passwordRules);
  }, []);

  const validateRepeatedPassword = () => {
    if (password !== passwordConfirmation) {
      setLoading(false);
      setAlertMessage('Sua confirmação de senha está diferente da original!');
      setTimeout(() => setAlertMessage(passwordRules), 4000);
      return false;
    }
    return true;
  };

  function signUpRequest(event) {
    event.preventDefault();
    setLoading(true);

    const isRepeatedPasswordValid = validateRepeatedPassword();
    if (!isRepeatedPasswordValid) return;

    const signUpBody = {
      name,
      email,
      password,
    };
    signUp(signUpBody).then(() => {
      setLoading(false);
      history.push('/');
    }).catch((err) => {
      setAlertMessage(err.response?.data);
      setTimeout(() => setAlertMessage(passwordRules), 4000);
      setLoading(false);
    });
  }

  return (
    <StyledPageContainer isDarkMode={isDarkMode}>
      <StyledSignPage>
        <StyledLogo>
          MyWallet
        </StyledLogo>
        <StyledForm onSubmit={(e) => {
          setLoading(true);
          signUpRequest(e);
        }}
        >
          <StyledInput
            placeholder="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isDarkMode={isDarkMode}
            minLength="1"
            maxLength="30"
            required
          />
          <StyledInput
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isDarkMode={isDarkMode}
            maxLength="50"
            required
          />
          <StyledInput
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isDarkMode={isDarkMode}
            pattern={passwordRegex}
            required
          />
          <StyledInput
            placeholder="Confirme a senha"
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            isDarkMode={isDarkMode}
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
            {loading ? 'Loading...' : 'Cadastrar'}
          </StyledButton>
        </StyledForm>
        <StyledLogSwap>
          <Link to="/" className="swapLink">
            Já tem uma conta? Entre agora!
          </Link>
        </StyledLogSwap>
      </StyledSignPage>
    </StyledPageContainer>
  );
}
