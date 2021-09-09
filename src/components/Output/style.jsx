import styled from 'styled-components';

const StyledOutput = styled.div`
  font-size: ${(props) => props.fontSize};  

  text-align: right;

  color: ${(props) => props.fontColor};

  margin: 0.4rem;
`;

export default StyledOutput;