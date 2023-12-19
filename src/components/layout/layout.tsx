import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/footer';

function Layout(): JSX.Element {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export { Layout };
