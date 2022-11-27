import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import IconCategoryPieChart from "./../../assets/icons/categoryPieChart";
import IconListCheck from "./../../assets/icons/listCheck";
// import IconListHeart from "./../../assets/icons/listHeart";
import IconHome from "./../../assets/icons/home";
import IconPlusCicle from "./../../assets/icons/plusCicle";
import { SidebarItem } from "./Menu";
import IconMarkerPin from "../../assets/icons/markerPin";
import IconShoppingBag from "../../assets/icons/shoppingBag";
import IconStar from "../../assets/icons/star";

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
    title: "Mercados Próximos",
    path: "/mercados-proximos",
    icon: <IconMarkerPin />,
  },

  {
    title: "Listas de compra",
    path: "/lista-compras",
    icon: <IconListCheck />,
  },

  {
    title: "Cadastro de produto",
    path: "/cadastrar-produto",
    icon: <IconPlusCicle />,
  },

  {
    title: "Avalie nosso Website",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSe1sm7K5vxi30mw8CnU_-JPhApW4gw-nGPK4dCwSx-1q_gA-A/viewform",
    icon: <IconStar />,
    external: true,
  },
];
