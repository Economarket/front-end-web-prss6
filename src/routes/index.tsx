import { Route, Routes } from "react-router-dom";

// import PrivateRoute from "./privateRoute";
// import RequireAuth from './requireAuth';

// import Layout from '';
// import Unauthorized from '';

import Login from "../pages/Login/index";
import User from "../pages/User/index";
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
      {/* <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/novo-usuario" element={<User />} />
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
