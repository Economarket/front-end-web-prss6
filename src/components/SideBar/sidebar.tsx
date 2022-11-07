import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import Menu from './Menu';
import IconMenu from './../../assets/icons/menu';
import IconOutLineClose from './../../assets/icons/outLineClose';
import { SidebarData } from './sidebarData';

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

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <NavIcon to="#" onClick={showSidebar}>
        <IconMenu />
      </NavIcon>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#" onClick={showSidebar}>
            <IconOutLineClose />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <Menu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>
  );
};

export default Sidebar;
