import { FC } from 'react';
import * as S from "./styles";

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
      <S.SidebarLink to={item.path}>
        {item.icon}
        <S.SidebarLabel className="sidebarLabel">{item.title}</S.SidebarLabel>
      </S.SidebarLink>
    </>
  );
};

export default SideBar;
