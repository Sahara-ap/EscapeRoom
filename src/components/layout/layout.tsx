import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/footer';

function Layout(): JSX.Element {
  return (
    <div className="wrapper">
      <Outlet />
      <Footer />
    </div>
  );
}

export { Layout };
