import { Link } from 'react-router-dom';

import { AppRoute } from '../../consts';

import { TCard } from '../../types/types';

type TCardProps = {
  card: TCard;
  cb: (cardId: TCard['id']) => void;
}

function Card({ card, cb }: TCardProps): JSX.Element {
  function handleCardClick() {
    cb(card.id);
  }

  return (
    <div
      className="quest-card"
      onClick={handleCardClick}
    >
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={card.previewImgWebp}"img/content/ritual/ritual-size-s.webp, img/content/ritual/ritual-size-s@2x.webp 2x" />
          <img src="img/content/ritual/ritual-size-s.jpg" srcSet="img/content/ritual/ritual-size-s@2x.jpg 2x" width="344" height="232" alt="Череп и горящая свеча в тёмном помещении." />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${card.id}`}>Ритуал</Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>3&ndash;5&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>Лёгкий
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Card };
