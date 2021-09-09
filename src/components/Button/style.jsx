import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 2.2rem;

  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.buttonColor};

  width: ${(props) => props.width};
  height: 6.4rem;

  margin: 0.1rem;

  border: none;

  :hover {
    box-shadow: 0 0 0.75rem 0.5rem hsl(196, 48%, 75%);
  }
  :active {
    box-shadow: 0 0 1.5rem 0.75rem hsl(197, 49%, 90%);
  }
`;

export default StyledButton;
