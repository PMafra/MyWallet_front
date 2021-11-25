/* eslint-disable react/prop-types */
import { useContext } from 'react';
import styled from 'styled-components';
import ColorModeContext from '../store/ColorModeContext';

export default function Record({ record }) {
  const { isDarkMode } = useContext(ColorModeContext);
  const {
    isAddRecord,
    date,
    description,
    value,
  } = record;
  return (
    <StyledRecord isAddRecord={isAddRecord} isDarkMode={isDarkMode}>
      <div className="group-date-description">
        <time className="fontClass">{date}</time>
        <p className="fontClass">{description}</p>
      </div>
      <span className="fontClass">
        {value % 1 === 0 ? `${value}.00` : value.toFixed(2)}
      </span>
    </StyledRecord>
  );
}

const StyledRecord = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .group-date-description {
    display: flex;
    flex-direction: row;
  }

  .fontClass {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  time {
    color: #d4d4d4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  p {
    color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
    word-break: break-all;
  }

  span {
    color: ${({ isAddRecord }) => (isAddRecord ? '#69CB60' : '#C70000')};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
`;
