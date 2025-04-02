import { Main } from "./components/Main";
import { ICard } from "./types";

export default async function Home() {
  let cards: ICard[] = [];
  try {
    const response = await fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    );

    if (!response.ok) {
      throw response.statusText;
    }

    cards = await response.json();
  } catch (e) {
    console.log("Error:", e);
  }

  console.log(cards)

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Main cards={cards} />
    </div>
  );
}
