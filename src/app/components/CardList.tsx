import { useState } from "react";
import { Card } from "./Card";
import { ICard } from "../types";

interface Props {
  cards: ICard[];
  selectedCard?: ICard;
  handleSelectedCard: (card: ICard) => () => void;
}

export const CardList = ({ cards, selectedCard, handleSelectedCard }: Props) => {
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {cards.length &&
        cards.map((card) => (
          <Card
            key={`card-${card.id}`}
            card={card}
            selectedCard={selectedCard}
            handleSelectedCard={handleSelectedCard}
          />
        ))}
    </div>
  );
};
