import { TCard, TPartialMyReservedQuest } from '../../types/types';
import { Card } from '../card/card';

type TCardListProps = {
  cards: TCard[];
  myCard?: TPartialMyReservedQuest[];
}

function CardList({ cards, myCard = [] }: TCardListProps): JSX.Element {
  return (
    <>
      {
        cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            myCard={myCard[index]}
          />
        ))
      }
    </>
  );
}

export { CardList };

