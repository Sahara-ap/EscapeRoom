import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { MainPage } from './pages/main-page/main-page';
import { BookingPage } from './pages/booking/booking-page';
import { ContactsPage } from './pages/contacts-page.tsx/contacts-page';
import { LoginPage } from './pages/login-page/login-page';
import { MyQuestsPage } from './pages/my-quests-page/my-quests-page';
import { QuestPage } from './pages/quest-page/quest-page';
import { NotFoundPage } from './pages/404-page/404-page';

import { PrivateRoute } from './components/private-route/private-route';

import { AppRoute } from './consts';
import { Layout } from './components/layout/layout';
import { useAppDispatch } from './hooks/store-hooks';
import { checkAuthStatusAction } from './store/api-actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthStatusAction());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoute.Contacts} element={<ContactsPage />} />
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
            <Route path={`${AppRoute.Quest}/:id`} element={<QuestPage />} />

            <Route path={AppRoute.MyQuests} element={<PrivateRoute redirectTo={AppRoute.Login}><MyQuestsPage /></PrivateRoute>} />
            <Route path={`${AppRoute.Booking}/:id`} element={<PrivateRoute redirectTo={AppRoute.Login}><BookingPage /></PrivateRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider >
  );
}

export { App };
