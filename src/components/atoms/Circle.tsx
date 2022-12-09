import styled from 'styled-components';

interface ICircle {
  size?: number;
  color?: 'primary' | 'secondary' | 'white' | 'red' | string;
}

const CircleElement = styled.div<ICircle>`
  border-radius: 50%;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background-color: ${props =>
    props.theme.colors[props.color] ?? props.theme.colors.primary};
  position: absolute;
  opacity: 0.7;
`;
CircleElement.defaultProps = {
  size: 100,
  color: 'primary',
};
export default CircleElement;
