import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import IconCategoryPieChart from "./../../assets/icons/categoryPieChart";
import IconListCheck from "./../../assets/icons/listCheck";
// import IconListHeart from "./../../assets/icons/listHeart";
import IconHome from "./../../assets/icons/home";
import IconPlusCicle from "./../../assets/icons/plusCicle";
import IconLogOut from "./../../assets/icons/logOut";
import { SidebarItem } from "./Menu";
import IconSearch from "../../assets/icons/search";

export const SidebarData: SidebarItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <IconHome />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
  },
  {
    title: 'Pesquisa',
    path: '/pesquisa',
    icon: <IconSearch />,
  },
  {
    title: "Cadastro de produto",
    path: "/cadastroprodutos",
    icon: <IconPlusCicle />,
  },
  {
    title: "Lista de compra",
    path: "/listacompras",
    icon: <IconListCheck />,
  },
  {
    title: "Categorias",
    path: "/categorias",
    icon: <IconCategoryPieChart />,
  },
  {
    title: "Sair",
    path: "/login",
    icon: <IconLogOut />,
  },
];
