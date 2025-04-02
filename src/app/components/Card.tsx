import cn from "clsx";
import { ICard } from "../types";
import Image from "next/image";

interface Props {
  card: ICard;
  selectedCard?: ICard;
  handleSelectedCard: (card: ICard) => () => void;
}

export const Card = ({ card, selectedCard, handleSelectedCard }: Props) => {
  const isSelected = selectedCard?.id === card.id;
  return (
    <div
      className={cn(
        "group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] bg-[#1C1C1C] text-white cursor-pointer",
        isSelected ? "border-[#0037C1]" : "hover:border-[#0037C1]/50"
      )}
      onClick={handleSelectedCard(card)}
    >
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&amp;w=800"
          alt="4 Yard Skip"
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
        />
        <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
          4 Yards
        </div>
        <div className="absolute bottom-3 left-2 z-20 space-y-2"></div>

        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
          {card.size} Yard Skip
        </h3>
        <p className="text-sm text-gray-400 mb-4 md:mb-6">
          {card.hire_period_days} day hire period
        </p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
              £{card.price_before_vat}
            </span>
            <span className="text-sm text-gray-400 ml-2">per week</span>
          </div>
        </div>
      </div>
      <button
        className={cn(
          "w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 text-white hover:bg-[#3A3A3A] hover:border-[#0037C1]",
          isSelected ? "bg-[#0037C1]" : "bg-[#2A2A2A]"
        )}
      >
        {isSelected ? (
          <span>Selected</span>
        ) : (
          <>
            <span>Select This Skip</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right w-4 h-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </>
        )}
      </button>
    </div>
  );
};
