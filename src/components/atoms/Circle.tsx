import styled from 'styled-components';

interface ICircle {
  size?: number;
}

const CircleElement = styled.div<ICircle>`
  border-radius: 50%;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background-color: ${props => props.theme.colors.primary};
`;
CircleElement.defaultProps = {
  size: 100,
};
export default CircleElement;
