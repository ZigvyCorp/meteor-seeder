import styled, { css } from 'styled-components';

export const dotlineCSS = (left = 0, right = 0) => (css`
  position: relative;
  overflow: hidden;
    
  &:after {
    content: ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ";
    position: absolute;
    bottom: -3px;
    overflow: hidden;
    white-space: nowrap;
    color: var(--zigvy-col-dot-line);
    font-size: 12px;
    left: ${left}px;
    right: ${right}px;
  }
`);

export const hoverCSS = css`
  &:hover,
  &.selected {
    color: var(--zigvy-col-blue);
    cursor: pointer;
  }
`;
