import { Link, useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import StyledPageContainer from '../../assets/styles/StyledPageContainer';
import { StyledSignPage, StyledLogo, StyledLogSwap } from '../../assets/styles/StyledSignPage';
import {
  StyledForm, StyledInput, StyledButton, StyledAlertBox,
} from '../../assets/styles/StyledForms';
import ColorModeContext from '../../store/ColorModeContext';
import { signIn } from '../../services/Api';
import UserContext from '../../store/UserContext';
import InputContext from '../../store/InputContext';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { isDarkMode } = useContext(ColorModeContext);
  const { setToken, setUserName } = useContext(UserContext);
  const { alertMessage, setAlertMessage } = useContext(InputContext);
  const passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  const initialMessage = 'Faça login com sua conta!';

  useEffect(() => {
    setAlertMessage(initialMessage);
  }, []);

  function signInRequest(event) {
    event.preventDefault();
    setLoading(true);
    const signInBody = {
      email,
      password,
    };
    signIn(signInBody).then((res) => {
      const {
        token,
        name,
      } = res.data;
      setLoading(false);
      setUserName(name);
      setToken(token);
      history.push('/home');
    }).catch((err) => {
      setAlertMessage(err.response?.data);
      setTimeout(() => setAlertMessage(initialMessage), 4000);
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
          signInRequest(e);
        }}
        >
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
          <StyledAlertBox>
            {alertMessage}
          </StyledAlertBox>
          <StyledButton
            type="submit"
            loading={loading}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Entrar'}
          </StyledButton>
        </StyledForm>
        <StyledLogSwap>
          <Link to="/sign-up" className="swapLink">
            Primeira vez? Cadastre-se!
          </Link>
        </StyledLogSwap>
      </StyledSignPage>
    </StyledPageContainer>
  );
}
