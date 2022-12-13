import styled from 'styled-components';
import { color, ColorProps, background, BackgroundProps } from 'styled-system';

interface ICircle extends ColorProps {
  size?: number;
}

const CircleElement = styled.div<ICircle>`
  border-radius: 50%;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: absolute;
  opacity: 0.7;
  ${color}
  ${background}
`;
CircleElement.defaultProps = {
  size: 100,
  color: 'primary',
};
export default CircleElement;
