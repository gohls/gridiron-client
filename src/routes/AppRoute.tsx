import { Outlet, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import ProtectedRoute from '@/routes/ProtectedRoute';
import NotFound from '@/pages/NotFound';
import SignUp from '@/pages/SignUp';
import SignIn from '@/pages/SignIn';
import FantasyUserSetup from '@/pages/FantasyUserSetup';
import StackedLayout from '@/layout/StackedLayout';
import AppNavbar from '@/components/navigation/AppNavbar';
import AppSidebar from '@/components/navigation/AppSidebar';
import { ROUTES, protectedRoutes } from '@/routes/routeConfig';

const AppRoute = () => {
  return (
    <Routes>
      <Route path={ROUTES.FANTASY_USER_SETUP} element={<FantasyUserSetup />} />
      <Route path={ROUTES.SIGNIN} element={<SignIn />} />
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />

      <Route element={<ProtectedRoute />}>
        <Route
          element={
            <StackedLayout navbar={<AppNavbar />} sidebar={<AppSidebar />}>
              <Outlet />
            </StackedLayout>
          }
        >
          {protectedRoutes.map(({ path, element: Element }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Element />
                </Suspense>
              }
            />
          ))}
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;
