import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/main-page/main-page';
import { BookingPage } from './pages/booking/booking-page';
import { ContactsPage } from './pages/contacts-page.tsx/contacts-page';
import { LoginPage } from './pages/login-page/login-page';
import { MyQuestsPage } from './pages/my-quests-page/my-quests-page';
import { QuestPage } from './pages/quest-page/quest-page';
import { NotFoundPage } from './pages/404-page/404-page';

import { AppRoute } from './consts';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route path={AppRoute.Booking} element={<BookingPage />} />
          <Route path={AppRoute.Contacts} element={<ContactsPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.MyQuests} element={<MyQuestsPage />} />
          <Route path={AppRoute.Quest} element={<QuestPage />} />
          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>


    </HelmetProvider>
  );
}

export { App };
