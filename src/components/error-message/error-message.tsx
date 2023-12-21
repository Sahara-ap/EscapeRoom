import './error-message.css';
import { useAppSelector } from '../../hooks/store-hooks';
import { getError } from '../../store/app/app.selectors';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);


  return (
    error
      ? (<div className={'error-message'}>{error}</div>)
      : null
  );

}

export { ErrorMessage };
