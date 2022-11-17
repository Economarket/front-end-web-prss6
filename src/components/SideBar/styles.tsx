import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { mediaQuerySm } from "../../mixins/media-queries";

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 0.1rem;
  font-size: 1rem;
  padding: 2rem;
  text-decoration: none;

  &:hover {
    background-color: #197aa6;
    border-radius: 5px;
  }
`;

export const SidebarLinkOut = styled(Link)`
  display: flex;
  align-items: center;
  height: 0.1rem;
  font-size: 1rem;
  padding: 2rem;
  text-decoration: none;
  margin-top: 250px;

  &:hover {
    background-color: #197aa6;
    border-radius: 5px;
  }
`;
export const SidebarLabel = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.blue200};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.medium};
    margin-left: 1rem;
  `}
`;

export const SidebarNav = styled.div<{ sidebar: boolean }>`
  position: fixed;
  top: 17rem;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  ${mediaQuerySm(
    css`
      position: static;
    `
  )};
`;

export const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  font-size: 1.3rem;
  margin-left: 2rem;
  ${mediaQuerySm(
    css`
      display: none;
    `
  )};
`;

export const SidebarWrap = styled.div``;
