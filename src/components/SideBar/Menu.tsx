import React, { FC } from 'react';
import styled from 'styled-components';
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

export interface SidebarItem {
  title: string;
  path: string;
  icon: any;
  iconOpened?: any;
  iconClosed?: any;
}

type SidebarLinkProps = {
  item: SidebarItem;
};

const SideBar: FC<SidebarLinkProps> = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        {item.icon}
        <SidebarLabel>{item.title}</SidebarLabel>
      </SidebarLink>
    </>
  );
};

export default SideBar;
