import { FC } from 'react';
import * as S from "./styles";

export interface SidebarItem {
  title: string;
  path: string;
  icon: any;
  iconOpened?: any;
  iconClosed?: any;
  external?: boolean;
}

type SidebarLinkProps = {
  item: SidebarItem;
};

const SideBar: FC<SidebarLinkProps> = ({ item }) => {
  return !item.external ? (
    <>
      <S.SidebarLink to={item.path}>
        {item.icon}
        <S.SidebarLabel className="sidebarLabel">{item.title}</S.SidebarLabel>
      </S.SidebarLink>
    </>
  ) : (
    <S.ExternalLink href={item.path} target="_blank">
      {item.icon}
      <S.SidebarLabel className="sidebarLabel">{item.title}</S.SidebarLabel>
    </S.ExternalLink>
  );
};

export default SideBar;
