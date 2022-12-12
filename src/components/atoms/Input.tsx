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
  border: ${props => `1px ${props.theme.colors.grey} solid`};
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  transition: 0.3s;
  padding: 4px 8px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.grey};
  &:focus {
    border-color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.white};
  }

  :focus + .left-icon {
  }
`;

export default Input;
