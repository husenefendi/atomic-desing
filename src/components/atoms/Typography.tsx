import React from 'react';
import { LinkProps, Link as MainLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  TypographyProps,
  variant,
  typography,
  ColorProps,
  color,
  SpaceProps,
  space,
} from 'styled-system';

interface IDefault extends TypographyProps, ColorProps {}

interface IHeading extends IDefault {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = styled.div.attrs<IHeading>(props => ({
  as: props.variant || 'h1',
}))<IHeading>`
  ${variant({
    prop: 'variant',
    variants: {
      h1: {
        fontSize: 6,
      },
      h2: {
        fontSize: 5,
      },
      h3: {
        fontSize: 4,
      },
      h4: {
        fontSize: 3,
      },
      h5: {
        fontSize: 2,
      },
      h6: {
        fontSize: 1,
      },
    },
  })};
  font-weight: bold;
  ${typography}
  ${color}
`;

export default Heading;

interface IText extends IDefault {
  type?: string;
}

export const Text = styled.div.attrs<IText>(props => ({
  as: props.type || 'p',
  color: 'black',
}))<IText>`
  ${color}
  ${variant({
    prop: 'type',
    variants: {
      p: {
        fontSize: 'normal',
      },
      label: {
        fontSize: 'normal',
        fontWeight: '400',
      },
      em: {
        fontStyle: 'italic',
      },
    },
  })}
`;

type IHref = LinkProps & IDefault & SpaceProps;

export const Link = styled(MainLink)<IHref>`
  ${typography}
  ${color}
  ${space}
`;
Link.defaultProps = {};
