import { Route } from "config/routes";
import { matchRoutes, RouteObject, useLocation } from "react-router-dom";

const useCurrentRoute = (routes: Route[]): RouteObject | undefined => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes as any, location) ?? [{}];

  return route;
};

export default useCurrentRoute;
