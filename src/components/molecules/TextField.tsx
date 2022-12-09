import styled from 'styled-components';
import { Box } from '../atoms/Laytout';
import Input, { InputIcon } from '../atoms/Input';
import { ButtonIcon } from '../atoms/Button';
import { Text } from '../atoms/Typography';
import React, { useState } from 'react';

interface ITextfield {
  label?: string;
  icon?: React.ReactNode;
}

const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }

  button {
    background: none;
    border: none;
    position: absolute;
    right: 5px;
    /* top: 50%; */
    /* transform: translateY(-50%); */
    padding: 6px;
    svg {
      fill: black;
      transition: 0.3s;
    }
  }
`;

const TextField = (props: ITextfield) => {
  const [text, setText] = useState('');
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  const clearInput = () => {
    setText('');
  };

  return (
    <StyledInput className={'inputWithIcon'}>
      {props?.label && <Text type="label">{props?.label}</Text>}
      <Box display={'block'}>
        <InputIcon
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search"
          onSubmit={e => {
            e.preventDefault();
          }}
        />
        {props?.icon && props.icon}
      </Box>
    </StyledInput>
  );
};

export default TextField;
