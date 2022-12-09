import styled from 'styled-components';

const Input = styled.input`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  border: 0px transparent solid;
  ${props => {
    if (props.disabled) {
      return {
        backgroundColor: props.theme.colors.disable,
      };
    }
    return null;
  }}
  &:focus {
    border: 1px red solid;
  }
`;

export const InputIcon = styled(Input)`
  width: 100%;
  border: ${props => `1px ${props.theme.colors.secondary} solid`};
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  transition: 0.3s;
  cursor: pointer;

  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  :focus + .left-icon {
    svg {
      fill: dodgerBlue;
    }
  }
`;

export default Input;
