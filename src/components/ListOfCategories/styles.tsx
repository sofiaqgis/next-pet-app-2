import styled, { css, keyframes } from 'styled-components'

interface ListProps {
  fixed?: boolean;
}

export const List = styled.ul<ListProps>`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${({ fixed }) => fixed && css`
    {
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      z-index: 1;
      margin: 0 auto;
      max-width: 400px;
      position: fixed;
      padding: 5px;
      right: 0;
      top: -20px;
      transform: scale(.5);
    }
  `}
  /* &.fixed {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    z-index: 1;
    margin: 0 auto;
    max-width: 400px;
    position: fixed;
    padding: 5px;
    right: 0;
    top: -20px;
    transform: scale(.5);
  } */
`;
// &.fixed {
//     background: #fff;
//     border-radius: 60px;
//     box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
//     left: 0;
//     z-index: 1;
//     margin: 0 auto;
//     max-width: 400px;
//     position: fixed;
//     padding: 5px;
//     right: 0;
//     top: -20px;
//     transform: scale(.5);
// }`

const Item = styled.li`
  padding: 0px 8px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export { Item, Spinner, Row };
