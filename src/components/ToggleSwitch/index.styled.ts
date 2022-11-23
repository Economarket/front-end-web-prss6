import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  margin: auto;
  text-align: center;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const Mark = styled.div`
  height: 0.7em;
  width: 0.7em;
  border-radius: 1em;
  background: #fafafa;
  -webkit-transition: all 300ms;
  -moz-transition: all 300ms;
  transition: all 300ms;
`;

export const Switch = styled.label<{ checked: boolean }>`
  background: ${({ checked }) => (checked ? theme.colors.blue200 : theme.colors.gray500)};
  font-size: 1.5em;
  height: 1em;
  width: 2em;
  border-radius: 1em;
  align-items: center;
  display: flex;
  padding: 0 0.15em;
  margin-bottom: 0;
  cursor: pointer;
  ${Input}:checked + ${Mark} {
    -webkit-transform: translate3d(140%, 0, 0);
    -moz-transform: translate3d(140%, 0, 0);
    transform: translate3d(140%, 0, 0);
  }
`;
