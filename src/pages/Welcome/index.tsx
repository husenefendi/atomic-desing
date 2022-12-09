import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Background from '../../components/atoms/Background';
import CircleElement from '../../components/atoms/Circle';

const H1 = styled.h1.attrs({
  className: 'animated bounce',
})`
  color: ${props => props.theme.colors.white};
  position: relative;
  ::after {
    border-radius: 50%;
    bottom: 8px;
    right: -12px;
    opacity: 0.7;
    width: 10px;
    height: 10px;
    content: '';
    position: absolute;
    background-color: ${props => props.theme.colors.white};
  }
`;

const WelcomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      return navigate('/signin', { replace: true });
    }, 5000);
  }, []);
  return (
    <Background
      color="secondary"
      style={{
        overflow: 'hidden',
        margin: '0px -16px',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CircleElement
        className="-top-24 -right-16 z-10"
        style={{
          top: -100,
          right: -70,
        }}
        size={325}
      />
      <CircleElement
        className="-top-52 right-1 z-10"
        size={325}
        style={{
          top: -130,
          right: 70,
        }}
      />
      <CircleElement
        style={{
          bottom: -100,
          left: -70,
        }}
        size={325}
      />
      <CircleElement
        style={{
          bottom: -130,
          left: 70,
        }}
        size={325}
      />

      <H1 className="">Welcome</H1>
    </Background>
  );
};
export default WelcomePage;
