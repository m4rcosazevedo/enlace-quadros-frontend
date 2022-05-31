import styled, { css } from "styled-components";

function getAlign (align) {
  switch (align) {
    case 'left': return css`
      left: 0 !important;
      margin-left: 0 !important;
    `
    case 'right': return css`
      left: auto !important;
      margin-left: 0 !important;
      right: 0;
    `
    default: return null
  }
}

export const Tag = styled.h1.attrs(({ tag }) => ({ as: tag }))`
  margin: 30px 0;
  padding: 0;
  position: relative;
  font-weight: normal;
  text-align: ${({ align }) => align};

  &:after {
    content: "";
    position: absolute;
    bottom: -7px;
    left: 50%;
    margin-left: -25px;
    ${({ align }) => getAlign(align)};
    width: 50px;
    height: 3px;
    background: var(--dark);
  }
  &.h1 {}
  &.h2 {}
  &.h3 {}
  &.h4 { &:after { width: 30px; margin-left: -15px;} }
  &.h5 { &:after { width: 30px; margin-left: -15px;} }
  &.h6 { &:after { width: 20px; margin-left: -10px;} }
`
