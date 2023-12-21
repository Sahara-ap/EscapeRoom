import { useAppSelector } from '../../hooks/store-hooks';
import { isQuestsLoading } from '../../store/cards/cards-selectors';
import styles from './preloader.module.css';

import { useEffect } from 'react';

function Preloader(): JSX.Element | null {
  const isCardsLoading = useAppSelector(isQuestsLoading);

  const message = 'Loading...';

  function handleDocumentClick(event: MouseEvent) {
    event.preventDefault();
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return (() => document.removeEventListener('click', handleDocumentClick));
  }, []);

  return (
    isCardsLoading
      ? (
        <div className="container">
          <div className="wrapper">
            <p className={`${styles.message}`}>{message}</p>
          </div>
        </div>
      )
      : null
  );
}



export { Preloader };
