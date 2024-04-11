import { Navigate } from 'react-router-dom';
import NotFound from '../pages/404/404';
import chatConfig from '../pages/chat/chat.config';
import homeConfig from '../pages/home/home.config';
import forumConfig from '../pages/forum/forum.config';

const routeConfigs = [chatConfig, homeConfig, forumConfig];

const routes = [
  ...routeConfigs,
  {
    path: '404',
    element: <NotFound />,
    public: true,
  },
  {
    path: '*',
    element: <Navigate to="404" replace />,
  },
];

export default routes;