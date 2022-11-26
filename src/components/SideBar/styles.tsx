import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { mediaQueryMd, mediaQuerySm } from "../../mixins/media-queries";
import theme from "../../styles/theme";

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 0.1rem;
  font-size: 1rem;
  padding: 2rem;
  text-decoration: none;

  &:hover,
  &:visited:hover {
    background-color: ${theme.colors.blue300};
    border-radius: 5px;
    color: ${theme.colors.whiteFull};

    .sidebarLabel {
      color: ${theme.colors.whiteFull};
    }
  }

  &,
  &:active,
  &:visited {
    color: ${theme.colors.blue200};
    .sidebarLabel {
      color: ${theme.colors.blue200};
    }
  }
`;

export const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  height: 0.1rem;
  font-size: 1rem;
  padding: 2rem;
  text-decoration: none;

  &:hover,
  &:visited:hover {
    background-color: ${theme.colors.blue300};
    border-radius: 5px;
    color: ${theme.colors.whiteFull};

    .sidebarLabel {
      color: ${theme.colors.whiteFull};
    }
  }

  &,
  &:active,
  &:visited {
    color: ${theme.colors.blue200};
    .sidebarLabel {
      color: ${theme.colors.blue200};
    }
  }
`;

export const SidebarLabel = styled.span`
  display: none;

  ${mediaQueryMd(
    css`
      display: block;
      ${({ theme }) => css`
        font-family: ${theme.font.family.primary};
        font-size: ${theme.font.sizes.medium};
        margin-left: 1rem;
      `}
    `
  )};
`;

export const SidebarNav = styled.div`
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
