import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";

// import PrivateRoute from "./privateRoute";
// import RequireAuth from './requireAuth';

// import Layout from '';
// import Unauthorized from '';

import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import ShoppingList from "../pages/ShoppingList";
import Tests from "../pages/Tests";
import User from "../pages/User/index";
import InternalAccessContainer from "../templates/InternalLayout";
import PrivateRoute from "./privateRoute";
// import ForgotPassword from '';
// import ChangePassword from '';
// import ExpiredToken from '';

// import {
//   CONTEXT_PRODUCT,
//   ROLE_ADMIN
// } from '../constants';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/novo-usuario" element={<User />} />
      <Route path="/testes" element={<Tests />} />

      {/* <Route path="/listafavoritos" element={<ListaFavoritos />} /> */}

      {/* <Route path="/promocoes" element={<Promocoes />} />
      <Route path="/sair" element={<Sair />} /> */}
      {/* <Route path="/recuperar-minha-senha" element={<ForgotPassword />} />
      <Route path="/alterar-senha" element={<ChangePassword />} />
      <Route path="/token-expirado" element={<ExpiredToken />} />
      <Route element={<Layout />}>
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Route>

      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      > */}
      {/* <Route element={<RequireAuth allowedRoles={ROLE_ADMIN} />}>
          <Route
            path="/app/produto"
            element={<Product url={CONTEXT_PRODUCT} />}
          />
        </Route> */}

      {/* </Route> */}

      <Route
        element={
          <PrivateRoute>
            <InternalAccessContainer />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/cadastroprodutos" element={<Product />} />
        <Route path="/listacompras" element={<ShoppingList />} />
        <Route path="/categorias" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
