import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Background from '../../components/atoms/Backgroun';
import CircleElement from '../../components/atoms/Circle';

const WelcomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      return navigate('/signin', { replace: true });
    }, 5000);
  }, []);
  return (
    <>
      <CircleElement
        className="absolute opacity-20 -top-24 -right-16 z-10"
        size={325}
      />
      <CircleElement
        className="absolute opacity-20 -top-52 right-1 z-10"
        size={325}
      />
      <CircleElement
        className="absolute opacity-20 -bottom-24 -left-16 z-10"
        size={325}
      />
      <CircleElement
        className="absolute opacity-20 -bottom-52 left-1 z-10"
        size={325}
      />
      <Background
        color="secondary"
        className="flex text-center align-middle justify-center flex-col relative "
      >
        <h1 className="font-montserrat relative font-medium text-2xl text-white after:bg-white after:contents[ ] after:absolute after:h-2 after:w-2 after:bottom-1 after:rounded-full after:opacity-50 after:animate-bounce">
          Welcome
        </h1>
      </Background>
    </>
  );
};
export default WelcomePage;
