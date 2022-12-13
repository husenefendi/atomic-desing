import React, { useState } from 'react';
import styled from 'styled-components';

import { Box } from '../atoms/Laytout';
import Input, { InputIcon } from '../atoms/Input';
import { Text } from '../atoms/Typography';

import classNames from '../../tools/classNames';

interface ITextfield extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  parentClass?: string;
}

const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }
  label {
    color: ${props => props.theme.colors.black};
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
    right: 0px;
    padding: 6px;
    font-size: 20px;
    svg {
      fill: black;
      transition: 0.3s;
    }
  }
`;

const TextField = (props: ITextfield) => {
  // const inputProps = { ...props };
  // delete inputProps.style;
  const { style, parentClass, label, icon: Icon, ...rest } = props;

  return (
    <StyledInput
      className={classNames('inputWithIcon', parentClass ?? '')}
      style={{ ...style }}
    >
      {label && <Text type="label">{label}</Text>}
      <Box display={'block'}>
        <InputIcon type="text" {...rest} />
        {Icon && Icon}
      </Box>
    </StyledInput>
  );
};

TextField.defaultProps = {
  placeholder: 'Your Name',
  label: 'Name',
  parentClass: '',
};

export default TextField;
