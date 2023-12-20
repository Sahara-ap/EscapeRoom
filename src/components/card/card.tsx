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

  function translateLevelName(levelKey: TCard['level']) {
    const level = {
      'easy': 'легкий',
      'medium': 'средний',
      'hard': 'сложный',
    };

    return level[levelKey];
  }

  return (
    <div
      className="quest-card"
      onClick={handleCardClick}
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
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{card.peopleMinMax[0]}&ndash;{card.peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{translateLevelName(card.level)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Card };
