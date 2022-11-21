import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import IconCategoryPieChart from "./../../assets/icons/categoryPieChart";
import IconListCheck from "./../../assets/icons/listCheck";
// import IconListHeart from "./../../assets/icons/listHeart";
import IconHome from "./../../assets/icons/home";
import IconPlusCicle from "./../../assets/icons/plusCicle";
import { SidebarItem } from "./Menu";
import IconSearch from "../../assets/icons/search";
import IconMarkerPin from "../../assets/icons/markerPin";
import IconShoppingBag from "../../assets/icons/shoppingBag";

export const SidebarData: SidebarItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <IconHome />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
  },
  {
    title: "Produtos",
    path: "/produtos",
    icon: <IconShoppingBag />,
  },
  {
    title: "Categorias",
    path: "/categorias",
    icon: <IconCategoryPieChart />,
  },
  {
    title: "Cadastro de produto",
    path: "/cadastrar-produto",
    icon: <IconPlusCicle />,
  },
 
  {
    title: "Listas de compra",
    path: "/lista-compras",
    icon: <IconListCheck />,
  },
  {
    title: "Mercados Próximos",
    path: "/mercados-proximos",
    icon: <IconMarkerPin />,
  },
 
];
