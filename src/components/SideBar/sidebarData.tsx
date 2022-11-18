import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import IconCategoryPieChart from "./../../assets/icons/categoryPieChart";
import IconListCheck from "./../../assets/icons/listCheck";
// import IconListHeart from "./../../assets/icons/listHeart";
import IconHome from "./../../assets/icons/home";
import IconPlusCicle from "./../../assets/icons/plusCicle";
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
    title: "Cadastro de produto",
    path: "/cadastroprodutos",
    icon: <IconPlusCicle />,
  },
  {
    title: "Categorias",
    path: "/categorias",
    icon: <IconCategoryPieChart />,
  },
  {
    title: "Listas de compra",
    path: "/listacompras",
    icon: <IconListCheck />,
  },
  {
    title: "Mercados Próximos",
    path: "/pesquisa",
    icon: <IconSearch />,
  },
  {
    title: "Produtos",
    path: "/pesquisa",
    icon: <IconSearch />,
  },
];
