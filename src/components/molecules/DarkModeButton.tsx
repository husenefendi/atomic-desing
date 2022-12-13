import { FiMoon, FiSun } from 'react-icons/fi';

import { Box } from '../atoms/Laytout';
import { ButtonIcon } from '../atoms/Button';

interface IDark {
  onChange: (status: boolean) => void;
  isDark: boolean;
}

const DarkModeButton = (props: IDark): JSX.Element => {
  return (
    <Box position={'absolute'}>
      <ButtonIcon
        onClick={() => props?.onChange(!props?.isDark)}
        color={'black'}
      >
        {props?.isDark ? <FiSun /> : <FiMoon />}
      </ButtonIcon>
    </Box>
  );
};

export default DarkModeButton;
