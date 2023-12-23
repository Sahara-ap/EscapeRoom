import { TCard, TPartialMyReservedQuest } from '../../types/types';
import { Card } from '../card/card';

type TCardListProps = {
  cards: TCard[];
  myCard?: TPartialMyReservedQuest[];
  cb?: (cardId: TCard['id']) => void;
}

function CardList({ cards, myCard = [], cb }: TCardListProps): JSX.Element {
  return (
    <>
      {
        cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            myCard={myCard[index]}
            cb={cb}
          />
        ))
      }
    </>
  );
}

export { CardList };

