import styled from "styled-components";
import { Link } from 'react-router-dom';

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 0.1rem;
  font-size: 1rem;
  padding: 2rem;
  text-decoration: none;

  &:hover {
    background-color: #197aa6;
    border-radius: 4%;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 1rem;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
  width: 270px;
  height: 100vh;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
`;

const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  font-size: 1.3rem;
  margin-left: 2rem;
`;

const SidebarWrap = styled.div``;
