import styles from './error-page.module.css';

import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/store-hooks';
import { fetchMyQuestsAction, fetchQuestsAction, fetchSelectedQuestAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';

type ErrorPageProps = {
  page: 'main' | 'quest' | 'myquest';
}
function ErrorPage({ page }: ErrorPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  function handleButtonClick() {
    switch (page) {
      case 'main':
        dispatch(fetchQuestsAction());
        return;
      case 'quest':
        if (id) {
          dispatch(fetchSelectedQuestAction(id));
        }
        return;
      case 'myquest':
        dispatch(fetchMyQuestsAction());
    }
  }

  return (
    <div className={`${styles.notfound} decorated-page`}>
      <Helmet>
        <title>{'Escape-Room - Error'}</title>
      </Helmet>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Не удалось загрузить квесты</h1>
        <button
          onClick={handleButtonClick}
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
