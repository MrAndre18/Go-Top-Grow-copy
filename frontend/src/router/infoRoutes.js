import { Navigate } from "react-router-dom";
import State from "../pages/Info/pages/State/State";
import Business from "../pages/Info/pages/Business/Business";

export const infoRoutes = [
  {
    path: 'state',
    element: <State />
  },
  {
    path: 'business',
    element: <Business />
  },
  { path: '', element: <Navigate to='state' /> }
]