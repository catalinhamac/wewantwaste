"use client";

import { useState } from "react";
import { ICard } from "../types";
import { CardList } from "./CardList";

interface Props {
  cards: ICard[];
}

export const Main = ({ cards }: Props) => {
  const [selectedCard, setSelectedCard] = useState<ICard | undefined>();

  const handleSelectedCard = (card: ICard) => () => {
    setSelectedCard(card);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-center mb-8 overflow-x-auto">
        <div className="flex items-center space-x-4">
          <button className="flex items-center whitespace-nowrap transition-colors text-[#0037C1] cursor-pointer hover:text-[#0037C1]">
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
              className="lucide lucide-map-pin w-6 h-6"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="ml-2 text-white">Postcode</span>
          </button>
          <div className="w-16 h-px bg-[#0037C1]"></div>
          <button className="flex items-center whitespace-nowrap transition-colors text-[#0037C1] cursor-pointer hover:text-[#0037C1]">
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
              className="lucide lucide-trash2 w-6 h-6"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              <line x1="10" x2="10" y1="11" y2="17"></line>
              <line x1="14" x2="14" y1="11" y2="17"></line>
            </svg>
            <span className="ml-2 text-white">Waste Type</span>
          </button>
          <div className="w-16 h-px bg-[#2A2A2A]"></div>
          <button className="flex items-center whitespace-nowrap transition-colors text-[#0037C1] cursor-pointer hover:text-[#0037C1]">
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
              className="lucide lucide-truck w-6 h-6"
            >
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
              <path d="M15 18H9"></path>
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
              <circle cx="17" cy="18" r="2"></circle>
              <circle cx="7" cy="18" r="2"></circle>
            </svg>
            <span className="ml-2 text-white">Select Skip</span>
          </button>
          <div className="w-16 h-px bg-[#2A2A2A]"></div>
          <button
            disabled={false}
            className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"
          >
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
              className="lucide lucide-shield w-6 h-6"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            <span className="ml-2 text-white">Permit Check</span>
          </button>
          <div className="w-16 h-px bg-[#2A2A2A]"></div>
          <button
            disabled={false}
            className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"
          >
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
              className="lucide lucide-calendar w-6 h-6"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <span className="ml-2 text-white">Choose Date</span>
          </button>
          <div className="w-16 h-px bg-[#2A2A2A]"></div>
          <button
            disabled={true}
            className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"
          >
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
              className="lucide lucide-credit-card w-6 h-6"
            >
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
            <span className="ml-2 text-white">Payment</span>
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-32">
        <h2 className="text-2xl font-bold text-center mb-4">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Select the skip size that best suits your needs
        </p>
        <CardList
          cards={cards}
          selectedCard={selectedCard}
          handleSelectedCard={handleSelectedCard}
        />
      </div>
      {selectedCard && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
          <div className="max-w-7xl mx-auto">
            <div className="lg:hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="font-medium"></div>
                <div>
                  <span className="text-xl font-bold text-[#0037C1]">£</span>
                  <span className="text-sm text-gray-400 ml-2">
                    {selectedCard.size} days
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="btn-secondary w-full">Back</button>
                <button className="btn-primary w-full">Continue</button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div>
                  <h3 className="font-medium"></h3>
                  <p className="text-sm text-gray-400">{selectedCard.size}</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#0037C1]">£</span>
                  <span className="text-sm text-gray-400 ml-2">
                    {selectedCard.hire_period_days} days hire
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="btn-secondary">Back</button>
                <button className="btn-primary flex items-center gap-2">
                  Continue
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
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
