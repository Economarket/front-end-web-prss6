import React from "react";
// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useSession } from "../contexts/session";

// interface RequireAuthProps {
//   allowedRoles: JSX.Element;
// }

// const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
//   const { user } = useSession();
//   const location = useLocation();

//   if (user) {
//     return user?.roles?.includes(allowedRoles) ? (
//       <Outlet />
//     ) : (
//       <Navigate to="app/unauthorized" state={{ from: location }} replace />
//     );
//   } else {
//     <Navigate to="app/login" state={{ from: location }} replace />;
//   }
// };
// export default RequireAuth;
