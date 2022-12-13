import { useState } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { FullHeightBackground } from '../../components/atoms/Laytout';
import { Box } from '../../components/atoms/Laytout';
import CircleElement from '../../components/atoms/Circle';
import { ButtonIcon } from '../../components/atoms/Button';
import Heading, { Text, Link } from '../../components/atoms/Typography';
import { colors } from '../../config/theme';
import TextField from '../../components/molecules/TextField';
import { Button } from '../../components/atoms/Button';

interface IForm {
  name: string;
  email: string;
  password: string;
  re_password: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<IForm>({
    name: '',
    email: '',
    password: '',
    re_password: '',
  });
  return (
    <FullHeightBackground background="white">
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
        backgroundColor="white"
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
        p={50}
        display="flex"
      >
        <Box style={{ flex: 1 }}>
          <ButtonIcon
            color="black"
            onClick={() => navigate('/signin', { replace: true })}
          >
            <HiOutlineArrowLeft
              style={{
                display: 'inline-block',
                fontSize: 16,
                marginRight: 4,
                color: colors.secondary,
              }}
            />
            Go back
          </ButtonIcon>
          <Heading variant="h4" color={'black'}>
            Create your account
          </Heading>
        </Box>
        <Box mt={0} style={{ flex: 3 }}>
          <TextField
            style={{ marginBottom: 12 }}
            label="Name"
            value={form?.name}
            onChange={e =>
              setForm(prev => ({
                ...prev,
                ['name']: e.target.value,
              }))
            }
            placeholder="Enter your name..."
          />
          <TextField
            label="Email"
            type={'email'}
            value={form?.email}
            onChange={e =>
              setForm(prev => ({
                ...prev,
                ['email']: e.target.value,
              }))
            }
            placeholder="Enter your email..."
            style={{ marginBottom: 12 }}
          />
          <TextField
            label="Password"
            type={'password'}
            value={form?.password}
            onChange={e =>
              setForm(prev => ({
                ...prev,
                ['password']: e.target.value,
              }))
            }
            placeholder="Enter your password..."
            style={{ marginBottom: 12 }}
          />
          <TextField
            label="Re-Password"
            type={'password'}
            value={form?.re_password}
            onChange={e =>
              setForm(prev => ({
                ...prev,
                ['re_password']: e.target.value,
              }))
            }
            placeholder="Enter your re-password..."
            style={{ marginBottom: 12 }}
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
            Create an account
          </Button>
          <Text>
            Don't have an account ?
            <Link
              to="/signin"
              color="secondary"
              fontWeight={'700'}
              ml={10}
              fontStyle="normal"
              style={{ textDecoration: 'none' }}
            >
              Contine with email
            </Link>
          </Text>
        </Box>
      </Box>
    </FullHeightBackground>
  );
};

export default Signup;
