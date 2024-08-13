import { Navigate } from "react-router-dom";
import LawsContent from "../pages/Laws/LawsContent";

export const lawsRoutes = [
  {
    path: ':category',
    element: <LawsContent />
  },
  {
    path: 'all',
    element: <LawsContent />
  },
  { path: '', element: <Navigate to='all' /> }
]