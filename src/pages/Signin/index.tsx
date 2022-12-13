import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle } from 'react-icons/ai';
// import { Link } from 'react-router-dom';

import { FullHeightBackground } from '../../components/atoms/Laytout';
import { Button, ButtonIcon } from '../../components/atoms/Button';
import CircleElement from '../../components/atoms/Circle';
import { Box } from '../../components/atoms/Laytout';
import Heading, { Text, Link } from '../../components/atoms/Typography';
import TextField from '../../components/molecules/TextField';

const SigninPage = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [email, setEmail] = useState<string>('');
  return (
    <FullHeightBackground background={'white'}>
      <CircleElement
        backgroundColor="secondary"
        style={{
          opacity: 1,
          right: -75,
          top: -100,
        }}
        size={200}
      />
      <Box
        backgroundColor={'white'}
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
        p={50}
        display="flex"
      >
        <Box style={{ flex: 1 }} pt={50}>
          <Heading variant="h3" color={'black'}>
            Welcome to Superintend 👀
          </Heading>
          <Text color="primary">
            {`Superinted is a collaboration tool for a \r\n manage your task ✍️`}
          </Text>
        </Box>
        <Box mt={50} style={{ flex: 3 }}>
          <TextField
            type="email"
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            type={showPassword ? 'text' : 'password'}
            label="Password"
            style={{ marginTop: '10px' }}
            placeholder="Enter your password"
            icon={
              <ButtonIcon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </ButtonIcon>
            }
          />
          <hr style={{ marginTop: 20, marginBottom: 20 }} />
          <Button
            backgroundColor={'red'}
            width="100%"
            display={'flex'}
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <AiOutlineGoogle
              style={{ marginRight: 15, display: 'inline-block', fontSize: 20 }}
            />
            Continue with Google
          </Button>
        </Box>
        <Box
          style={{
            flex: 1,
            justifyContent: 'end',
            flexDirection: 'column',
          }}
          display="flex"
        >
          <Button
            backgroundColor={'secondary'}
            width="100%"
            display={'flex'}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            Continue with Email
          </Button>
          <Text>
            Don't have an account ?
            <Link
              to="/signup"
              color="secondary"
              fontWeight={'700'}
              ml={10}
              fontStyle="normal"
              style={{ textDecoration: 'none' }}
            >
              Create Account
            </Link>
          </Text>
        </Box>
      </Box>
    </FullHeightBackground>
  );
};

export default SigninPage;
