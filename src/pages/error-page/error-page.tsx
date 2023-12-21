import styles from './error-page.module.css';

import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/store-hooks';
import { fetchQuestsAction } from '../../store/api-actions';

function ErrorPage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className={`${styles.notfound} decorated-page`}>
      <Helmet>
        <title>{'Escape-Room - Error'}</title>
      </Helmet>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Не удалось загрузить квесты</h1>
        <button
          onClick={() => {
            dispatch(fetchQuestsAction());
          }}
          className={styles.btn}
          type="button"
        >
          Попробовать ещё раз
        </button>

      </div>
    </div >
  );
}

export default ErrorPage;
