
import styled, {css} from 'styled-components';


  export const MyButton = styled.button`
  background: red;
  border-radius: 1px;
  border: none;
  color:white;
  padding:10px 10px;
  min-width:200px;
  font-size:large;



  ${props => props.primary && css`
    background: maroon;
    color: white;
  `}

  ${props => props.secondary && css`
    background: white;
    color: black;
  `}

  ${props => props.red && css`
    background: red;
    color: white;
  `}

  ${props => props.green && css`
    background: green;
    color: white;
  `}

  `;
