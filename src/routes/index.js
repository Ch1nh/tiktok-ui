import { LayoutOnly } from '~/components/Layouts';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
//public routes
const publicRoutes = [
  { path: '/', Component: Home },
  { path: '/Following', Component: Following },
  { path: '/profile', Component: Profile },
  { path: '/upload', Component: Upload, layout: LayoutOnly },
  { path: '/search', Component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
