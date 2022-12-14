import styled, { css } from "styled-components";
import {
  mediaQueryLg,
  mediaQueryMd,
  mediaQuerySm,
  mediaQueryXl,
  mediaQueryXxl,
} from "../../mixins/media-queries";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuerySm(css``)}
  overflow-x: hidden;
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQueryMd(css`
    flex-direction: row;
  `)}
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  gap: 3rem;
  width: 100%;
  padding: 2rem 4rem;
  border-bottom: 2px solid;
  border-color: #d9d9d9;
  min-height: 14rem;

  ${mediaQueryXl(
    css`
      gap: 8rem;
    `
  )};
`;

export const WrapperUser = styled.div`
  display: flex;
  gap: 2rem;
`;
export const WrapperData = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px ;
`;
export const WrapperIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Logo = styled.div`
  border-bottom: 2px solid;
  border-color: #d9d9d9;
  display: flex;
  justify-content: center;
  padding: 2rem;
  min-height: 14rem;
  min-width: 30rem;
  cursor: pointer;

  ${mediaQueryMd(css`
    border-right: 2px solid;
    border-color: #d9d9d9;
  `)}
`;

export const WrapperText = styled.div`
  display: none;

  ${mediaQueryLg(
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;
    `
  )};
  ${mediaQueryXxl(
    css`
      margin-left: 16rem;
    `
  )};
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.blue200};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.large};
    margin: 0.5rem;
  `}
`;

export const Subtitle = styled.p`
  display: none;
  ${mediaQueryXl(
    css`
      ${({ theme }) => css`
        text-align: center;
        color: ${theme.colors.gray900};
        font-family: ${theme.font.family.secondary};
        font-size: ${theme.font.sizes.xsmall};
        padding: 0.5rem;
        display: contents;
      `}
    `
  )};
`;

export const SubtitleUser = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.gray900};
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.normal};
    padding: 0.5rem;
    display: contents;
  `}
`;

export const WrapperMiddle = styled.div`
  display: flex;
`;

export const WrapperMenu = styled.div`
  border-right: 2px solid;
  border-color: #d9d9d9;
  padding: 1rem;
  ${mediaQueryMd(
    css`
      min-width: 30rem;
    `
  )};
`;

export const WrapperContentFooter = styled.div`
  width: 100%;
  /* max-width: calc(100vw - 30rem); */
  min-height: calc(100vh - 14rem);
  display: flex;
  flex-direction: column;
`;

export const WrapperContent = styled.div`
  border-bottom: 2px solid;
  border-color: #d9d9d9;
  height: 100%;
  width: 100%;
`;

export const WrapperFoot = styled.div`
  padding: 2rem;
`;

export const TooltipText = styled.div`
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
  
`;
export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100%);
  left: -30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 10px;
  padding: 5px 5px;
  border-radius: 4px;
  font-family: ${theme.font.family.secondary};
  text-align: center;

 

  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;

    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;
export const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color:#fff;
    background-color:RGBA(25,122,166,1);
    width: 100px;
    padding: 8px 8px;

    &:before {
      border-color: transparent transparent RGBA(25,122,166,1)
      RGBA(25,122,166,1)
    }
  }
`;

export const Image = styled.img`
  width: 0;
  margin: auto;

  ${mediaQuerySm(css`
    width: 80%;
  `)};

  ${mediaQueryLg(css`
    width: 70%;
  `)};

  ${mediaQueryXl(css`
    width: 60%;
  `)};
`;
