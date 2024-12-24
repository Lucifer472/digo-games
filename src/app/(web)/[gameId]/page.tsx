import { redirect } from "next/navigation";
import { Games } from "@/config";

import TopHeader from "@/components/ads/top-header";
import { GameLink } from "@/components/web/game-link";
import { GameIcon } from "@/components/web/game-icon";

const GameId = ({ params }: { params: { gameId: string } }) => {
  const gameId = decodeURIComponent(params.gameId);

  const game = Games.find((value) => value.label.toLowerCase() === gameId);

  if (!game) {
    return redirect("/");
  }

  return (
    <div className="w-full space-y-4 mb-4">
      <GameLink game={game} />
      <div
        dangerouslySetInnerHTML={{ __html: game.desc }}
        className="px-4 text-xl"
      ></div>
      <div className="w-full h-1 bg-white"></div>
      <TopHeader />
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-2 h-full px-4 md:px-2 xl:px-0">
        {Games.map((game) => {
          return <GameIcon src={game.src} label={game.label} key={game.link} />;
        })}
      </section>
    </div>
  );
};

export default GameId;
