import { FC } from "react";
import Menu from "./Menu";
import { SidebarData } from "./sidebarData";
import * as S from "./styles";

const Sidebar: FC = () => {
  return (
    <>
      <S.SidebarNav>
        <S.SidebarWrap>
          {SidebarData.map((item, index) => {
            return <Menu item={item} key={index} />;
          })}
        </S.SidebarWrap>
      </S.SidebarNav>
    </>
  );
};

export default Sidebar;
