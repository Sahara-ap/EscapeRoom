import { TCard } from '../../types/types';
import { Card } from '../card/card';

type TCardListProps = {
  cards: TCard[];
  cb: (cardId: TCard['id']) => void;
}

function CardList({ cards, cb }: TCardListProps): JSX.Element {
  return (
    <>
      {
        cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            cb={cb}
          />
        ))
      }
    </>
  );
}

export { CardList };

