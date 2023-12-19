import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import styles from './404-page.module.css';

function NotFoundPage(): JSX.Element {

  return (
    <div className={`${styles.notfound} decorated-page`}>
      <Helmet>
        <title>{'Escape-Room - Not Found'}</title>
      </Helmet>
      <h1 className={styles.title}>404 NOT FOUND</h1>
      <h3>
        <Link to={'/'}>Go to main page</Link>
      </h3>
    </div >
  );
}

export { NotFoundPage };
