import styled from 'styled-components';

interface IColorType {
  color?: 'primary' | 'secondary' | 'white' | 'red' | string;
}
const Background = styled.div<IColorType>`
  background-color: ${props => props.theme.colors[props.color] ?? props.color};
  height: 100%;
`;

Background.defaultProps = {
  color: 'primary',
};
export default Background;
