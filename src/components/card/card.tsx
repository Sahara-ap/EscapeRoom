import { Link } from 'react-router-dom';

import { AppRoute } from '../../consts';
import { translateDate, translateLevelName } from '../../utils';

import { TCard, TPartialMyReservedQuest } from '../../types/types';

type TCardProps = {
  card: TCard;
  myCard?: TPartialMyReservedQuest;
}

function Card({ card, myCard}: TCardProps): JSX.Element {

  return (
    <div
      className="quest-card"
    >
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={card.previewImgWebp} />
          <img src={card.previewImg} srcSet={card.previewImg} width="344" height="232" alt={card.title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${card.id}`}>{card.title}</Link>
          {myCard && <span className="quest-card__info">[{translateDate(myCard.date)},&nbsp;{myCard.time}. {myCard.location.address}<br />м. Петроградская]</span>}
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>
            {myCard ? `${myCard.peopleCount} чел` : `${card.peopleMinMax[0]}-${card.peopleMinMax[1]} чел` }
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{translateLevelName(card.level)}
          </li>
        </ul>
        {myCard && <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>}
      </div>
    </div>
  );
}

export { Card };
