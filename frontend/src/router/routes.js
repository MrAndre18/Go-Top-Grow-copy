import Info from "../pages/Info/Info";
import Main from "../pages/Main/Main";
import { infoRoutes } from "./infoRoutes";
import DetailPage from "../components/DetailPage/DetailPage";
import { lawsRoutes } from "./lawsRoutes";
import Laws from "../pages/Laws/Laws";
import Privacy from "../pages/Privacy/Privacy";
import NotFound from "../pages/NotFound/NotFound";
import App from "../App";
import Contact from "../pages/Contact/Contact";
import { Blog } from "../pages/blog";
import { BlogPost } from "../pages/blog-post/ui";

export const routes = [
  //-- Главная
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Main />,
        index: true
      },

      //-- Privacy policy
      {
        path: 'privacy_policy',
        element: <Privacy />
      },

      //-- Contact us
      {
        path: 'contact-us',
        element: <Contact />
      },

      //-- Laws
      {
        path: 'laws',
        children: lawsRoutes,
        element: <Laws />
      },

      //-- Info
      {
        path: 'info',
        element: <Info />,
        children: infoRoutes
      },
      { // Detail
        path: 'info/:infoPage/:infoCategory/:infoCategorySlug',
        element: <DetailPage />
      },

      //-- Blog
      {
        path: 'blog',
        element: <Blog />
      },
      { // Detail
        path: 'blog/:postSlug',
        element: <BlogPost />
      },

      //-- 404
      {
        path: '*',
        element: <NotFound />
      },
    ]
  }
]