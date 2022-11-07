import { Route, Routes } from 'react-router-dom';

// import PrivateRoute from "./privateRoute";
// import RequireAuth from './requireAuth';

// import Layout from '';
// import Unauthorized from '';

import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import {
  CadastroProduto,
  ListaCompras,
  ListaFavoritos,
  Categorias,
  Promocoes,
  Sair,
} from '../pages/paginas';
import Tests from '../pages/Tests';
import User from '../pages/User/index';
import PrivateRoute from './privateRoute';
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
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/novo-usuario" element={<User />} />
      <Route path="/testes" element={<Tests />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastroprodutos" element={<CadastroProduto />} />
      <Route path="/listacompra" element={<ListaCompras />} />
      <Route path="/listafavoritos" element={<ListaFavoritos />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/promocoes" element={<Promocoes />} />
      <Route path="/sair" element={<Sair />} />
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
    </Routes>
  );
}
