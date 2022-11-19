import { FC, useState } from "react";
import Menu from "./Menu";
import IconMenu from "./../../assets/icons/menu";
import IconOutLineClose from "./../../assets/icons/outLineClose";
import { SidebarData } from "./sidebarData";
import * as S from "./styles";
import { useSession } from "../../contexts/session";
import IconLogOut from "./../../assets/icons/logOut";

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <S.NavIcon to="#" onClick={showSidebar}>
        <IconMenu />
      </S.NavIcon>
      <S.SidebarNav sidebar={sidebar}>
        <S.SidebarWrap>
          <S.NavIcon to="#" onClick={showSidebar}>
            <IconOutLineClose />
          </S.NavIcon>
          {SidebarData.map((item, index) => {
            return <Menu item={item} key={index} />;
          })}
        </S.SidebarWrap>
      </S.SidebarNav>
    </>
  );
};

export default Sidebar;
