import { AiFillEye } from 'react-icons/ai';
import { FullHeightBackground } from '../../components/atoms/Background';
import { Button, ButtonIcon } from '../../components/atoms/Button';
import CircleElement from '../../components/atoms/Circle';
import Input from '../../components/atoms/Input';
import { Box } from '../../components/atoms/Laytout';
import Heading, { Text } from '../../components/atoms/Typography';
import TextField from '../../components/molecules/TextField';

const SigninPage = () => {
  return (
    <FullHeightBackground color="white">
      <CircleElement
        color="secondary"
        style={{
          opacity: 1,
          right: -75,
          top: -75,
        }}
        size={150}
      />
      <Box color="primary" style={{ flex: 1 }} px={50} py={100}>
        <Box>
          <Heading variant="h3" color={'black'}>
            Welcome to Superintend 👀
          </Heading>
          <Text color="primary">
            {`Superinted is a collaboration tool for a \r\n manage your task ✍️`}
          </Text>
        </Box>
        <Box mt={50}>
          <TextField
            label="Name"
            icon={
              <ButtonIcon>
                <AiFillEye />
              </ButtonIcon>
            }
          />

          <Input placeholder="Halo" disabled />
        </Box>
      </Box>
    </FullHeightBackground>
  );
};

export default SigninPage;
