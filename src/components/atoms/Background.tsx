import styled from 'styled-components';

interface IColorType {
  color?: 'primary' | 'secondary' | 'white' | 'red' | string;
}
const Background = styled.div<IColorType>`
  background-color: ${props => props.theme.colors[props.color] ?? props.color};
  position: relative;
  height: 100vh;
`;

Background.defaultProps = {
  color: 'primary',
};
export default Background;

export const FullHeightBackground = styled(Background)`
  display: flex;
  flex: 1;
  overflow: hidden;
`;
